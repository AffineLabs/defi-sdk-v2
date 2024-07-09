"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPassBalance = exports.bridgePass = exports.ccipFee = exports.getAffinePass = exports.getAffinePassBridge = exports.CCIP_NETWORK_SELECTOR = void 0;
const ethers_1 = require("ethers");
const typechain_1 = require("./typechain");
const constants_1 = require("./constants");
exports.CCIP_NETWORK_SELECTOR = {
    1: `5009297550715157269`,
    137: `4051577828743386545`,
};
/**
 * Get the Affine Pass Bridge contract instance based on the destination chain ID
 * @param destinationChainId the destination chain id
 * @param provider
 * @returns
 */
async function getAffinePassBridge(destinationChainId, provider) {
    if (destinationChainId === 1) {
        return typechain_1.AffinePassBridge__factory.connect(constants_1.PassPolygonBridgeAddress, provider);
    }
    else {
        return typechain_1.AffinePassBridge__factory.connect(constants_1.PassEthBridgeAddress, provider);
    }
}
exports.getAffinePassBridge = getAffinePassBridge;
async function getAffinePass(chainId, provider) {
    if (chainId === 1) {
        return typechain_1.AffinePass__factory.connect(constants_1.PassPolygonAddress, provider);
    }
    else {
        return typechain_1.AffinePass__factory.connect(constants_1.PassEthAddress, provider);
    }
}
exports.getAffinePass = getAffinePass;
/**
 * Get the fee in native asset for bridging pass to destination chain
 * @param destinationChainId the destination chain id
 * @param provider
 * @returns
 */
async function ccipFee(destinationChainId, provider) {
    if (![1, 137].includes(destinationChainId)) {
        throw new Error("Invalid chain id. Only 1 and 137 are supported.");
    }
    const affinePass = await getAffinePassBridge(destinationChainId, provider);
    if (!affinePass) {
        console.error("ERROR TRYING TO GET CCIP FEE - AFFINE PASS BRIDGE UNDEFINED");
        throw new Error("ERROR TRYING TO GET CCIP FEE - AFFINE PASS BRIDGE UNDEFINED");
    }
    const _fee = await affinePass.ccipFee(exports.CCIP_NETWORK_SELECTOR[destinationChainId]);
    return parseFloat(ethers_1.ethers.utils.formatEther(_fee)) * 1.05;
}
exports.ccipFee = ccipFee;
/**
 * Bridge pass to destination chain
 * @param destinationChainId the destination chain id
 * @param destinationAddress the destination address
 * @param tokenId token id of the pass
 * @param fee fee in native asset
 * @param provider
 * @returns
 */
async function bridgePass(destinationChainId, destinationAddress, tokenId, fee, provider) {
    if (![1, 137].includes(destinationChainId)) {
        throw new Error("Invalid chain id. Only 1 and 137 are supported.");
    }
    const bridge = await getAffinePassBridge(destinationChainId, provider);
    if (bridge) {
        const value = ethers_1.ethers.utils.parseEther(fee.toString());
        const gasLimit = (await bridge.estimateGas.bridgePass(exports.CCIP_NETWORK_SELECTOR[destinationChainId], destinationAddress, tokenId, { value }))
            .mul(12)
            .div(10);
        const tx = await bridge.bridgePass(exports.CCIP_NETWORK_SELECTOR[destinationChainId], destinationAddress, tokenId, { value, gasLimit });
        const receipt = await tx.wait();
        const cost = receipt.gasUsed.mul(receipt.effectiveGasPrice);
        const txnCost = ethers_1.ethers.utils.formatEther(cost);
        return {
            blockNumber: receipt.blockNumber.toString(),
            txnHash: receipt.transactionHash,
            txnCost,
            gasPrice: ethers_1.ethers.utils.formatEther(receipt.effectiveGasPrice),
        };
    }
    else {
        throw new Error("Bridge contract not found");
    }
}
exports.bridgePass = bridgePass;
async function getPassBalance(chainId, address) {
    const affinePass = await getAffinePass(chainId, new ethers_1.providers.JsonRpcProvider(constants_1.EthRPC));
    const balance = affinePass ? await affinePass.balanceOf(address) : undefined;
    return balance === undefined ? 0 : balance.toNumber();
}
exports.getPassBalance = getPassBalance;
