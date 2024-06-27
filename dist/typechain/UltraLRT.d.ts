import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UltraLRTInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "GUARDIAN_ROLE()": FunctionFragment;
        "HARVESTER()": FunctionFragment;
        "LOCK_INTERVAL()": FunctionFragment;
        "MAX_BPS()": FunctionFragment;
        "MAX_DELEGATOR()": FunctionFragment;
        "STETH()": FunctionFragment;
        "ST_ETH_TRANSFER_BUFFER()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "beacon()": FunctionFragment;
        "canWithdraw(uint256)": FunctionFragment;
        "collectDelegatorDebt()": FunctionFragment;
        "convertToAssets(uint256)": FunctionFragment;
        "convertToShares(uint256)": FunctionFragment;
        "createDelegator(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "delegateToDelegator(address,uint256)": FunctionFragment;
        "delegatorAssets()": FunctionFragment;
        "delegatorCount()": FunctionFragment;
        "delegatorFactory()": FunctionFragment;
        "delegatorMap(address)": FunctionFragment;
        "delegatorQueue(uint256)": FunctionFragment;
        "delegatorWithdrawRequest(address,uint256)": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "depositPaused()": FunctionFragment;
        "dropDelegator(address)": FunctionFragment;
        "endEpoch()": FunctionFragment;
        "escrow()": FunctionFragment;
        "getRate()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "governance()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "harvest()": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialSharesPerAsset()": FunctionFragment;
        "initialize(address,address,address,string,string)": FunctionFragment;
        "lastHarvest()": FunctionFragment;
        "liquidationRequest(uint256)": FunctionFragment;
        "lockedProfit()": FunctionFragment;
        "managementFee()": FunctionFragment;
        "maxDeposit(address)": FunctionFragment;
        "maxLockedProfit()": FunctionFragment;
        "maxMint(address)": FunctionFragment;
        "maxRedeem(address)": FunctionFragment;
        "maxWithdraw(address)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "pause()": FunctionFragment;
        "pauseDeposit()": FunctionFragment;
        "paused()": FunctionFragment;
        "previewDeposit(uint256)": FunctionFragment;
        "previewMint(uint256)": FunctionFragment;
        "previewRedeem(uint256)": FunctionFragment;
        "previewWithdraw(uint256)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "resolveDebt()": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setDelegatorFactory(address)": FunctionFragment;
        "setManagementFee(uint256)": FunctionFragment;
        "setWithdrawalEscrow(address)": FunctionFragment;
        "setWithdrawalFee(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalAssets()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unpause()": FunctionFragment;
        "unpauseDeposit()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "vaultAssets()": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
        "withdrawalFee()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "GUARDIAN_ROLE" | "HARVESTER" | "LOCK_INTERVAL" | "MAX_BPS" | "MAX_DELEGATOR" | "STETH" | "ST_ETH_TRANSFER_BUFFER" | "allowance" | "approve" | "asset" | "balanceOf" | "beacon" | "canWithdraw" | "collectDelegatorDebt" | "convertToAssets" | "convertToShares" | "createDelegator" | "decimals" | "decreaseAllowance" | "delegateToDelegator" | "delegatorAssets" | "delegatorCount" | "delegatorFactory" | "delegatorMap" | "delegatorQueue" | "delegatorWithdrawRequest" | "deposit" | "depositPaused" | "dropDelegator" | "endEpoch" | "escrow" | "getRate" | "getRoleAdmin" | "governance" | "grantRole" | "harvest" | "hasRole" | "increaseAllowance" | "initialSharesPerAsset" | "initialize" | "lastHarvest" | "liquidationRequest" | "lockedProfit" | "managementFee" | "maxDeposit" | "maxLockedProfit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "pause" | "pauseDeposit" | "paused" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "proxiableUUID" | "redeem" | "renounceRole" | "resolveDebt" | "revokeRole" | "setDelegatorFactory" | "setManagementFee" | "setWithdrawalEscrow" | "setWithdrawalFee" | "supportsInterface" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "unpause" | "unpauseDeposit" | "upgradeTo" | "upgradeToAndCall" | "vaultAssets" | "withdraw" | "withdrawalFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "GUARDIAN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "HARVESTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOCK_INTERVAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_DELEGATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "STETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "ST_ETH_TRANSFER_BUFFER", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "beacon", values?: undefined): string;
    encodeFunctionData(functionFragment: "canWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "collectDelegatorDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDelegator", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegateToDelegator", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegatorAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegatorCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegatorFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegatorMap", values: [string]): string;
    encodeFunctionData(functionFragment: "delegatorQueue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegatorWithdrawRequest", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "depositPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "dropDelegator", values: [string]): string;
    encodeFunctionData(functionFragment: "endEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "escrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "harvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialSharesPerAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "lastHarvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidationRequest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "managementFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [string]): string;
    encodeFunctionData(functionFragment: "maxLockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxMint", values: [string]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [string]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [string]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "resolveDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setDelegatorFactory", values: [string]): string;
    encodeFunctionData(functionFragment: "setManagementFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWithdrawalEscrow", values: [string]): string;
    encodeFunctionData(functionFragment: "setWithdrawalFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpauseDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "vaultAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "withdrawalFee", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GUARDIAN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HARVESTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOCK_INTERVAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_DELEGATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ST_ETH_TRANSFER_BUFFER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beacon", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectDelegatorDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateToDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatorAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatorCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatorFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatorMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatorQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatorWithdrawRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dropDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "endEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "escrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialSharesPerAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastHarvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "managementFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelegatorFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManagementFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalEscrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalFee", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export declare type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export declare type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface DepositEventObject {
    caller: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export declare type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export declare type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface InitializedEventObject {
    version: number;
}
export declare type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface WithdrawEventObject {
    caller: string;
    receiver: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export declare type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface UltraLRT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UltraLRTInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        HARVESTER(overrides?: CallOverrides): Promise<[string]>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_DELEGATOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        STETH(overrides?: CallOverrides): Promise<[string]>;
        ST_ETH_TRANSFER_BUFFER(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        beacon(overrides?: CallOverrides): Promise<[string]>;
        canWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        collectDelegatorDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            shares: BigNumber;
        }>;
        createDelegator(_operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegateToDelegator(_delegator: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegatorAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        delegatorCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        delegatorFactory(overrides?: CallOverrides): Promise<[string]>;
        delegatorMap(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            isActive: boolean;
            balance: BigNumber;
        }>;
        delegatorQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        delegatorWithdrawRequest(delegator: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositPaused(overrides?: CallOverrides): Promise<[BigNumber]>;
        dropDelegator(_delegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        endEpoch(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        escrow(overrides?: CallOverrides): Promise<[string]>;
        getRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        harvest(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_governance: string, _asset: string, _delegatorBeacon: string, _name: string, _symbol: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidationRequest(assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        managementFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pauseDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resolveDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setDelegatorFactory(_factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setManagementFee(feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setWithdrawalEscrow(_escrow: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setWithdrawalFee(feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unpauseDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vaultAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawalFee(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    GUARDIAN_ROLE(overrides?: CallOverrides): Promise<string>;
    HARVESTER(overrides?: CallOverrides): Promise<string>;
    LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_DELEGATOR(overrides?: CallOverrides): Promise<BigNumber>;
    STETH(overrides?: CallOverrides): Promise<string>;
    ST_ETH_TRANSFER_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    beacon(overrides?: CallOverrides): Promise<string>;
    canWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    collectDelegatorDebt(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    createDelegator(_operator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegateToDelegator(_delegator: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegatorAssets(overrides?: CallOverrides): Promise<BigNumber>;
    delegatorCount(overrides?: CallOverrides): Promise<BigNumber>;
    delegatorFactory(overrides?: CallOverrides): Promise<string>;
    delegatorMap(arg0: string, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
        isActive: boolean;
        balance: BigNumber;
    }>;
    delegatorQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    delegatorWithdrawRequest(delegator: string, assets: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositPaused(overrides?: CallOverrides): Promise<BigNumber>;
    dropDelegator(_delegator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    endEpoch(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    escrow(overrides?: CallOverrides): Promise<string>;
    getRate(overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    governance(overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    harvest(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initialSharesPerAsset(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_governance: string, _asset: string, _delegatorBeacon: string, _name: string, _symbol: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
    liquidationRequest(assets: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    managementFee(overrides?: CallOverrides): Promise<BigNumber>;
    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pauseDeposit(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resolveDebt(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setDelegatorFactory(_factory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setManagementFee(feeBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setWithdrawalEscrow(_escrow: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setWithdrawalFee(feeBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unpauseDeposit(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vaultAssets(overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<string>;
        HARVESTER(overrides?: CallOverrides): Promise<string>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_DELEGATOR(overrides?: CallOverrides): Promise<BigNumber>;
        STETH(overrides?: CallOverrides): Promise<string>;
        ST_ETH_TRANSFER_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        beacon(overrides?: CallOverrides): Promise<string>;
        canWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        collectDelegatorDebt(overrides?: CallOverrides): Promise<void>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        createDelegator(_operator: string, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        delegateToDelegator(_delegator: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        delegatorAssets(overrides?: CallOverrides): Promise<BigNumber>;
        delegatorCount(overrides?: CallOverrides): Promise<BigNumber>;
        delegatorFactory(overrides?: CallOverrides): Promise<string>;
        delegatorMap(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            isActive: boolean;
            balance: BigNumber;
        }>;
        delegatorQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        delegatorWithdrawRequest(delegator: string, assets: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deposit(assets: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        depositPaused(overrides?: CallOverrides): Promise<BigNumber>;
        dropDelegator(_delegator: string, overrides?: CallOverrides): Promise<void>;
        endEpoch(overrides?: CallOverrides): Promise<void>;
        escrow(overrides?: CallOverrides): Promise<string>;
        getRate(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        governance(overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        harvest(overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_governance: string, _asset: string, _delegatorBeacon: string, _name: string, _symbol: string, overrides?: CallOverrides): Promise<void>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        liquidationRequest(assets: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        managementFee(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        pauseDeposit(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        resolveDebt(overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setDelegatorFactory(_factory: string, overrides?: CallOverrides): Promise<void>;
        setManagementFee(feeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setWithdrawalEscrow(_escrow: string, overrides?: CallOverrides): Promise<void>;
        setWithdrawalFee(feeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        unpause(overrides?: CallOverrides): Promise<void>;
        unpauseDeposit(overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        vaultAssets(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Deposit(address,address,uint256,uint256)"(caller?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(caller?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(caller?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(caller?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        HARVESTER(overrides?: CallOverrides): Promise<BigNumber>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_DELEGATOR(overrides?: CallOverrides): Promise<BigNumber>;
        STETH(overrides?: CallOverrides): Promise<BigNumber>;
        ST_ETH_TRANSFER_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        beacon(overrides?: CallOverrides): Promise<BigNumber>;
        canWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collectDelegatorDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        createDelegator(_operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegateToDelegator(_delegator: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegatorAssets(overrides?: CallOverrides): Promise<BigNumber>;
        delegatorCount(overrides?: CallOverrides): Promise<BigNumber>;
        delegatorFactory(overrides?: CallOverrides): Promise<BigNumber>;
        delegatorMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        delegatorQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        delegatorWithdrawRequest(delegator: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositPaused(overrides?: CallOverrides): Promise<BigNumber>;
        dropDelegator(_delegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        endEpoch(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        escrow(overrides?: CallOverrides): Promise<BigNumber>;
        getRate(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        harvest(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_governance: string, _asset: string, _delegatorBeacon: string, _name: string, _symbol: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        liquidationRequest(assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        managementFee(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pauseDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resolveDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setDelegatorFactory(_factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setManagementFee(feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setWithdrawalEscrow(_escrow: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setWithdrawalFee(feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unpauseDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        vaultAssets(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HARVESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_DELEGATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ST_ETH_TRANSFER_BUFFER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collectDelegatorDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createDelegator(_operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegateToDelegator(_delegator: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegatorAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatorCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatorFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatorMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatorQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatorWithdrawRequest(delegator: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dropDelegator(_delegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        endEpoch(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        harvest(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initialSharesPerAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_governance: string, _asset: string, _delegatorBeacon: string, _name: string, _symbol: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationRequest(assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        managementFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pauseDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resolveDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setDelegatorFactory(_factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setManagementFee(feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setWithdrawalEscrow(_escrow: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setWithdrawalFee(feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unpauseDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vaultAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
