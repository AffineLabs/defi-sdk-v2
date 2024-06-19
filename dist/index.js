"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffineRestakingSDK = void 0;
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
class AffineRestakingSDK {
    provider;
    signer;
    constructor(provider, signer) {
        this.provider = provider;
        this.signer = signer || this.provider.getSigner();
    }
    async getUltraEthBalance() {
        const address = await this.signer.getAddress();
        const erc20Contract = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, erc20_json_1.default, this.signer);
        const balance = await erc20Contract.balanceOf(address);
        return this._removeDecimals(balance, 26);
    }
    async getSymbioticBalance() {
        const address = await this.signer.getAddress();
        const erc20Contract = new ethers_1.ethers.Contract(constants_1.SymbioticVault, erc20_json_1.default, this.signer);
        const balance = await erc20Contract.balanceOf(address);
        return this._removeDecimals(balance, 26);
    }
    async getStEthBalance() {
        const address = await this.signer.getAddress();
        const erc20Contract = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const balance = await erc20Contract.balanceOf(address);
        return this._removeDecimals(balance, 18);
    }
    async getWStEthBalance() {
        const address = await this.signer.getAddress();
        const erc20Contract = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
        const balance = await erc20Contract.balanceOf(address);
        return this._removeDecimals(balance, 18);
    }
    async getWEthBalance() {
        const address = await this.signer.getAddress();
        const erc20Contract = new ethers_1.ethers.Contract(constants_1.WEthAddress, erc20_json_1.default, this.signer);
        const balance = await erc20Contract.balanceOf(address);
        return this._removeDecimals(balance, 18);
    }
    async migratableAssets(address) {
        const eigenStETH = new ethers_1.ethers.Contract(constants_1.EigenStETHStrategy, eigenlayerStrategy_json_1.default, this.signer);
        const value = await eigenStETH.userUnderlyingView(address);
        return parseFloat(this._removeDecimals(value, 18));
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
    async completeMigrationWithdrawal(address, delegator, nonce, blockNumber, shares) {
        const eigenDelegator = new ethers_1.ethers.Contract(constants_1.EigenDelegatorAddress, delegationManager_json_1.default, this.signer);
        const withdrawalInfos = [
            {
                staker: address,
                delegatedTo: delegator,
                withdrawer: address,
                nonce: ethers_1.ethers.BigNumber.from(nonce),
                startBlock: parseInt(blockNumber),
                strategies: [constants_1.EigenStETHStrategy],
                shares: [ethers_1.ethers.BigNumber.from(shares)],
            },
        ];
        // Define the additional parameters
        const assetsArray = [[constants_1.StETHAddress]];
        const uint256Array = [ethers_1.ethers.BigNumber.from("0")];
        const boolArray = [true];
        const tx = await eigenDelegator.completeQueuedWithdrawal(withdrawalInfos, assetsArray, uint256Array, boolArray);
        return tx;
    }
    async canWithdraw(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
        const value = await lrtVault.canWithdraw(this._addDecimals(amount.toString(), await asset.decimals()));
        return value;
    }
    async canWithdrawSymbiotic(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
        const value = await lrtVault.canWithdraw(this._addDecimals(amount.toString(), await asset.decimals()));
        return value;
    }
    async deposit(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
        const assetUnits = this._addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.deposit(assetUnits, await this.signer.getAddress());
        return tx;
    }
    async withdraw(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const assetUnits = this._addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
        return tx;
    }
    async depositSymbiotic(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const assetUnits = this._addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.deposit(assetUnits, receiver);
        return tx;
    }
    async isPermit2Approve(token, amount) {
        const asset = typechain_1.MockERC20__factory.connect(token, this.signer);
        const receiver = await this.signer.getAddress();
        const allowance = await asset.allowance(receiver, permit2_sdk_1.PERMIT2_ADDRESS);
        const assetUnits = this._addDecimals(amount, await asset.decimals());
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
        const assetUnits = this._addDecimals(amount, await asset.decimals());
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
        const assetUnits = this._addDecimals(amount, 18);
        const tx = await router.depositNative(vault, receiver, {
            value: assetUnits,
        });
        return tx;
    }
    async withdrawSymbiotic(amount) {
        const asset = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
        const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const assetUnits = this._addDecimals(amount, await asset.decimals());
        const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
        return tx;
    }
    async withdrawableAssets(address) {
        const vault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
        const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
        const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
        const vaultDecimals = await vault.decimals();
        const assetDecimals = await asset.decimals();
        const resolvingEpoch = (await withdrawalEscrowV2.resolvingEpoch()).toNumber();
        const currentEpoch = (await withdrawalEscrowV2.currentEpoch()).toNumber();
        let totalAmount = 0;
        const epochData = [];
        for (let i = 0; i <= currentEpoch; i++) {
            const shares = await withdrawalEscrowV2.userDebtShare(ethers_1.ethers.BigNumber.from(i), address);
            const assets = await withdrawalEscrowV2.withdrawableAssets(address, i);
            epochData.push({
                epoch: i,
                assets: this._removeDecimals(assets, assetDecimals),
                shares: this._removeDecimals(shares, vaultDecimals),
                canWithdraw: i < resolvingEpoch && shares.gt(0),
            });
            totalAmount += parseFloat(this._removeDecimals(assets, assetDecimals));
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
        const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
        return tx;
    }
    async redeemSymbiotic(epoch) {
        const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.SymbioticEscrow, withdrawalEscrow_json_1.default, this.signer);
        const receiver = await this.signer.getAddress();
        const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
        return tx;
    }
    async isApproved(contractAddress, spenderAddress, amount) {
        const erc20Contract = new ethers_1.ethers.Contract(contractAddress, erc20_json_1.default, this.signer);
        const units = this._addDecimals(amount.toString(), await erc20Contract.decimals());
        const allowance = await erc20Contract.allowance(await this.signer.getAddress(), spenderAddress);
        return ethers_1.ethers.BigNumber.from(allowance).gte(units);
    }
    async approve(contractAddress, spenderAddress, amount) {
        const erc20Contract = new ethers_1.ethers.Contract(contractAddress, erc20_json_1.default, this.signer);
        const units = this._addDecimals(amount.toString(), await erc20Contract.decimals());
        const tx = await erc20Contract.approve(spenderAddress, units);
        return tx;
    }
    async wrapETH(amountInEther) {
        const wethContract = new ethers_1.ethers.Contract(constants_1.WEthAddress, [
            "function deposit() payable",
        ], this.signer);
        const tx = await wethContract.deposit({ value: ethers_1.ethers.utils.parseEther(amountInEther) });
        await tx.wait();
        console.log(`Wrapped ${amountInEther} ETH to WETH`);
    }
    _removeDecimals(amount, decimals) {
        return ethers_1.ethers.utils.formatUnits(amount, decimals);
    }
    _addDecimals(amount, decimals) {
        return ethers_1.ethers.utils.parseUnits(amount, decimals);
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
