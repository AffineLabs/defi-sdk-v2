"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffineRestakingSDK = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
// ABIs
const erc20_json_1 = __importDefault(require("./abis/erc20.json"));
const eigenlayerStrategy_json_1 = __importDefault(require("./abis/eigenlayerStrategy.json"));
const ultraEth_json_1 = __importDefault(require("./abis/ultraEth.json"));
const withdrawalEscrow_json_1 = __importDefault(require("./abis/withdrawalEscrow.json"));
const delegationManager_json_1 = __importDefault(require("./abis/delegationManager.json"));
class AffineRestakingSDK {
    constructor(provider, signer) {
        this.provider = provider;
        this.signer = signer || this.provider.getSigner();
    }
    getUltraEthBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.signer.getAddress();
            const erc20Contract = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, erc20_json_1.default, this.signer);
            const balance = yield erc20Contract.balanceOf(address);
            return this._removeDecimals(balance, 26);
        });
    }
    getStEthBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.signer.getAddress();
            const erc20Contract = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const balance = yield erc20Contract.balanceOf(address);
            return this._removeDecimals(balance, 18);
        });
    }
    migratableAssets(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const eigenStETH = new ethers_1.ethers.Contract(constants_1.EigenStETHStrategy, eigenlayerStrategy_json_1.default, this.signer);
            const value = yield eigenStETH.userUnderlyingView(address);
            return parseFloat(this._removeDecimals(value, 18));
        });
    }
    queueMigrationWithdrawal(address, assets) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("queueMigrationWithdrawal");
            const eigenStETH = new ethers_1.ethers.Contract(constants_1.EigenStETHStrategy, eigenlayerStrategy_json_1.default, this.signer);
            const eigenDelegator = new ethers_1.ethers.Contract(constants_1.EigenDelegatorAddress, delegationManager_json_1.default, this.signer);
            const assetUnits = ethers_1.ethers.utils.parseUnits(assets, 18);
            const shares = yield eigenStETH.underlyingToShares(assetUnits);
            console.log("shares", shares.toString());
            const queuedWithdrawalParams = [
                [[[constants_1.EigenStETHStrategy], [ethers_1.ethers.BigNumber.from(shares)], address]],
            ];
            const tx = yield eigenDelegator.queueWithdrawals(queuedWithdrawalParams);
            return tx;
        });
    }
    completeMigrationWithdrawal(address, delegator, nonce, blockNumber, shares) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const tx = yield eigenDelegator.completeWithdrawals(withdrawalInfos, assetsArray, uint256Array, boolArray);
            return tx;
        });
    }
    canWithdraw(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
            const value = yield lrtVault.canWithdraw(this._addDecimals(amount.toString(), yield asset.decimals()));
            return value;
        });
    }
    deposit(amount, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
            const assetUnits = this._addDecimals(amount, yield asset.decimals());
            const tx = yield lrtVault.deposit(assetUnits, address);
            return tx;
        });
    }
    withdraw(amount, receiver, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
            const assetUnits = this._addDecimals(amount, yield asset.decimals());
            const tx = yield lrtVault.withdraw(assetUnits, receiver, owner);
            return tx;
        });
    }
    withdrawableAssets(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const vault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
            const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
            const vaultDecimals = yield vault.decimals();
            const assetDecimals = yield asset.decimals();
            const resolvingEpoch = (yield withdrawalEscrowV2.resolvingEpoch()).toNumber();
            const currentEpoch = (yield withdrawalEscrowV2.currentEpoch()).toNumber();
            let totalAmount = 0;
            const epochData = [];
            for (let i = 0; i <= currentEpoch; i++) {
                const shares = yield withdrawalEscrowV2.userDebtShare(ethers_1.ethers.BigNumber.from(i), address);
                const assets = yield withdrawalEscrowV2.withdrawableAssets(address, i);
                epochData.push({
                    epoch: i,
                    assets: this._removeDecimals(assets, assetDecimals),
                    shares: this._removeDecimals(shares, vaultDecimals),
                    canWithdraw: i < resolvingEpoch && shares.gt(0),
                });
                totalAmount += parseFloat(this._removeDecimals(assets, assetDecimals));
            }
            return { totalAmount, epochData };
        });
    }
    canWithdrawEscrow(epoch) {
        return __awaiter(this, void 0, void 0, function* () {
            const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
            const value = yield withdrawalEscrowV2.canWithdraw(epoch);
            return value;
        });
    }
    redeem(address, epoch) {
        return __awaiter(this, void 0, void 0, function* () {
            const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
            const tx = yield withdrawalEscrowV2.redeem(address, epoch);
            return tx;
        });
    }
    approve(contractAddress, spenderAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const erc20Contract = new ethers_1.ethers.Contract(contractAddress, erc20_json_1.default, this.signer);
            const units = this._addDecimals(amount.toString(), yield erc20Contract.decimals());
            const tx = yield erc20Contract.approve(spenderAddress, units);
            return tx;
        });
    }
    _removeDecimals(amount, decimals) {
        return ethers_1.ethers.utils.formatUnits(amount, decimals);
    }
    _addDecimals(amount, decimals) {
        return ethers_1.ethers.utils.parseUnits(amount, decimals);
    }
}
exports.AffineRestakingSDK = AffineRestakingSDK;
