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
const Permit2_sdk_1 = require("@uniswap/Permit2-sdk");
const constants_1 = require("./constants");
// ABIs
const erc20_json_1 = __importDefault(require("./abis/erc20.json"));
const eigenlayerStrategy_json_1 = __importDefault(require("./abis/eigenlayerStrategy.json"));
const ultraEth_json_1 = __importDefault(require("./abis/ultraEth.json"));
const withdrawalEscrow_json_1 = __importDefault(require("./abis/withdrawalEscrow.json"));
const delegationManager_json_1 = __importDefault(require("./abis/delegationManager.json"));
const typechain_1 = require("./typechain");
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
    getSymbioticBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.signer.getAddress();
            const erc20Contract = new ethers_1.ethers.Contract(constants_1.SymbioticVault, erc20_json_1.default, this.signer);
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
    getWStEthBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.signer.getAddress();
            const erc20Contract = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
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
                [[constants_1.EigenStETHStrategy], [ethers_1.ethers.BigNumber.from(shares)], address],
            ];
            const tx = yield eigenDelegator.queueWithdrawals(queuedWithdrawalParams, {
                value: ethers_1.ethers.utils.parseEther("0"),
            });
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
            const tx = yield eigenDelegator.completeQueuedWithdrawal(withdrawalInfos, assetsArray, uint256Array, boolArray);
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
    canWithdrawSymbiotic(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
            const value = yield lrtVault.canWithdraw(this._addDecimals(amount.toString(), yield asset.decimals()));
            return value;
        });
    }
    deposit(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
            const assetUnits = this._addDecimals(amount, yield asset.decimals());
            const tx = yield lrtVault.deposit(assetUnits, yield this.signer.getAddress());
            return tx;
        });
    }
    withdraw(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.StETHAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.UltraLRTAddress, ultraEth_json_1.default, this.signer);
            const receiver = yield this.signer.getAddress();
            const assetUnits = this._addDecimals(amount, yield asset.decimals());
            const tx = yield lrtVault.withdraw(assetUnits, receiver, receiver);
            return tx;
        });
    }
    depositSymbiotic(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
            const receiver = yield this.signer.getAddress();
            const assetUnits = this._addDecimals(amount, yield asset.decimals());
            const tx = yield lrtVault.deposit(assetUnits, receiver);
            return tx;
        });
    }
    depositERC20Any(token, amount, vault) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = typechain_1.MockERC20__factory.connect(token, this.signer);
            const router = typechain_1.UltraLRTRouter__factory.connect(constants_1.RouterAddress, this.signer);
            const receiver = yield this.signer.getAddress();
            const allowanceProvider = new Permit2_sdk_1.AllowanceProvider(this.provider, Permit2_sdk_1.PERMIT2_ADDRESS);
            const { nonce } = yield allowanceProvider.getAllowanceData(receiver, token, router.address);
            const assetUnits = this._addDecimals(amount, yield asset.decimals());
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
            const { domain, types, values } = Permit2_sdk_1.SignatureTransfer.getPermitData(permit, Permit2_sdk_1.PERMIT2_ADDRESS, yield this.signer.getChainId());
            const signature = yield this.provider
                .getSigner()
                ._signTypedData(domain, types, values);
            let tx;
            if (token == constants_1.StETHAddress) {
                tx = yield router.depositStEth(assetUnits, vault, receiver, nonce, deadline, signature);
            }
            else if (token == constants_1.WStEthAddress) {
                tx = yield router.depositWStEth(assetUnits, vault, receiver, nonce, deadline, signature);
            }
            else if (token == constants_1.WEthAddress) {
                tx = yield router.depositWeth(assetUnits, vault, receiver, nonce, deadline, signature);
            }
            else {
                throw Error("Invalid token");
            }
            return tx;
        });
    }
    depositNative(amount, vault) {
        return __awaiter(this, void 0, void 0, function* () {
            const router = typechain_1.UltraLRTRouter__factory.connect(constants_1.RouterAddress, this.signer);
            const receiver = yield this.signer.getAddress();
            const assetUnits = this._addDecimals(amount, 18);
            const tx = yield router.depositNative(vault, receiver, {
                value: assetUnits,
            });
            return tx;
        });
    }
    withdrawSymbiotic(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const asset = new ethers_1.ethers.Contract(constants_1.WStEthAddress, erc20_json_1.default, this.signer);
            const lrtVault = new ethers_1.ethers.Contract(constants_1.SymbioticVault, ultraEth_json_1.default, this.signer);
            const receiver = yield this.signer.getAddress();
            const assetUnits = this._addDecimals(amount, yield asset.decimals());
            const tx = yield lrtVault.withdraw(assetUnits, receiver, receiver);
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
    getEthBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = yield this.signer.getBalance();
            return ethers_1.ethers.utils.formatEther(balance);
        });
    }
    canWithdrawEscrow(epoch) {
        return __awaiter(this, void 0, void 0, function* () {
            const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
            const value = yield withdrawalEscrowV2.canWithdraw(epoch);
            return value;
        });
    }
    canWithdrawEscrowSymbiotic(epoch) {
        return __awaiter(this, void 0, void 0, function* () {
            const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.SymbioticEscrow, withdrawalEscrow_json_1.default, this.signer);
            const value = yield withdrawalEscrowV2.canWithdraw(epoch);
            return value;
        });
    }
    redeem(epoch) {
        return __awaiter(this, void 0, void 0, function* () {
            const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.EscrowAddress, withdrawalEscrow_json_1.default, this.signer);
            const receiver = yield this.signer.getAddress();
            const tx = yield withdrawalEscrowV2.redeem(receiver, epoch);
            return tx;
        });
    }
    redeemSymbiotic(epoch) {
        return __awaiter(this, void 0, void 0, function* () {
            const withdrawalEscrowV2 = new ethers_1.ethers.Contract(constants_1.SymbioticEscrow, withdrawalEscrow_json_1.default, this.signer);
            const receiver = yield this.signer.getAddress();
            const tx = yield withdrawalEscrowV2.redeem(receiver, epoch);
            return tx;
        });
    }
    isApproved(contractAddress, spenderAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const erc20Contract = new ethers_1.ethers.Contract(contractAddress, erc20_json_1.default, this.signer);
            const units = this._addDecimals(amount.toString(), yield erc20Contract.decimals());
            const allowance = yield erc20Contract.allowance(yield this.signer.getAddress(), spenderAddress);
            return ethers_1.ethers.BigNumber.from(allowance).gte(units);
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
    _toDeadline(expiration) {
        return Math.floor((Date.now() + expiration) / 1000);
    }
}
exports.AffineRestakingSDK = AffineRestakingSDK;
