import { ethers, providers } from "ethers";
import { AffinePass__factory, AffinePassBridge__factory } from "./typechain";
import {
  EthRPC,
  PassEthAddress,
  PassEthBridgeAddress,
  PassPolygonAddress,
  PassPolygonBridgeAddress,
  PolygonRPC,
} from "./constants";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { SmallTxReceipt } from "./sdk-v1-types";

export const CCIP_NETWORK_SELECTOR: Record<1 | 137, string> = {
  1: `5009297550715157269`,
  137: `4051577828743386545`,
};

/**
 * Get the Affine Pass Bridge contract instance based on the destination chain ID
 * @param destinationChainId the destination chain id
 * @param provider
 * @returns
 */
export async function getAffinePassBridge(destinationChainId: number) {
  if (destinationChainId === 1) {
    return AffinePassBridge__factory.connect(
      PassPolygonBridgeAddress,
      new providers.JsonRpcProvider(PolygonRPC),
    );
  } else {
    return AffinePassBridge__factory.connect(
      PassEthBridgeAddress,
      new providers.JsonRpcProvider(EthRPC),
    );
  }
}

export async function getAffinePass(
  chainId: number,
  provider: providers.JsonRpcProvider,
) {
  if (chainId === 1) {
    return AffinePass__factory.connect(PassPolygonAddress, provider);
  } else {
    return AffinePass__factory.connect(PassEthAddress, provider);
  }
}

/**
 * Get the fee in native asset for bridging pass to destination chain
 * @param destinationChainId the destination chain id
 * @param provider
 * @returns
 */
export async function ccipFee(
  destinationChainId: 1 | 137,
  provider: providers.JsonRpcProvider,
): Promise<number> {
  if (![1, 137].includes(destinationChainId)) {
    throw new Error("Invalid chain id. Only 1 and 137 are supported.");
  }

  console.log("GETTING CCIP FEE", destinationChainId);

  const affinePass = await getAffinePassBridge(destinationChainId);

  if (!affinePass) {
    console.error(
      "ERROR TRYING TO GET CCIP FEE - AFFINE PASS BRIDGE UNDEFINED",
    );
    throw new Error(
      "ERROR TRYING TO GET CCIP FEE - AFFINE PASS BRIDGE UNDEFINED",
    );
  }

  const _fee = await affinePass.ccipFee(
    CCIP_NETWORK_SELECTOR[destinationChainId],
  );
  return parseFloat(ethers.utils.formatEther(_fee)) * 1.05;
}

/**
 * Bridge pass to destination chain
 * @param destinationChainId the destination chain id
 * @param destinationAddress the destination address
 * @param tokenId token id of the pass
 * @param fee fee in native asset
 * @param provider
 * @returns
 */
export async function bridgePass(
  destinationChainId: 1 | 137,
  destinationAddress: string,
  tokenId: number,
  fee: number,
  provider: providers.JsonRpcProvider,
): Promise<SmallTxReceipt> {
  if (![1, 137].includes(destinationChainId)) {
    throw new Error("Invalid chain id. Only 1 and 137 are supported.");
  }

  const bridge = await getAffinePassBridge(destinationChainId);

  if (bridge) {
    const value = ethers.utils.parseEther(fee.toString());
    const gasLimit = (
      await bridge.estimateGas.bridgePass(
        CCIP_NETWORK_SELECTOR[destinationChainId],
        destinationAddress,
        tokenId,
        { value },
      )
    )
      .mul(12)
      .div(10);

    const tx: TransactionResponse = await bridge.bridgePass(
      CCIP_NETWORK_SELECTOR[destinationChainId],
      destinationAddress,
      tokenId,
      { value, gasLimit },
    );

    const receipt = await tx.wait();

    const cost = receipt.gasUsed.mul(receipt.effectiveGasPrice);
    const txnCost = ethers.utils.formatEther(cost);
    return {
      blockNumber: receipt.blockNumber.toString(),
      txnHash: receipt.transactionHash,
      txnCost,
      gasPrice: ethers.utils.formatEther(receipt.effectiveGasPrice),
    };
  } else {
    throw new Error("Bridge contract not found");
  }
}

export async function getPassBalance(chainId: number, address: string) {
  const affinePass = await getAffinePass(
    chainId,
    new providers.JsonRpcProvider(EthRPC),
  );
  const balance = affinePass ? await affinePass.balanceOf(address) : undefined;
  return balance === undefined ? 0 : balance.toNumber();
}
