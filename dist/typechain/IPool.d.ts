import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace DataTypes {
    type EModeCategoryStruct = {
        ltv: BigNumberish;
        liquidationThreshold: BigNumberish;
        liquidationBonus: BigNumberish;
        priceSource: string;
        label: string;
    };
    type EModeCategoryStructOutput = [
        number,
        number,
        number,
        string,
        string
    ] & {
        ltv: number;
        liquidationThreshold: number;
        liquidationBonus: number;
        priceSource: string;
        label: string;
    };
    type ReserveConfigurationMapStruct = {
        data: BigNumberish;
    };
    type ReserveConfigurationMapStructOutput = [BigNumber] & {
        data: BigNumber;
    };
    type ReserveDataStruct = {
        configuration: DataTypes.ReserveConfigurationMapStruct;
        liquidityIndex: BigNumberish;
        currentLiquidityRate: BigNumberish;
        variableBorrowIndex: BigNumberish;
        currentVariableBorrowRate: BigNumberish;
        currentStableBorrowRate: BigNumberish;
        lastUpdateTimestamp: BigNumberish;
        id: BigNumberish;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        accruedToTreasury: BigNumberish;
        unbacked: BigNumberish;
        isolationModeTotalDebt: BigNumberish;
    };
    type ReserveDataStructOutput = [
        DataTypes.ReserveConfigurationMapStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        configuration: DataTypes.ReserveConfigurationMapStructOutput;
        liquidityIndex: BigNumber;
        currentLiquidityRate: BigNumber;
        variableBorrowIndex: BigNumber;
        currentVariableBorrowRate: BigNumber;
        currentStableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        id: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        accruedToTreasury: BigNumber;
        unbacked: BigNumber;
        isolationModeTotalDebt: BigNumber;
    };
    type UserConfigurationMapStruct = {
        data: BigNumberish;
    };
    type UserConfigurationMapStructOutput = [BigNumber] & {
        data: BigNumber;
    };
}
export interface IPoolInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "BRIDGE_PROTOCOL_FEE()": FunctionFragment;
        "FLASHLOAN_PREMIUM_TOTAL()": FunctionFragment;
        "FLASHLOAN_PREMIUM_TO_PROTOCOL()": FunctionFragment;
        "MAX_NUMBER_RESERVES()": FunctionFragment;
        "MAX_STABLE_RATE_BORROW_SIZE_PERCENT()": FunctionFragment;
        "backUnbacked(address,uint256,uint256)": FunctionFragment;
        "borrow(address,uint256,uint256,uint16,address)": FunctionFragment;
        "configureEModeCategory(uint8,(uint16,uint16,uint16,address,string))": FunctionFragment;
        "deposit(address,uint256,address,uint16)": FunctionFragment;
        "dropReserve(address)": FunctionFragment;
        "finalizeTransfer(address,address,address,uint256,uint256,uint256)": FunctionFragment;
        "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)": FunctionFragment;
        "flashLoanSimple(address,address,uint256,bytes,uint16)": FunctionFragment;
        "getConfiguration(address)": FunctionFragment;
        "getEModeCategoryData(uint8)": FunctionFragment;
        "getReserveAddressById(uint16)": FunctionFragment;
        "getReserveData(address)": FunctionFragment;
        "getReserveNormalizedIncome(address)": FunctionFragment;
        "getReserveNormalizedVariableDebt(address)": FunctionFragment;
        "getReservesList()": FunctionFragment;
        "getUserAccountData(address)": FunctionFragment;
        "getUserConfiguration(address)": FunctionFragment;
        "getUserEMode(address)": FunctionFragment;
        "initReserve(address,address,address,address,address)": FunctionFragment;
        "liquidationCall(address,address,address,uint256,bool)": FunctionFragment;
        "mintToTreasury(address[])": FunctionFragment;
        "mintUnbacked(address,uint256,address,uint16)": FunctionFragment;
        "rebalanceStableBorrowRate(address,address)": FunctionFragment;
        "repay(address,uint256,uint256,address)": FunctionFragment;
        "repayWithATokens(address,uint256,uint256)": FunctionFragment;
        "repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "rescueTokens(address,address,uint256)": FunctionFragment;
        "resetIsolationModeTotalDebt(address)": FunctionFragment;
        "setConfiguration(address,(uint256))": FunctionFragment;
        "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
        "setUserEMode(uint8)": FunctionFragment;
        "setUserUseReserveAsCollateral(address,bool)": FunctionFragment;
        "supply(address,uint256,address,uint16)": FunctionFragment;
        "supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "swapBorrowRateMode(address,uint256)": FunctionFragment;
        "updateBridgeProtocolFee(uint256)": FunctionFragment;
        "updateFlashloanPremiums(uint128,uint128)": FunctionFragment;
        "withdraw(address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "BRIDGE_PROTOCOL_FEE" | "FLASHLOAN_PREMIUM_TOTAL" | "FLASHLOAN_PREMIUM_TO_PROTOCOL" | "MAX_NUMBER_RESERVES" | "MAX_STABLE_RATE_BORROW_SIZE_PERCENT" | "backUnbacked" | "borrow" | "configureEModeCategory" | "deposit" | "dropReserve" | "finalizeTransfer" | "flashLoan" | "flashLoanSimple" | "getConfiguration" | "getEModeCategoryData" | "getReserveAddressById" | "getReserveData" | "getReserveNormalizedIncome" | "getReserveNormalizedVariableDebt" | "getReservesList" | "getUserAccountData" | "getUserConfiguration" | "getUserEMode" | "initReserve" | "liquidationCall" | "mintToTreasury" | "mintUnbacked" | "rebalanceStableBorrowRate" | "repay" | "repayWithATokens" | "repayWithPermit" | "rescueTokens" | "resetIsolationModeTotalDebt" | "setConfiguration" | "setReserveInterestRateStrategyAddress" | "setUserEMode" | "setUserUseReserveAsCollateral" | "supply" | "supplyWithPermit" | "swapBorrowRateMode" | "updateBridgeProtocolFee" | "updateFlashloanPremiums" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "BRIDGE_PROTOCOL_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLASHLOAN_PREMIUM_TOTAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLASHLOAN_PREMIUM_TO_PROTOCOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_NUMBER_RESERVES", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT", values?: undefined): string;
    encodeFunctionData(functionFragment: "backUnbacked", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrow", values: [string, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "configureEModeCategory", values: [BigNumberish, DataTypes.EModeCategoryStruct]): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "dropReserve", values: [string]): string;
    encodeFunctionData(functionFragment: "finalizeTransfer", values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flashLoan", values: [
        string,
        string[],
        BigNumberish[],
        BigNumberish[],
        string,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "flashLoanSimple", values: [string, string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getConfiguration", values: [string]): string;
    encodeFunctionData(functionFragment: "getEModeCategoryData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReserveAddressById", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [string]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedIncome", values: [string]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedVariableDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "getReservesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAccountData", values: [string]): string;
    encodeFunctionData(functionFragment: "getUserConfiguration", values: [string]): string;
    encodeFunctionData(functionFragment: "getUserEMode", values: [string]): string;
    encodeFunctionData(functionFragment: "initReserve", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "liquidationCall", values: [string, string, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "mintToTreasury", values: [string[]]): string;
    encodeFunctionData(functionFragment: "mintUnbacked", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rebalanceStableBorrowRate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "repay", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "repayWithATokens", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayWithPermit", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "rescueTokens", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "resetIsolationModeTotalDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "setConfiguration", values: [string, DataTypes.ReserveConfigurationMapStruct]): string;
    encodeFunctionData(functionFragment: "setReserveInterestRateStrategyAddress", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setUserEMode", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUserUseReserveAsCollateral", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "supply", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyWithPermit", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "swapBorrowRateMode", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateBridgeProtocolFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateFlashloanPremiums", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BRIDGE_PROTOCOL_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLASHLOAN_PREMIUM_TOTAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLASHLOAN_PREMIUM_TO_PROTOCOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_NUMBER_RESERVES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "backUnbacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureEModeCategory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dropReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoanSimple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEModeCategoryData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveAddressById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedIncome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedVariableDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccountData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserEMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintUnbacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayWithATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetIsolationModeTotalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveInterestRateStrategyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserEMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserUseReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapBorrowRateMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridgeProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlashloanPremiums", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "BackUnbacked(address,address,uint256,uint256)": EventFragment;
        "Borrow(address,address,address,uint256,uint8,uint256,uint16)": EventFragment;
        "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)": EventFragment;
        "IsolationModeTotalDebtUpdated(address,uint256)": EventFragment;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)": EventFragment;
        "MintUnbacked(address,address,address,uint256,uint16)": EventFragment;
        "MintedToTreasury(address,uint256)": EventFragment;
        "RebalanceStableBorrowRate(address,address)": EventFragment;
        "Repay(address,address,address,uint256,bool)": EventFragment;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
        "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
        "Supply(address,address,address,uint256,uint16)": EventFragment;
        "SwapBorrowRateMode(address,address,uint8)": EventFragment;
        "UserEModeSet(address,uint8)": EventFragment;
        "Withdraw(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BackUnbacked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IsolationModeTotalDebtUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintUnbacked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintedToTreasury"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RebalanceStableBorrowRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapBorrowRateMode"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserEModeSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface BackUnbackedEventObject {
    reserve: string;
    backer: string;
    amount: BigNumber;
    fee: BigNumber;
}
export declare type BackUnbackedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BackUnbackedEventObject>;
export declare type BackUnbackedEventFilter = TypedEventFilter<BackUnbackedEvent>;
export interface BorrowEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    interestRateMode: number;
    borrowRate: BigNumber;
    referralCode: number;
}
export declare type BorrowEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    number
], BorrowEventObject>;
export declare type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface FlashLoanEventObject {
    target: string;
    initiator: string;
    asset: string;
    amount: BigNumber;
    interestRateMode: number;
    premium: BigNumber;
    referralCode: number;
}
export declare type FlashLoanEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    number
], FlashLoanEventObject>;
export declare type FlashLoanEventFilter = TypedEventFilter<FlashLoanEvent>;
export interface IsolationModeTotalDebtUpdatedEventObject {
    asset: string;
    totalDebt: BigNumber;
}
export declare type IsolationModeTotalDebtUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], IsolationModeTotalDebtUpdatedEventObject>;
export declare type IsolationModeTotalDebtUpdatedEventFilter = TypedEventFilter<IsolationModeTotalDebtUpdatedEvent>;
export interface LiquidationCallEventObject {
    collateralAsset: string;
    debtAsset: string;
    user: string;
    debtToCover: BigNumber;
    liquidatedCollateralAmount: BigNumber;
    liquidator: string;
    receiveAToken: boolean;
}
export declare type LiquidationCallEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    boolean
], LiquidationCallEventObject>;
export declare type LiquidationCallEventFilter = TypedEventFilter<LiquidationCallEvent>;
export interface MintUnbackedEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: number;
}
export declare type MintUnbackedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], MintUnbackedEventObject>;
export declare type MintUnbackedEventFilter = TypedEventFilter<MintUnbackedEvent>;
export interface MintedToTreasuryEventObject {
    reserve: string;
    amountMinted: BigNumber;
}
export declare type MintedToTreasuryEvent = TypedEvent<[
    string,
    BigNumber
], MintedToTreasuryEventObject>;
export declare type MintedToTreasuryEventFilter = TypedEventFilter<MintedToTreasuryEvent>;
export interface RebalanceStableBorrowRateEventObject {
    reserve: string;
    user: string;
}
export declare type RebalanceStableBorrowRateEvent = TypedEvent<[
    string,
    string
], RebalanceStableBorrowRateEventObject>;
export declare type RebalanceStableBorrowRateEventFilter = TypedEventFilter<RebalanceStableBorrowRateEvent>;
export interface RepayEventObject {
    reserve: string;
    user: string;
    repayer: string;
    amount: BigNumber;
    useATokens: boolean;
}
export declare type RepayEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    boolean
], RepayEventObject>;
export declare type RepayEventFilter = TypedEventFilter<RepayEvent>;
export interface ReserveDataUpdatedEventObject {
    reserve: string;
    liquidityRate: BigNumber;
    stableBorrowRate: BigNumber;
    variableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
}
export declare type ReserveDataUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ReserveDataUpdatedEventObject>;
export declare type ReserveDataUpdatedEventFilter = TypedEventFilter<ReserveDataUpdatedEvent>;
export interface ReserveUsedAsCollateralDisabledEventObject {
    reserve: string;
    user: string;
}
export declare type ReserveUsedAsCollateralDisabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralDisabledEventObject>;
export declare type ReserveUsedAsCollateralDisabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralDisabledEvent>;
export interface ReserveUsedAsCollateralEnabledEventObject {
    reserve: string;
    user: string;
}
export declare type ReserveUsedAsCollateralEnabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralEnabledEventObject>;
export declare type ReserveUsedAsCollateralEnabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralEnabledEvent>;
export interface SupplyEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: number;
}
export declare type SupplyEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], SupplyEventObject>;
export declare type SupplyEventFilter = TypedEventFilter<SupplyEvent>;
export interface SwapBorrowRateModeEventObject {
    reserve: string;
    user: string;
    interestRateMode: number;
}
export declare type SwapBorrowRateModeEvent = TypedEvent<[
    string,
    string,
    number
], SwapBorrowRateModeEventObject>;
export declare type SwapBorrowRateModeEventFilter = TypedEventFilter<SwapBorrowRateModeEvent>;
export interface UserEModeSetEventObject {
    user: string;
    categoryId: number;
}
export declare type UserEModeSetEvent = TypedEvent<[
    string,
    number
], UserEModeSetEventObject>;
export declare type UserEModeSetEventFilter = TypedEventFilter<UserEModeSetEvent>;
export interface WithdrawEventObject {
    reserve: string;
    user: string;
    to: string;
    amount: BigNumber;
}
export declare type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface IPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<[BigNumber]>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<[number]>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;
        backUnbacked(asset: string, amount: BigNumberish, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        configureEModeCategory(id: BigNumberish, config: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        dropReserve(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromBefore: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], interestRateModes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashLoanSimple(receiverAddress: string, asset: string, amount: BigNumberish, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<[DataTypes.ReserveConfigurationMapStructOutput]>;
        getEModeCategoryData(id: BigNumberish, overrides?: CallOverrides): Promise<[DataTypes.EModeCategoryStructOutput]>;
        getReserveAddressById(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<[DataTypes.ReserveDataStructOutput]>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReservesList(overrides?: CallOverrides): Promise<[string[]]>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralBase: BigNumber;
            totalDebtBase: BigNumber;
            availableBorrowsBase: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<[DataTypes.UserConfigurationMapStructOutput]>;
        getUserEMode(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initReserve(asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mintToTreasury(assets: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mintUnbacked(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repay(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayWithATokens(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayWithPermit(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rescueTokens(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resetIsolationModeTotalDebt(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setConfiguration(asset: string, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setReserveInterestRateStrategyAddress(asset: string, rateStrategyAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setUserEMode(categoryId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supply(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supplyWithPermit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapBorrowRateMode(asset: string, interestRateMode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateBridgeProtocolFee(bridgeProtocolFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateFlashloanPremiums(flashLoanPremiumTotal: BigNumberish, flashLoanPremiumToProtocol: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<BigNumber>;
    FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<BigNumber>;
    FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<number>;
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
    backUnbacked(asset: string, amount: BigNumberish, fee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    configureEModeCategory(id: BigNumberish, config: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    dropReserve(asset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromBefore: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], interestRateModes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashLoanSimple(receiverAddress: string, asset: string, amount: BigNumberish, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getConfiguration(asset: string, overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>;
    getEModeCategoryData(id: BigNumberish, overrides?: CallOverrides): Promise<DataTypes.EModeCategoryStructOutput>;
    getReserveAddressById(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getReserveData(asset: string, overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>;
    getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getReservesList(overrides?: CallOverrides): Promise<string[]>;
    getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalCollateralBase: BigNumber;
        totalDebtBase: BigNumber;
        availableBorrowsBase: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
    }>;
    getUserConfiguration(user: string, overrides?: CallOverrides): Promise<DataTypes.UserConfigurationMapStructOutput>;
    getUserEMode(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    initReserve(asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mintToTreasury(assets: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mintUnbacked(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repay(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayWithATokens(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayWithPermit(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rescueTokens(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resetIsolationModeTotalDebt(asset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setConfiguration(asset: string, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setReserveInterestRateStrategyAddress(asset: string, rateStrategyAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setUserEMode(categoryId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supply(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supplyWithPermit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapBorrowRateMode(asset: string, interestRateMode: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateBridgeProtocolFee(bridgeProtocolFee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateFlashloanPremiums(flashLoanPremiumTotal: BigNumberish, flashLoanPremiumToProtocol: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<number>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
        backUnbacked(asset: string, amount: BigNumberish, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: CallOverrides): Promise<void>;
        configureEModeCategory(id: BigNumberish, config: DataTypes.EModeCategoryStruct, overrides?: CallOverrides): Promise<void>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        dropReserve(asset: string, overrides?: CallOverrides): Promise<void>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromBefore: BigNumberish, balanceToBefore: BigNumberish, overrides?: CallOverrides): Promise<void>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], interestRateModes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        flashLoanSimple(receiverAddress: string, asset: string, amount: BigNumberish, params: BytesLike, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>;
        getEModeCategoryData(id: BigNumberish, overrides?: CallOverrides): Promise<DataTypes.EModeCategoryStructOutput>;
        getReserveAddressById(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<string[]>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralBase: BigNumber;
            totalDebtBase: BigNumber;
            availableBorrowsBase: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<DataTypes.UserConfigurationMapStructOutput>;
        getUserEMode(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        initReserve(asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: CallOverrides): Promise<void>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: CallOverrides): Promise<void>;
        mintToTreasury(assets: string[], overrides?: CallOverrides): Promise<void>;
        mintUnbacked(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: CallOverrides): Promise<void>;
        repay(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, overrides?: CallOverrides): Promise<BigNumber>;
        repayWithATokens(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayWithPermit(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        rescueTokens(token: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        resetIsolationModeTotalDebt(asset: string, overrides?: CallOverrides): Promise<void>;
        setConfiguration(asset: string, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: CallOverrides): Promise<void>;
        setReserveInterestRateStrategyAddress(asset: string, rateStrategyAddress: string, overrides?: CallOverrides): Promise<void>;
        setUserEMode(categoryId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: CallOverrides): Promise<void>;
        supply(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supplyWithPermit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: CallOverrides): Promise<void>;
        swapBorrowRateMode(asset: string, interestRateMode: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateBridgeProtocolFee(bridgeProtocolFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateFlashloanPremiums(flashLoanPremiumTotal: BigNumberish, flashLoanPremiumToProtocol: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BackUnbacked(address,address,uint256,uint256)"(reserve?: string | null, backer?: string | null, amount?: null, fee?: null): BackUnbackedEventFilter;
        BackUnbacked(reserve?: string | null, backer?: string | null, amount?: null, fee?: null): BackUnbackedEventFilter;
        "Borrow(address,address,address,uint256,uint8,uint256,uint16)"(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, interestRateMode?: null, borrowRate?: null, referralCode?: BigNumberish | null): BorrowEventFilter;
        Borrow(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, interestRateMode?: null, borrowRate?: null, referralCode?: BigNumberish | null): BorrowEventFilter;
        "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)"(target?: string | null, initiator?: null, asset?: string | null, amount?: null, interestRateMode?: null, premium?: null, referralCode?: BigNumberish | null): FlashLoanEventFilter;
        FlashLoan(target?: string | null, initiator?: null, asset?: string | null, amount?: null, interestRateMode?: null, premium?: null, referralCode?: BigNumberish | null): FlashLoanEventFilter;
        "IsolationModeTotalDebtUpdated(address,uint256)"(asset?: string | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        IsolationModeTotalDebtUpdated(asset?: string | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)"(collateralAsset?: string | null, debtAsset?: string | null, user?: string | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        LiquidationCall(collateralAsset?: string | null, debtAsset?: string | null, user?: string | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        "MintUnbacked(address,address,address,uint256,uint16)"(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, referralCode?: BigNumberish | null): MintUnbackedEventFilter;
        MintUnbacked(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, referralCode?: BigNumberish | null): MintUnbackedEventFilter;
        "MintedToTreasury(address,uint256)"(reserve?: string | null, amountMinted?: null): MintedToTreasuryEventFilter;
        MintedToTreasury(reserve?: string | null, amountMinted?: null): MintedToTreasuryEventFilter;
        "RebalanceStableBorrowRate(address,address)"(reserve?: string | null, user?: string | null): RebalanceStableBorrowRateEventFilter;
        RebalanceStableBorrowRate(reserve?: string | null, user?: string | null): RebalanceStableBorrowRateEventFilter;
        "Repay(address,address,address,uint256,bool)"(reserve?: string | null, user?: string | null, repayer?: string | null, amount?: null, useATokens?: null): RepayEventFilter;
        Repay(reserve?: string | null, user?: string | null, repayer?: string | null, amount?: null, useATokens?: null): RepayEventFilter;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"(reserve?: string | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        ReserveDataUpdated(reserve?: string | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        "ReserveUsedAsCollateralDisabled(address,address)"(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralDisabledEventFilter;
        ReserveUsedAsCollateralDisabled(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralDisabledEventFilter;
        "ReserveUsedAsCollateralEnabled(address,address)"(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralEnabledEventFilter;
        ReserveUsedAsCollateralEnabled(reserve?: string | null, user?: string | null): ReserveUsedAsCollateralEnabledEventFilter;
        "Supply(address,address,address,uint256,uint16)"(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, referralCode?: BigNumberish | null): SupplyEventFilter;
        Supply(reserve?: string | null, user?: null, onBehalfOf?: string | null, amount?: null, referralCode?: BigNumberish | null): SupplyEventFilter;
        "SwapBorrowRateMode(address,address,uint8)"(reserve?: string | null, user?: string | null, interestRateMode?: null): SwapBorrowRateModeEventFilter;
        SwapBorrowRateMode(reserve?: string | null, user?: string | null, interestRateMode?: null): SwapBorrowRateModeEventFilter;
        "UserEModeSet(address,uint8)"(user?: string | null, categoryId?: null): UserEModeSetEventFilter;
        UserEModeSet(user?: string | null, categoryId?: null): UserEModeSetEventFilter;
        "Withdraw(address,address,address,uint256)"(reserve?: string | null, user?: string | null, to?: string | null, amount?: null): WithdrawEventFilter;
        Withdraw(reserve?: string | null, user?: string | null, to?: string | null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
        backUnbacked(asset: string, amount: BigNumberish, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        configureEModeCategory(id: BigNumberish, config: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        dropReserve(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromBefore: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], interestRateModes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashLoanSimple(receiverAddress: string, asset: string, amount: BigNumberish, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getEModeCategoryData(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveAddressById(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<BigNumber>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserEMode(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        initReserve(asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mintToTreasury(assets: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mintUnbacked(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repay(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayWithATokens(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayWithPermit(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rescueTokens(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resetIsolationModeTotalDebt(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setConfiguration(asset: string, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setReserveInterestRateStrategyAddress(asset: string, rateStrategyAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setUserEMode(categoryId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supply(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supplyWithPermit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapBorrowRateMode(asset: string, interestRateMode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateBridgeProtocolFee(bridgeProtocolFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateFlashloanPremiums(flashLoanPremiumTotal: BigNumberish, flashLoanPremiumToProtocol: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        backUnbacked(asset: string, amount: BigNumberish, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrow(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, referralCode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        configureEModeCategory(id: BigNumberish, config: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deposit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        dropReserve(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeTransfer(asset: string, from: string, to: string, amount: BigNumberish, balanceFromBefore: BigNumberish, balanceToBefore: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashLoan(receiverAddress: string, assets: string[], amounts: BigNumberish[], interestRateModes: BigNumberish[], onBehalfOf: string, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashLoanSimple(receiverAddress: string, asset: string, amount: BigNumberish, params: BytesLike, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getConfiguration(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEModeCategoryData(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveAddressById(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveData(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedIncome(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedVariableDebt(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserConfiguration(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserEMode(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initReserve(asset: string, aTokenAddress: string, stableDebtAddress: string, variableDebtAddress: string, interestRateStrategyAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidationCall(collateralAsset: string, debtAsset: string, user: string, debtToCover: BigNumberish, receiveAToken: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mintToTreasury(assets: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mintUnbacked(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rebalanceStableBorrowRate(asset: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repay(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayWithATokens(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayWithPermit(asset: string, amount: BigNumberish, interestRateMode: BigNumberish, onBehalfOf: string, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rescueTokens(token: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resetIsolationModeTotalDebt(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setConfiguration(asset: string, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setReserveInterestRateStrategyAddress(asset: string, rateStrategyAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setUserEMode(categoryId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setUserUseReserveAsCollateral(asset: string, useAsCollateral: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supply(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supplyWithPermit(asset: string, amount: BigNumberish, onBehalfOf: string, referralCode: BigNumberish, deadline: BigNumberish, permitV: BigNumberish, permitR: BytesLike, permitS: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapBorrowRateMode(asset: string, interestRateMode: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateBridgeProtocolFee(bridgeProtocolFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateFlashloanPremiums(flashLoanPremiumTotal: BigNumberish, flashLoanPremiumToProtocol: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(asset: string, amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
