import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IXERC20 {
    type BridgeParametersStruct = {
        timestamp: BigNumberish;
        ratePerSecond: BigNumberish;
        maxLimit: BigNumberish;
        currentLimit: BigNumberish;
    };
    type BridgeParametersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        ratePerSecond: BigNumber;
        maxLimit: BigNumber;
        currentLimit: BigNumber;
    };
}
export interface XUltraLRTInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "FACTORY()": FunctionFragment;
        "GUARDIAN_ROLE()": FunctionFragment;
        "HARVESTER()": FunctionFragment;
        "MAX_FEE_BPS()": FunctionFragment;
        "STETH()": FunctionFragment;
        "WSTETH()": FunctionFragment;
        "accruedFees()": FunctionFragment;
        "acrossChainIdRecipient(uint256)": FunctionFragment;
        "acrossSpokePool()": FunctionFragment;
        "allowTokenDeposit()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseAsset()": FunctionFragment;
        "bridgeFeeBps()": FunctionFragment;
        "bridgeToken(uint256,uint256,uint256,uint32)": FunctionFragment;
        "bridges(address)": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "burningCurrentLimitOf(address)": FunctionFragment;
        "burningMaxLimitOf(address)": FunctionFragment;
        "buyLRT(uint256)": FunctionFragment;
        "collectFees()": FunctionFragment;
        "crossChainTransferLimit()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseCrossChainTransferLimit(uint256)": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "disableTokenDeposit()": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "handle(uint32,bytes32,bytes)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "increaseCrossChainTransferLimit(uint256)": FunctionFragment;
        "initialize(string,string,address,address)": FunctionFragment;
        "lastPriceUpdateTimeStamp()": FunctionFragment;
        "lockbox()": FunctionFragment;
        "mailbox()": FunctionFragment;
        "managementFeeBps()": FunctionFragment;
        "maxBridgeFeeBps()": FunctionFragment;
        "maxPriceLag()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "mintingCurrentLimitOf(address)": FunctionFragment;
        "mintingMaxLimitOf(address)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "performanceFeeBps()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "priceFeed()": FunctionFragment;
        "publishTokenPrice(uint32)": FunctionFragment;
        "quotePublishTokenPrice(uint32)": FunctionFragment;
        "quoteTransferRemote(uint32,address,uint256)": FunctionFragment;
        "quoteTransferRemote(uint32,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "resetAcrossChainIdRecipient(uint256)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "routerMap(uint32)": FunctionFragment;
        "setAcrossChainIdRecipient(uint256,address,address)": FunctionFragment;
        "setBaseAsset(address)": FunctionFragment;
        "setBridgeFeeBps(uint256)": FunctionFragment;
        "setLimits(address,uint256,uint256)": FunctionFragment;
        "setLockbox(address)": FunctionFragment;
        "setMailbox(address)": FunctionFragment;
        "setManagementFeeBps(uint256)": FunctionFragment;
        "setMaxBridgeFeeBps(uint256)": FunctionFragment;
        "setMaxPriceLag(uint256)": FunctionFragment;
        "setPerformanceFeeBps(uint256)": FunctionFragment;
        "setPriceFeed(address)": FunctionFragment;
        "setRouter(uint32,bytes32)": FunctionFragment;
        "setSpokePool(address)": FunctionFragment;
        "setWithdrawalFeeBps(uint256)": FunctionFragment;
        "sharePrice()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenDepositAllowed()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transferRemote(uint32,uint256)": FunctionFragment;
        "transferRemote(uint32,address,uint256)": FunctionFragment;
        "unpause()": FunctionFragment;
        "withdrawalFeeBps()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "DOMAIN_SEPARATOR" | "FACTORY" | "GUARDIAN_ROLE" | "HARVESTER" | "MAX_FEE_BPS" | "STETH" | "WSTETH" | "accruedFees" | "acrossChainIdRecipient" | "acrossSpokePool" | "allowTokenDeposit" | "allowance" | "approve" | "balanceOf" | "baseAsset" | "bridgeFeeBps" | "bridgeToken" | "bridges" | "burn" | "burningCurrentLimitOf" | "burningMaxLimitOf" | "buyLRT" | "collectFees" | "crossChainTransferLimit" | "decimals" | "decreaseCrossChainTransferLimit" | "deposit" | "disableTokenDeposit" | "eip712Domain" | "getRoleAdmin" | "grantRole" | "handle" | "hasRole" | "increaseCrossChainTransferLimit" | "initialize" | "lastPriceUpdateTimeStamp" | "lockbox" | "mailbox" | "managementFeeBps" | "maxBridgeFeeBps" | "maxPriceLag" | "mint" | "mintingCurrentLimitOf" | "mintingMaxLimitOf" | "name" | "nonces" | "owner" | "pause" | "paused" | "performanceFeeBps" | "permit" | "priceFeed" | "publishTokenPrice" | "quotePublishTokenPrice" | "quoteTransferRemote(uint32,address,uint256)" | "quoteTransferRemote(uint32,uint256)" | "renounceOwnership" | "renounceRole" | "resetAcrossChainIdRecipient" | "revokeRole" | "routerMap" | "setAcrossChainIdRecipient" | "setBaseAsset" | "setBridgeFeeBps" | "setLimits" | "setLockbox" | "setMailbox" | "setManagementFeeBps" | "setMaxBridgeFeeBps" | "setMaxPriceLag" | "setPerformanceFeeBps" | "setPriceFeed" | "setRouter" | "setSpokePool" | "setWithdrawalFeeBps" | "sharePrice" | "supportsInterface" | "symbol" | "tokenDepositAllowed" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "transferRemote(uint32,uint256)" | "transferRemote(uint32,address,uint256)" | "unpause" | "withdrawalFeeBps"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "FACTORY", values?: undefined): string;
    encodeFunctionData(functionFragment: "GUARDIAN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "HARVESTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_FEE_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "STETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WSTETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "accruedFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "acrossChainIdRecipient", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "acrossSpokePool", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowTokenDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "baseAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgeFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgeToken", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bridges", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burningCurrentLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burningMaxLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "buyLRT", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "collectFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "crossChainTransferLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseCrossChainTransferLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "disableTokenDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "increaseCrossChainTransferLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "lastPriceUpdateTimeStamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "mailbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "managementFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxBridgeFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxPriceLag", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintingCurrentLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "mintingMaxLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "performanceFeeBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "publishTokenPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quotePublishTokenPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteTransferRemote(uint32,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteTransferRemote(uint32,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "resetAcrossChainIdRecipient", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "routerMap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setAcrossChainIdRecipient", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "setBaseAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "setBridgeFeeBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLimits", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLockbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setMailbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setManagementFeeBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxBridgeFeeBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxPriceLag", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPerformanceFeeBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPriceFeed", values: [string]): string;
    encodeFunctionData(functionFragment: "setRouter", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setSpokePool", values: [string]): string;
    encodeFunctionData(functionFragment: "setWithdrawalFeeBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sharePrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenDepositAllowed", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferRemote(uint32,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferRemote(uint32,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawalFeeBps", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FACTORY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GUARDIAN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HARVESTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_FEE_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WSTETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accruedFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acrossChainIdRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acrossSpokePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowTokenDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burningCurrentLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burningMaxLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyLRT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crossChainTransferLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseCrossChainTransferLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableTokenDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseCrossChainTransferLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPriceUpdateTimeStamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mailbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "managementFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxBridgeFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxPriceLag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintingCurrentLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintingMaxLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performanceFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quotePublishTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteTransferRemote(uint32,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteTransferRemote(uint32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetAcrossChainIdRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAcrossChainIdRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBridgeFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLockbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMailbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManagementFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxBridgeFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxPriceLag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPerformanceFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSpokePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalFeeBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenDepositAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferRemote(uint32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferRemote(uint32,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalFeeBps", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "BridgeLimitsSet(uint256,uint256,address)": EventFragment;
        "ConversionFailedXLRTtoLRT(address,uint256,uint256)": EventFragment;
        "CrossChainTransferLimitChanged(address,uint256,uint256)": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "Initialized(uint64)": EventFragment;
        "L1LRTMinted(uint256,uint256)": EventFragment;
        "LockboxSet(address)": EventFragment;
        "MessageSent(uint256,bytes32,bytes32,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "TokenBridged(uint256,address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeLimitsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConversionFailedXLRTtoLRT"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CrossChainTransferLimitChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "L1LRTMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LockboxSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenBridged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BridgeLimitsSetEventObject {
    _mintingLimit: BigNumber;
    _burningLimit: BigNumber;
    _bridge: string;
}
export type BridgeLimitsSetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], BridgeLimitsSetEventObject>;
export type BridgeLimitsSetEventFilter = TypedEventFilter<BridgeLimitsSetEvent>;
export interface ConversionFailedXLRTtoLRTEventObject {
    _user: string;
    _assetAmount: BigNumber;
    _requiredAmount: BigNumber;
}
export type ConversionFailedXLRTtoLRTEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ConversionFailedXLRTtoLRTEventObject>;
export type ConversionFailedXLRTtoLRTEventFilter = TypedEventFilter<ConversionFailedXLRTtoLRTEvent>;
export interface CrossChainTransferLimitChangedEventObject {
    _sender: string;
    _oldLimit: BigNumber;
    _newLimit: BigNumber;
}
export type CrossChainTransferLimitChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CrossChainTransferLimitChangedEventObject>;
export type CrossChainTransferLimitChangedEventFilter = TypedEventFilter<CrossChainTransferLimitChangedEvent>;
export interface EIP712DomainChangedEventObject {
}
export type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
export interface InitializedEventObject {
    version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface L1LRTMintedEventObject {
    _assetAmount: BigNumber;
    _lrtAmount: BigNumber;
}
export type L1LRTMintedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], L1LRTMintedEventObject>;
export type L1LRTMintedEventFilter = TypedEventFilter<L1LRTMintedEvent>;
export interface LockboxSetEventObject {
    _lockbox: string;
}
export type LockboxSetEvent = TypedEvent<[string], LockboxSetEventObject>;
export type LockboxSetEventFilter = TypedEventFilter<LockboxSetEvent>;
export interface MessageSentEventObject {
    chainId: BigNumber;
    recipient: string;
    msgId: string;
    message: string;
}
export type MessageSentEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string
], MessageSentEventObject>;
export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface TokenBridgedEventObject {
    chainId: BigNumber;
    recipient: string;
    amount: BigNumber;
    fees: BigNumber;
}
export type TokenBridgedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], TokenBridgedEventObject>;
export type TokenBridgedEventFilter = TypedEventFilter<TokenBridgedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface XUltraLRT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: XUltraLRTInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        FACTORY(overrides?: CallOverrides): Promise<[string]>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        HARVESTER(overrides?: CallOverrides): Promise<[string]>;
        MAX_FEE_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        STETH(overrides?: CallOverrides): Promise<[string]>;
        WSTETH(overrides?: CallOverrides): Promise<[string]>;
        accruedFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        acrossChainIdRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            recipient: string;
            token: string;
        }>;
        acrossSpokePool(overrides?: CallOverrides): Promise<[string]>;
        allowTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseAsset(overrides?: CallOverrides): Promise<[string]>;
        bridgeFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        bridgeToken(destinationChainId: BigNumberish, amount: BigNumberish, fees: BigNumberish, quoteTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<[
            IXERC20.BridgeParametersStructOutput,
            IXERC20.BridgeParametersStructOutput
        ] & {
            minterParams: IXERC20.BridgeParametersStructOutput;
            burnerParams: IXERC20.BridgeParametersStructOutput;
        }>;
        burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        buyLRT(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        collectFees(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        crossChainTransferLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseCrossChainTransferLimit(_limitDec: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disableTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        increaseCrossChainTransferLimit(_limitInc: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initialize(_name: string, _symbol: string, _governance: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        lockbox(overrides?: CallOverrides): Promise<[string]>;
        mailbox(overrides?: CallOverrides): Promise<[string]>;
        managementFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxBridgeFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxPriceLag(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        performanceFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        priceFeed(overrides?: CallOverrides): Promise<[string]>;
        publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            fees: BigNumber;
        }>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            fees: BigNumber;
        }>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            fees: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resetAcrossChainIdRecipient(chainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setAcrossChainIdRecipient(chainId: BigNumberish, recipient: string, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setBaseAsset(_baseAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setBridgeFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLockbox(_lockbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMailbox(_mailbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setManagementFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMaxBridgeFeeBps(_maxBridgeFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPerformanceFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPriceFeed(_priceFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setSpokePool(_sparkPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setWithdrawalFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sharePrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    FACTORY(overrides?: CallOverrides): Promise<string>;
    GUARDIAN_ROLE(overrides?: CallOverrides): Promise<string>;
    HARVESTER(overrides?: CallOverrides): Promise<string>;
    MAX_FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    STETH(overrides?: CallOverrides): Promise<string>;
    WSTETH(overrides?: CallOverrides): Promise<string>;
    accruedFees(overrides?: CallOverrides): Promise<BigNumber>;
    acrossChainIdRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
        recipient: string;
        token: string;
    }>;
    acrossSpokePool(overrides?: CallOverrides): Promise<string>;
    allowTokenDeposit(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    baseAsset(overrides?: CallOverrides): Promise<string>;
    bridgeFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    bridgeToken(destinationChainId: BigNumberish, amount: BigNumberish, fees: BigNumberish, quoteTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    bridges(arg0: string, overrides?: CallOverrides): Promise<[
        IXERC20.BridgeParametersStructOutput,
        IXERC20.BridgeParametersStructOutput
    ] & {
        minterParams: IXERC20.BridgeParametersStructOutput;
        burnerParams: IXERC20.BridgeParametersStructOutput;
    }>;
    burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    buyLRT(_amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    collectFees(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    crossChainTransferLimit(overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseCrossChainTransferLimit(_limitDec: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deposit(_amount: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disableTokenDeposit(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    increaseCrossChainTransferLimit(_limitInc: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initialize(_name: string, _symbol: string, _governance: string, _factory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;
    lockbox(overrides?: CallOverrides): Promise<string>;
    mailbox(overrides?: CallOverrides): Promise<string>;
    managementFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    maxBridgeFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    maxPriceLag(overrides?: CallOverrides): Promise<BigNumber>;
    mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    priceFeed(overrides?: CallOverrides): Promise<string>;
    publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resetAcrossChainIdRecipient(chainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setAcrossChainIdRecipient(chainId: BigNumberish, recipient: string, token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setBaseAsset(_baseAsset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setBridgeFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLockbox(_lockbox: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMailbox(_mailbox: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setManagementFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMaxBridgeFeeBps(_maxBridgeFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPerformanceFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPriceFeed(_priceFeed: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setSpokePool(_sparkPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setWithdrawalFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sharePrice(overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawalFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        FACTORY(overrides?: CallOverrides): Promise<string>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<string>;
        HARVESTER(overrides?: CallOverrides): Promise<string>;
        MAX_FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STETH(overrides?: CallOverrides): Promise<string>;
        WSTETH(overrides?: CallOverrides): Promise<string>;
        accruedFees(overrides?: CallOverrides): Promise<BigNumber>;
        acrossChainIdRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string] & {
            recipient: string;
            token: string;
        }>;
        acrossSpokePool(overrides?: CallOverrides): Promise<string>;
        allowTokenDeposit(overrides?: CallOverrides): Promise<void>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<string>;
        bridgeFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        bridgeToken(destinationChainId: BigNumberish, amount: BigNumberish, fees: BigNumberish, quoteTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<[
            IXERC20.BridgeParametersStructOutput,
            IXERC20.BridgeParametersStructOutput
        ] & {
            minterParams: IXERC20.BridgeParametersStructOutput;
            burnerParams: IXERC20.BridgeParametersStructOutput;
        }>;
        burn(_user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        buyLRT(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        collectFees(overrides?: CallOverrides): Promise<void>;
        crossChainTransferLimit(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseCrossChainTransferLimit(_limitDec: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<void>;
        disableTokenDeposit(overrides?: CallOverrides): Promise<void>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        increaseCrossChainTransferLimit(_limitInc: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_name: string, _symbol: string, _governance: string, _factory: string, overrides?: CallOverrides): Promise<void>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;
        lockbox(overrides?: CallOverrides): Promise<string>;
        mailbox(overrides?: CallOverrides): Promise<string>;
        managementFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        maxBridgeFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        maxPriceLag(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        priceFeed(overrides?: CallOverrides): Promise<string>;
        publishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<void>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: CallOverrides): Promise<void>;
        resetAcrossChainIdRecipient(chainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setAcrossChainIdRecipient(chainId: BigNumberish, recipient: string, token: string, overrides?: CallOverrides): Promise<void>;
        setBaseAsset(_baseAsset: string, overrides?: CallOverrides): Promise<void>;
        setBridgeFeeBps(_feeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLockbox(_lockbox: string, overrides?: CallOverrides): Promise<void>;
        setMailbox(_mailbox: string, overrides?: CallOverrides): Promise<void>;
        setManagementFeeBps(_feeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxBridgeFeeBps(_maxBridgeFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPerformanceFeeBps(_feeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPriceFeed(_priceFeed: string, overrides?: CallOverrides): Promise<void>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        setSpokePool(_sparkPool: string, overrides?: CallOverrides): Promise<void>;
        setWithdrawalFeeBps(_feeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sharePrice(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "BridgeLimitsSet(uint256,uint256,address)"(_mintingLimit?: null, _burningLimit?: null, _bridge?: string | null): BridgeLimitsSetEventFilter;
        BridgeLimitsSet(_mintingLimit?: null, _burningLimit?: null, _bridge?: string | null): BridgeLimitsSetEventFilter;
        "ConversionFailedXLRTtoLRT(address,uint256,uint256)"(_user?: string | null, _assetAmount?: null, _requiredAmount?: null): ConversionFailedXLRTtoLRTEventFilter;
        ConversionFailedXLRTtoLRT(_user?: string | null, _assetAmount?: null, _requiredAmount?: null): ConversionFailedXLRTtoLRTEventFilter;
        "CrossChainTransferLimitChanged(address,uint256,uint256)"(_sender?: string | null, _oldLimit?: null, _newLimit?: null): CrossChainTransferLimitChangedEventFilter;
        CrossChainTransferLimitChanged(_sender?: string | null, _oldLimit?: null, _newLimit?: null): CrossChainTransferLimitChangedEventFilter;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "Initialized(uint64)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "L1LRTMinted(uint256,uint256)"(_assetAmount?: null, _lrtAmount?: null): L1LRTMintedEventFilter;
        L1LRTMinted(_assetAmount?: null, _lrtAmount?: null): L1LRTMintedEventFilter;
        "LockboxSet(address)"(_lockbox?: null): LockboxSetEventFilter;
        LockboxSet(_lockbox?: null): LockboxSetEventFilter;
        "MessageSent(uint256,bytes32,bytes32,bytes)"(chainId?: BigNumberish | null, recipient?: BytesLike | null, msgId?: null, message?: null): MessageSentEventFilter;
        MessageSent(chainId?: BigNumberish | null, recipient?: BytesLike | null, msgId?: null, message?: null): MessageSentEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "TokenBridged(uint256,address,uint256,uint256)"(chainId?: BigNumberish | null, recipient?: null, amount?: null, fees?: null): TokenBridgedEventFilter;
        TokenBridged(chainId?: BigNumberish | null, recipient?: null, amount?: null, fees?: null): TokenBridgedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        FACTORY(overrides?: CallOverrides): Promise<BigNumber>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        HARVESTER(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_FEE_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STETH(overrides?: CallOverrides): Promise<BigNumber>;
        WSTETH(overrides?: CallOverrides): Promise<BigNumber>;
        accruedFees(overrides?: CallOverrides): Promise<BigNumber>;
        acrossChainIdRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        acrossSpokePool(overrides?: CallOverrides): Promise<BigNumber>;
        allowTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<BigNumber>;
        bridgeFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        bridgeToken(destinationChainId: BigNumberish, amount: BigNumberish, fees: BigNumberish, quoteTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        buyLRT(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        collectFees(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        crossChainTransferLimit(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseCrossChainTransferLimit(_limitDec: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disableTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseCrossChainTransferLimit(_limitInc: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initialize(_name: string, _symbol: string, _governance: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;
        lockbox(overrides?: CallOverrides): Promise<BigNumber>;
        mailbox(overrides?: CallOverrides): Promise<BigNumber>;
        managementFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        maxBridgeFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        maxPriceLag(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        performanceFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        priceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resetAcrossChainIdRecipient(chainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setAcrossChainIdRecipient(chainId: BigNumberish, recipient: string, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setBaseAsset(_baseAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setBridgeFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLockbox(_lockbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMailbox(_mailbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setManagementFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMaxBridgeFeeBps(_maxBridgeFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPerformanceFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPriceFeed(_priceFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setSpokePool(_sparkPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setWithdrawalFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sharePrice(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GUARDIAN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HARVESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_FEE_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WSTETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accruedFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acrossChainIdRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acrossSpokePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgeFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgeToken(destinationChainId: BigNumberish, amount: BigNumberish, fees: BigNumberish, quoteTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyLRT(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        collectFees(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        crossChainTransferLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseCrossChainTransferLimit(_limitDec: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disableTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseCrossChainTransferLimit(_limitInc: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initialize(_name: string, _symbol: string, _governance: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mailbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        managementFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxBridgeFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxPriceLag(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        performanceFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resetAcrossChainIdRecipient(chainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAcrossChainIdRecipient(chainId: BigNumberish, recipient: string, token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setBaseAsset(_baseAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setBridgeFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLockbox(_lockbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMailbox(_mailbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setManagementFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMaxBridgeFeeBps(_maxBridgeFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPerformanceFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPriceFeed(_priceFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setSpokePool(_sparkPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setWithdrawalFeeBps(_feeBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sharePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawalFeeBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
