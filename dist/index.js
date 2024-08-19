"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertWStEthToStEth = exports.convertStEthToWStEth = exports.getUltraEthRate = exports.getSymbioticRate = exports.getSymbioticTVL = exports.getUltraEthTVL = exports._addDecimals = exports._removeDecimals = exports.AffineRestakingSDK = void 0;
const ethers_1 = require("ethers");
const permit2_sdk_1 = require("@uniswap/permit2-sdk");
const constants_1 = require("./constants");
// ABIs
const erc20_json_1 = __importDefault(require("./abis/erc20.json"));
const eigenlayerStrategy_json_1 = __importDefault(require("./abis/eigenlayerStrategy.json"));
const ultraEth_json_1 = __importDefault(require("./abis/ultraEth.json"));
const withdrawalEscrow_json_1 = __importDefault(require("./abis/withdrawalEscrow.json"));
const delegationManager_json_1 = __importDefault(require("./abis/delegationManager.json"));
const typechain_1 = require("./typechain");
const pass_1 = require("./pass");
const bridge_typegen_1 = require("./bridge-typegen");
const chain_constants_1 = require("./chain-constants");
class AffineRestakingSDK {
    provider;
    signer;
    constructor(provider, signer) {
        this.provider = provider;
        this.signer = signer || this.provider.getSigner();
    }
    // ========= BRIDGING =========
    async deposit_to_chain(contract, tokenAddress, amount, receiver) {
        // TODO implement @maruf
    }
    async approveRouter(amount) {
        const asset = typechain_1.MockERC20__factory.connect(constants_1.SymbioticVault, this.signer);
        return asset.approve(constants_1.XUltraLRTRouterAddress, ethers_1.ethers.utils.parseUnits(amount, await asset.decimals()));
    }
    async isRouterApproved(amount) {
        const asset = typechain_1.MockERC20__factory.connect(constants_1.SymbioticVault, this.signer);
        const units = _addDecimals(amount.toString(), await asset.decimals());
        const receiver = await this.signer.getAddress();
        const allowance = await asset.allowance(receiver, constants_1.XUltraLRTRouterAddress);
        return ethers_1.ethers.BigNumber.from(allowance).gte(units);
    }
    async doMainnetTransfer(chainIdFrom, chainIdTo, to, amount) {
        const router = bridge_typegen_1.Routerabi__factory.connect(constants_1.XUltraLRTRouterAddress, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
        const assetUnits = ethers_1.ethers.utils.parseUnits(amount, await lrtVault.decimals());
        // Case 1: With an address
        if (to) {
            return await router["transferRemoteUltraLRT(address,uint32,address,uint256)"](constants_1.SymbioticVault, chainIdTo, to, assetUnits, {
                value: assetUnits, // Assuming native token transfer, remove if unnecessary
            });
        }
        // Case 2: Without an address
        return await router["transferRemoteUltraLRT(address,uint32,uint256)"](constants_1.SymbioticVault, chainIdTo, assetUnits, {
            value: assetUnits, // Assuming native token transfer, remove if unnecessary
        });
    }
    async getBalanceFromChain(chainId) {
        const contract = chain_constants_1.NETWORK_PARAMS[chainId].ultraLRTAddress;
        if (!contract)
            return 0;
        const provider = new ethers_1.providers.JsonRpcProvider(chain_constants_1.NETWORK_PARAMS[chainId].rpcUrls[0]);
        const router = typechain_1.MockERC20__factory.connect(contract, provider);
        const balance = await router.balanceOf(await this.signer.getAddress());
        return Number(_removeDecimals(balance, await router.decimals()));
    }
    // Transfer remote with address
    async transferRemoteWithAddress(chainID, destination, to, amount) {
        console.log("transferRemoteWithAddress", chainID, destination, to, amount);
        const contract = chain_constants_1.NETWORK_PARAMS[chainID].xUltraLRTAddress;
        if (!contract)
            throw new Error("Invalid chainID Or chain ID doesnt have contract deployment");
        const router = bridge_typegen_1.XUltraLRT__factory.connect(contract, this.signer);
        const asset = chain_constants_1.NETWORK_PARAMS[chainID].ultraLRTAddress;
        const provider = new ethers_1.providers.JsonRpcProvider(chain_constants_1.NETWORK_PARAMS[chainID].rpcUrls[0]);
        if (!asset)
            throw new Error("Invalid chainID Or chain ID doesnt have contract deployment");
        const assets = typechain_1.MockERC20__factory.connect(asset, provider);
        const quote = await this.quoteTransferRemoteWithAddress(chainID, destination, to, amount);
        //TODO: FIX DECIMALS HERE
        const assetUnits = ethers_1.ethers.utils.parseUnits(amount, await assets.decimals());
        return await router["transferRemote(uint32,address,uint256)"](destination, to, assetUnits, {
            value: quote, // Assuming native token transfer, remove if unnecessary
        });
    }
    // Transfer remote without address
    async transferRemoteWithoutAddress(chainID, destination, amount) {
        const contract = chain_constants_1.NETWORK_PARAMS[chainID].xUltraLRTAddress;
        if (!contract)
            throw new Error("Invalid chainID Or chain ID doesnt have contract deployment");
        const router = bridge_typegen_1.XUltraLRT__factory.connect(contract, this.signer);
        const assetUnits = ethers_1.ethers.utils.parseUnits(amount, await router.decimals());
        return await router["transferRemote(uint32,uint256)"](destination, assetUnits, {
            value: assetUnits, // Assuming native token transfer, remove if unnecessary
        });
    }
    // Quote transfer remote with address
    async quoteTransferRemoteWithAddress(chainID, destination, to, amount) {
        const contract = chain_constants_1.NETWORK_PARAMS[chainID].xUltraLRTAddress;
        if (!contract)
            throw new Error("Invalid chainID Or chain ID doesnt have contract deployment");
        const router = bridge_typegen_1.XUltraLRT__factory.connect(contract, this.signer);
        const assetUnits = ethers_1.ethers.utils.parseUnits(amount, await router.decimals());
        const target = chain_constants_1.NETWORK_PARAMS[destination].xUltraLRTAddress;
        if (!target)
            throw new Error("Invalid chainID Or chain ID doesnt have contract deployment");
        return await router["quoteTransferRemote(uint32,address,uint256)"](target, to, assetUnits);
    }
    // Quote transfer remote without address
    async quoteTransferRemoteWithoutAddress(chainID, destination, amount) {
        const contract = chain_constants_1.NETWORK_PARAMS[chainID].xUltraLRTAddress;
        if (!contract)
            throw new Error("Invalid chainID Or chain ID doesnt have contract deployment");
        const router = bridge_typegen_1.XUltraLRT__factory.connect(contract, this.signer);
        const assetUnits = ethers_1.ethers.utils.parseUnits(amount, await router.decimals());
        const target = chain_constants_1.NETWORK_PARAMS[destination].xUltraLRTAddress;
        if (!target)
            throw new Error("Invalid chainID Or chain ID doesnt have contract deployment");
        return await router["quoteTransferRemote(uint32,uint256)"](ethers_1.ethers.utils.parseUnits(destination + ""), assetUnits);
    }
    async _getVaultBalanceByAsset(vaultAddress) {
        const address = await this.signer.getAddress();
        const vault = typechain_1.UltraLRT__factory.connect(vaultAddress, this.signer);
        const asset = typechain_1.MockERC20__factory.connect(await vault.asset(), this.signer);
        const shares = await vault.balanceOf(address);
        const assets = await vault.convertToAssets(shares);
        return _removeDecimals(assets, await asset.decimals());
    }
    async getUltraEthBalance() {
        return this._getVaultBalanceByAsset(constants_1.UltraLRTAddress);
    }
    async getSymbioticBalance() {
        return this._getVaultBalanceByAsset(constants_1.SymbioticVault);
    }
    async _getTokenBalance(tokenAddress) {
        const address = await this.signer.getAddress();
        const token = typechain_1.MockERC20__factory.connect(tokenAddress, this.signer);
        const balance = await token.balanceOf(address);
        return _removeDecimals(balance, await token.decimals());
    }
    async getStEthBalance() {
        return this._getTokenBalance(constants_1.StETHAddress);
    }
    async getWStEthBalance() {
        return this._getTokenBalance(constants_1.WStEthAddress);
    }
    async getWEthBalance() {
        return this._getTokenBalance(constants_1.WEthAddress);
    }
    async migratableAssets(address) {
        const eigenStETH = new ethers_1.ethers.Contract(constants_1.EigenStETHStrategy, eigenlayerStrategy_json_1.default, this.signer);
        const value = await eigenStETH.userUnderlyingView(address);
        return parseFloat(_removeDecimals(value, 18));
    }
    async queueMigrationWithdrawal(address, assets) {
        console.log("queueMigrationWithdrawal");
        const eigenStETH = new ethers_1.ethers.Contract(constants_1.EigenStETHStrategy, eigenlayerStrategy_json_1.default, this.signer);
        const eigenDelegator = new ethers_1.ethers.Contract(constants_1.EigenDelegatorAddress, delegationManager_json_1.default, this.signer);
        const assetUnits = ethers_1.ethers.utils.parseUnits(assets, 18);
        const shares = await eigenStETH.underlyingToShares(assetUnits);
        console.log("shares", shares.toString());
        const queuedWithdrawalParams = [
            [[constants_1.EigenStETHStrategy], [ethers_1.ethers.BigNumber.from(shares)], address],
        ];
        const tx = await eigenDelegator.queueWithdrawals(queuedWithdrawalParams, {
            value: ethers_1.ethers.utils.parseEther("0"),
        });
        return tx;
    }
    async isValidAddress(address) {
        return ethers_1.ethers.utils.isAddress(address);
    }
    async completeMigrationWithdrawal(address, delegator, nonce, blockNumber, shares) {
        // Validate addresses
        if (!(await this.isValidAddress(constants_1.EigenDelegatorAddress)) ||
            !(await this.isValidAddress(address)) ||
            !(await this.isValidAddress(delegator)) ||
            !(await this.isValidAddress(constants_1.EigenStETHStrategy)) ||
            !(await this.isValidAddress(constants_1.StETHAddress))) {
            throw new Error("One or more addresses are invalid");
        }
        // Convert parameters to the correct types
        const nonceBigNumber = ethers_1.ethers.BigNumber.from(nonce);
        const blockNumberInt = parseInt(blockNumber, 10);
        const sharesBigNumber = ethers_1.ethers.BigNumber.from(shares);
        // Log addresses and parameters
        console.log("Address:", address);
        console.log("Delegator:", delegator);
        console.log("EigenDelegatorAddress:", constants_1.EigenDelegatorAddress);
        console.log("EigenStETHStrategy:", constants_1.EigenStETHStrategy);
        console.log("StETHAddress:", constants_1.StETHAddress);
        console.log("Nonce (BigNumber):", nonceBigNumber.toString());
        console.log("BlockNumber (int):", blockNumberInt);
        console.log("Shares (BigNumber):", sharesBigNumber.toString());
        const eigenDelegator = new ethers_1.ethers.Contract(constants_1.EigenDelegatorAddress, delegationManager_json_1.default, this.signer);
        const withdrawalInfos = [
            {
                staker: address,
                delegatedTo: delegator,
                withdrawer: address,
                nonce: nonceBigNumber,
                startBlock: blockNumberInt,
                strategies: [constants_1.EigenStETHStrategy],
                shares: [sharesBigNumber],
            },
        ];
        const assetsArray = [[constants_1.StETHAddress]];
        const middlewareTimesIndex = [0];
        const receiveAsTokens = [true];
        // Log the structured data
        console.log("WithdrawalInfos:", JSON.stringify(withdrawalInfos, null, 2));
        console.log("AssetsArray:", assetsArray);
        console.log("MiddlewareTimesIndex:", middlewareTimesIndex);
        console.log("ReceiveAsTokens:", receiveAsTokens);
        try {
            const gasEstimate = await eigenDelegator.estimateGas.completeQueuedWithdrawals(withdrawalInfos, assetsArray, middlewareTimesIndex, receiveAsTokens, { from: await this.signer.getAddress() });
            console.log("Estimated Gas:", gasEstimate.toString());
            const tx = await eigenDelegator.completeQueuedWithdrawals(withdrawalInfos, assetsArray, middlewareTimesIndex, receiveAsTokens, { from: await this.signer.getAddress(), gasLimit: gasEstimate });
            console.log("Transaction successful:", tx);
            return tx;
        }
        catch (error) {
            console.error("Error completing queued withdrawals:", error);
            throw error;
        }
    }
    async canWithdraw(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
        const value = await lrtVault.canWithdraw(_addDecimals(amount.toString(), await asset.decimals()));
        return value;
    }
    async canWithdrawSymbiotic(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
        const value = await lrtVault.canWithdraw(_addDecimals(amount.toString(), await asset.decimals()));
        return value;
    }
    async deposit(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
        const assetUnits = _addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.deposit(assetUnits, await this.signer.getAddress());
        return tx;
    }
    async withdraw(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const assetUnits = _addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
        return tx;
    }
    async depositSymbiotic(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const assetUnits = _addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.deposit(assetUnits, receiver);
        return tx;
    }
    async isPermit2Approve(token, amount) {
        const asset = typechain_1.MockERC20__factory.connect(token, this.signer);
        const receiver = await this.signer.getAddress();
        const allowance = await asset.allowance(receiver, permit2_sdk_1.PERMIT2_ADDRESS);
        const assetUnits = _addDecimals(amount, await asset.decimals());
        if (allowance.lt(assetUnits)) {
            // get approval for permit 2
            return false;
        }
        return true;
    }
    async approvePermit2(token) {
        const asset = typechain_1.MockERC20__factory.connect(token, this.signer);
        const tx = await asset.approve(permit2_sdk_1.PERMIT2_ADDRESS, ethers_1.BigNumber.from("2").pow(256).sub(1));
        return tx;
    }
    async depositERC20Any(token, amount, vault) {
        const asset = typechain_1.MockERC20__factory.connect(token, this.signer);
        const router = typechain_1.UltraLRTRouter__factory.connect(constants_1.RouterAddress, this.signer);
        const receiver = await this.signer.getAddress();
        // check allowance with the permit2
        const allowance = await asset.allowance(receiver, permit2_sdk_1.PERMIT2_ADDRESS);
        const assetUnits = _addDecimals(amount, await asset.decimals());
        if (allowance.lt(assetUnits)) {
            // get approval for permit 2
            throw Error("No allowance to permit2, please approve permit2 address");
        }
        const allowanceProvider = new permit2_sdk_1.AllowanceProvider(this.provider, permit2_sdk_1.PERMIT2_ADDRESS);
        const nonce = await this._getRandomNonce();
        const deadline = this._toDeadline(30 * 60 * 1000); // deadline 30 mins
        const permit = {
            permitted: {
                token,
                amount: assetUnits,
            },
            spender: router.address,
            nonce,
            deadline,
        };
        const { domain, types, values } = permit2_sdk_1.SignatureTransfer.getPermitData(permit, permit2_sdk_1.PERMIT2_ADDRESS, await this.signer.getChainId());
        const signature = await this.provider
            .getSigner()
            ._signTypedData(domain, types, values);
        let tx;
        if (token === constants_1.StETHAddress) {
            tx = await router.depositStEth(assetUnits, vault, receiver, nonce, deadline, signature);
        }
        else if (token === constants_1.WStEthAddress) {
            tx = await router.depositWStEth(assetUnits, vault, receiver, nonce, deadline, signature);
        }
        else if (token === constants_1.WEthAddress) {
            tx = await router.depositWeth(assetUnits, vault, receiver, nonce, deadline, signature);
        }
        else {
            throw Error("Invalid token");
        }
        return tx;
    }
    async depositNative(amount, vault) {
        const router = typechain_1.UltraLRTRouter__factory.connect(constants_1.RouterAddress, this.signer);
        const receiver = await this.signer.getAddress();
        const assetUnits = _addDecimals(amount, 18);
        const tx = await router.depositNative(vault, receiver, {
            value: assetUnits,
        });
        return tx;
    }
    async withdrawSymbiotic(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const assetUnits = _addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
        return tx;
    }
    async withdrawableAssets(vaultAddress, address) {
        const vault = typechain_1.UltraLRT__factory.connect(vaultAddress, this.signer);
        const asset = typechain_1.MockERC20__factory.connect(await vault.asset(), this.signer);
        const withdrawalEscrowV2 = typechain_1.WithdrawalEscrowV2__factory.connect(await vault.escrow(), this.signer);
        const vaultDecimals = await vault.decimals();
        const assetDecimals = await asset.decimals();
        const resolvingEpoch = (await withdrawalEscrowV2.resolvingEpoch()).toNumber();
        const currentEpoch = (await withdrawalEscrowV2.currentEpoch()).toNumber();
        let totalAmount = 0;
        const epochData = [];
        for (let i = 0; i <= currentEpoch; i++) {
            const shares = await withdrawalEscrowV2.userDebtShare(ethers_1.ethers.BigNumber.from(i), address);
            if (shares.eq(0))
                continue;
            const assets = await withdrawalEscrowV2.withdrawableAssets(address, i);
            epochData.push({
                epoch: i,
                assets: _removeDecimals(assets, assetDecimals),
                shares: _removeDecimals(shares, vaultDecimals),
                canWithdraw: i < resolvingEpoch && shares.gt(0),
            });
            totalAmount += parseFloat(_removeDecimals(assets, assetDecimals));
        }
        return { totalAmount, epochData };
    }
    async getEthBalance() {
        const balance = await this.signer.getBalance();
        return ethers_1.ethers.utils.formatEther(balance);
    }
    async canWithdrawEscrow(epoch) {
        const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
        const value = await withdrawalEscrowV2.canWithdraw(epoch);
        return value;
    }
    async canWithdrawEscrowSymbiotic(epoch) {
        const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.SymbioticEscrow, withdrawalEscrow_json_1.default, this.signer);
        const value = await withdrawalEscrowV2.canWithdraw(epoch);
        return value;
    }
    async redeem(epoch) {
        const withdrawalEscrowV2 = typechain_1.WithdrawalEscrowV2__factory.connect(constants_1.EscrowAddress, this.signer);
        const receiver = await this.signer.getAddress();
        const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
        return tx;
    }
    async redeemSymbiotic(epoch) {
        const withdrawalEscrowV2 = typechain_1.WithdrawalEscrowV2__factory.connect(constants_1.SymbioticEscrow, this.signer);
        const receiver = await this.signer.getAddress();
        const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
        return tx;
    }
    async isApproved(contractAddress, spenderAddress, amount) {
        const erc20Contract = new ethers_1.ethers.Contract(contractAddress, erc20_json_1.default, this.signer);
        const units = _addDecimals(amount.toString(), await erc20Contract.decimals());
        const allowance = await erc20Contract.allowance(await this.signer.getAddress(), spenderAddress);
        return ethers_1.ethers.BigNumber.from(allowance).gte(units);
    }
    async approve(contractAddress, spenderAddress, amount) {
        const erc20Contract = new ethers_1.ethers.Contract(contractAddress, erc20_json_1.default, this.signer);
        const units = _addDecimals(amount.toString(), await erc20Contract.decimals());
        const tx = await erc20Contract.approve(spenderAddress, units);
        return tx;
    }
    async wrapETH(amountInEther) {
        const wethContract = new ethers_1.ethers.Contract(constants_1.WEthAddress, ["function deposit() payable"], this.signer);
        const tx = await wethContract.deposit({
            value: ethers_1.ethers.utils.parseEther(amountInEther),
        });
        await tx.wait();
        console.log(`Wrapped ${amountInEther} ETH to WETH`);
    }
    async getCCIPFee(destinationChainId) {
        return await (0, pass_1.ccipFee)(destinationChainId, this.provider);
    }
    async bridgeAffinePass(destinationChainId, destinationAddress, tokenId, fee) {
        return await (0, pass_1.bridgePass)(destinationChainId, destinationAddress, tokenId, fee, this.provider);
    }
    async getPassBalance() {
        try {
            return await (0, pass_1.getPassBalance)(await this.provider.getSigner().getChainId(), await this.provider.getSigner().getAddress());
        }
        catch (e) {
            throw "ERROR GETTING PASS BALANCE";
        }
    }
    _toDeadline(expiration) {
        return Math.floor((Date.now() + expiration) / 1000);
    }
    async _getRandomNonce() {
        const nonceProvider = typechain_1.ISignatureTransfer__factory.connect(permit2_sdk_1.PERMIT2_ADDRESS, this.signer);
        const byteSize = 32; // 256 bits
        for (let i = 0; i < 10; i++) {
            const randomBytes = ethers_1.ethers.utils.randomBytes(byteSize);
            const nonce = ethers_1.ethers.BigNumber.from(randomBytes);
            const bitPos = randomBytes[byteSize - 1];
            const word = ethers_1.ethers.BigNumber.from(randomBytes.slice(0, byteSize - 1));
            const bitMap = await nonceProvider.nonceBitmap(await nonceProvider.signer.getAddress(), word);
            if (bitMap.and(ethers_1.ethers.BigNumber.from(2).pow(bitPos)).eq(0)) {
                return nonce;
            }
        }
        throw Error("Failed to generate a random nonce");
    }
}
exports.AffineRestakingSDK = AffineRestakingSDK;
function _removeDecimals(amount, decimals) {
    const parsed = ethers_1.ethers.utils.formatUnits(amount, decimals);
    const decimalIndex = parsed.indexOf(".");
    if (decimalIndex === -1) {
        return parsed;
    }
    return parsed.slice(0, decimalIndex + 7);
}
exports._removeDecimals = _removeDecimals;
function _addDecimals(amount, decimals) {
    return ethers_1.ethers.utils.parseUnits(amount, decimals);
}
exports._addDecimals = _addDecimals;
async function _getVaultTVL(vaultAddress, provider) {
    const vault = typechain_1.UltraLRT__factory.connect(vaultAddress, provider);
    const asset = typechain_1.MockERC20__factory.connect(await vault.asset(), provider);
    const totalAssets = await vault.totalAssets();
    return _removeDecimals(totalAssets, await asset.decimals());
}
async function _getVaultRate(vaultAddress, provider) {
    const vault = typechain_1.UltraLRT__factory.connect(vaultAddress, provider);
    const asset = typechain_1.MockERC20__factory.connect(await vault.asset(), provider);
    const totalAssets = await vault.getRate();
    return _removeDecimals(totalAssets, await asset.decimals());
}
async function getUltraEthTVL() {
    console.log("ETH RPC", constants_1.EthRPC);
    return _getVaultTVL(constants_1.UltraLRTAddress, new ethers_1.providers.JsonRpcProvider(constants_1.EthRPC));
}
exports.getUltraEthTVL = getUltraEthTVL;
async function getSymbioticTVL() {
    return _getVaultTVL(constants_1.SymbioticVault, new ethers_1.providers.JsonRpcProvider(constants_1.EthRPC));
}
exports.getSymbioticTVL = getSymbioticTVL;
async function getSymbioticRate() {
    return _getVaultRate(constants_1.SymbioticVault, new ethers_1.providers.JsonRpcProvider(constants_1.EthRPC));
}
exports.getSymbioticRate = getSymbioticRate;
async function getUltraEthRate() {
    return _getVaultRate(constants_1.UltraLRTAddress, new ethers_1.providers.JsonRpcProvider(constants_1.EthRPC));
}
exports.getUltraEthRate = getUltraEthRate;
async function convertStEthToWStEth(amount) {
    const provider = new ethers_1.providers.JsonRpcProvider(constants_1.EthRPC);
    const wStEth = typechain_1.IWSTETH__factory.connect(constants_1.WStEthAddress, provider);
    const stEth = typechain_1.MockERC20__factory.connect(constants_1.StETHAddress, provider);
    const stEthDecimals = await stEth.decimals();
    const wStEthDecimals = await wStEth.decimals();
    const decimalAmount = _addDecimals(amount, stEthDecimals);
    return _removeDecimals(decimalAmount, wStEthDecimals);
}
exports.convertStEthToWStEth = convertStEthToWStEth;
async function convertWStEthToStEth(amount) {
    const provider = new ethers_1.providers.JsonRpcProvider(constants_1.EthRPC);
    const wStEth = typechain_1.IWSTETH__factory.connect(constants_1.WStEthAddress, provider);
    const stEth = typechain_1.MockERC20__factory.connect(constants_1.StETHAddress, provider);
    const stEthDecimals = await stEth.decimals();
    const wStEthDecimals = await wStEth.decimals();
    const decimalAmount = _addDecimals(amount, wStEthDecimals);
    const stEthAmount = await wStEth.getStETHByWstETH(decimalAmount);
    return _removeDecimals(stEthAmount, stEthDecimals);
}
exports.convertWStEthToStEth = convertWStEthToStEth;
