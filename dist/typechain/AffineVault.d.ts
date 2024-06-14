import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AffineVaultInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "HARVESTER()": FunctionFragment;
        "LOCK_INTERVAL()": FunctionFragment;
        "addStrategy(address,uint16)": FunctionFragment;
        "asset()": FunctionFragment;
        "depositIntoStrategy(address,uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getWithdrawalQueue()": FunctionFragment;
        "governance()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "harvest(address[])": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "lastHarvest()": FunctionFragment;
        "lockedProfit()": FunctionFragment;
        "maxLockedProfit()": FunctionFragment;
        "rebalance()": FunctionFragment;
        "removeStrategy(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setWithdrawalQueue(address[20])": FunctionFragment;
        "strategies(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "totalBps()": FunctionFragment;
        "totalStrategyHoldings()": FunctionFragment;
        "updateStrategyAllocations(address[],uint16[])": FunctionFragment;
        "vaultTVL()": FunctionFragment;
        "withdrawFromStrategy(address,uint256)": FunctionFragment;
        "withdrawalQueue(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "HARVESTER" | "LOCK_INTERVAL" | "addStrategy" | "asset" | "depositIntoStrategy" | "getRoleAdmin" | "getWithdrawalQueue" | "governance" | "grantRole" | "harvest" | "hasRole" | "lastHarvest" | "lockedProfit" | "maxLockedProfit" | "rebalance" | "removeStrategy" | "renounceRole" | "revokeRole" | "setWithdrawalQueue" | "strategies" | "supportsInterface" | "totalBps" | "totalStrategyHoldings" | "updateStrategyAllocations" | "vaultTVL" | "withdrawFromStrategy" | "withdrawalQueue"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "HARVESTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "LOCK_INTERVAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "addStrategy", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositIntoStrategy", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getWithdrawalQueue", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "harvest", values: [string[]]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "lastHarvest", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLockedProfit", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeStrategy", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setWithdrawalQueue", values: [string[]]): string;
    encodeFunctionData(functionFragment: "strategies", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "totalBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalStrategyHoldings", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateStrategyAllocations", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "vaultTVL", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFromStrategy", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawalQueue", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "HARVESTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LOCK_INTERVAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositIntoStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastHarvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLockedProfit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStrategyHoldings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStrategyAllocations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalQueue", data: BytesLike): Result;
    events: {
        "Harvest(address,address[])": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Liquidation(uint256,uint256)": EventFragment;
        "Rebalance(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "StrategyAdded(address)": EventFragment;
        "StrategyAllocsUpdated(address[],uint16[])": EventFragment;
        "StrategyDeposit(address,uint256)": EventFragment;
        "StrategyRemoved(address)": EventFragment;
        "StrategyWithdrawal(address,uint256,uint256)": EventFragment;
        "WithdrawalQueueSet(address[20])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Rebalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyAllocsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalQueueSet"): EventFragment;
}
export interface HarvestEventObject {
    user: string;
    strategies: string[];
}
export declare type HarvestEvent = TypedEvent<[string, string[]], HarvestEventObject>;
export declare type HarvestEventFilter = TypedEventFilter<HarvestEvent>;
export interface InitializedEventObject {
    version: number;
}
export declare type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LiquidationEventObject {
    assetsRequested: BigNumber;
    assetsLiquidated: BigNumber;
}
export declare type LiquidationEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LiquidationEventObject>;
export declare type LiquidationEventFilter = TypedEventFilter<LiquidationEvent>;
export interface RebalanceEventObject {
    caller: string;
}
export declare type RebalanceEvent = TypedEvent<[string], RebalanceEventObject>;
export declare type RebalanceEventFilter = TypedEventFilter<RebalanceEvent>;
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
export interface StrategyAddedEventObject {
    strategy: string;
}
export declare type StrategyAddedEvent = TypedEvent<[string], StrategyAddedEventObject>;
export declare type StrategyAddedEventFilter = TypedEventFilter<StrategyAddedEvent>;
export interface StrategyAllocsUpdatedEventObject {
    strategyList: string[];
    strategyBps: number[];
}
export declare type StrategyAllocsUpdatedEvent = TypedEvent<[
    string[],
    number[]
], StrategyAllocsUpdatedEventObject>;
export declare type StrategyAllocsUpdatedEventFilter = TypedEventFilter<StrategyAllocsUpdatedEvent>;
export interface StrategyDepositEventObject {
    strategy: string;
    assets: BigNumber;
}
export declare type StrategyDepositEvent = TypedEvent<[
    string,
    BigNumber
], StrategyDepositEventObject>;
export declare type StrategyDepositEventFilter = TypedEventFilter<StrategyDepositEvent>;
export interface StrategyRemovedEventObject {
    strategy: string;
}
export declare type StrategyRemovedEvent = TypedEvent<[
    string
], StrategyRemovedEventObject>;
export declare type StrategyRemovedEventFilter = TypedEventFilter<StrategyRemovedEvent>;
export interface StrategyWithdrawalEventObject {
    strategy: string;
    assetsRequested: BigNumber;
    assetsReceived: BigNumber;
}
export declare type StrategyWithdrawalEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StrategyWithdrawalEventObject>;
export declare type StrategyWithdrawalEventFilter = TypedEventFilter<StrategyWithdrawalEvent>;
export interface WithdrawalQueueSetEventObject {
    newQueue: string[];
}
export declare type WithdrawalQueueSetEvent = TypedEvent<[
    string[]
], WithdrawalQueueSetEventObject>;
export declare type WithdrawalQueueSetEventFilter = TypedEventFilter<WithdrawalQueueSetEvent>;
export interface AffineVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AffineVaultInterface;
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
        HARVESTER(overrides?: CallOverrides): Promise<[string]>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;
        addStrategy(strategy: string, tvlBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        depositIntoStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<[string[]]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        harvest(strategyList: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        lastHarvest(overrides?: CallOverrides): Promise<[BigNumber]>;
        lockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLockedProfit(overrides?: CallOverrides): Promise<[BigNumber]>;
        rebalance(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeStrategy(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setWithdrawalQueue(newQueue: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        strategies(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            BigNumber
        ] & {
            isActive: boolean;
            tvlBps: number;
            balance: BigNumber;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        totalBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateStrategyAllocations(strategyList: string[], strategyBps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vaultTVL(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawFromStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawalQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    HARVESTER(overrides?: CallOverrides): Promise<string>;
    LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
    addStrategy(strategy: string, tvlBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    depositIntoStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getWithdrawalQueue(overrides?: CallOverrides): Promise<string[]>;
    governance(overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    harvest(strategyList: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
    lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
    rebalance(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeStrategy(strategy: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setWithdrawalQueue(newQueue: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    strategies(arg0: string, overrides?: CallOverrides): Promise<[
        boolean,
        number,
        BigNumber
    ] & {
        isActive: boolean;
        tvlBps: number;
        balance: BigNumber;
    }>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    totalBps(overrides?: CallOverrides): Promise<BigNumber>;
    totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
    updateStrategyAllocations(strategyList: string[], strategyBps: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
    withdrawFromStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawalQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        HARVESTER(overrides?: CallOverrides): Promise<string>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        addStrategy(strategy: string, tvlBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        asset(overrides?: CallOverrides): Promise<string>;
        depositIntoStrategy(strategy: string, assets: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<string[]>;
        governance(overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        harvest(strategyList: string[], overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        rebalance(overrides?: CallOverrides): Promise<void>;
        removeStrategy(strategy: string, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setWithdrawalQueue(newQueue: string[], overrides?: CallOverrides): Promise<void>;
        strategies(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            BigNumber
        ] & {
            isActive: boolean;
            tvlBps: number;
            balance: BigNumber;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        totalBps(overrides?: CallOverrides): Promise<BigNumber>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
        updateStrategyAllocations(strategyList: string[], strategyBps: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFromStrategy(strategy: string, assets: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawalQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Harvest(address,address[])"(user?: string | null, strategies?: null): HarvestEventFilter;
        Harvest(user?: string | null, strategies?: null): HarvestEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Liquidation(uint256,uint256)"(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        Liquidation(assetsRequested?: null, assetsLiquidated?: null): LiquidationEventFilter;
        "Rebalance(address)"(caller?: string | null): RebalanceEventFilter;
        Rebalance(caller?: string | null): RebalanceEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "StrategyAdded(address)"(strategy?: string | null): StrategyAddedEventFilter;
        StrategyAdded(strategy?: string | null): StrategyAddedEventFilter;
        "StrategyAllocsUpdated(address[],uint16[])"(strategyList?: null, strategyBps?: null): StrategyAllocsUpdatedEventFilter;
        StrategyAllocsUpdated(strategyList?: null, strategyBps?: null): StrategyAllocsUpdatedEventFilter;
        "StrategyDeposit(address,uint256)"(strategy?: string | null, assets?: null): StrategyDepositEventFilter;
        StrategyDeposit(strategy?: string | null, assets?: null): StrategyDepositEventFilter;
        "StrategyRemoved(address)"(strategy?: string | null): StrategyRemovedEventFilter;
        StrategyRemoved(strategy?: string | null): StrategyRemovedEventFilter;
        "StrategyWithdrawal(address,uint256,uint256)"(strategy?: string | null, assetsRequested?: null, assetsReceived?: null): StrategyWithdrawalEventFilter;
        StrategyWithdrawal(strategy?: string | null, assetsRequested?: null, assetsReceived?: null): StrategyWithdrawalEventFilter;
        "WithdrawalQueueSet(address[20])"(newQueue?: null): WithdrawalQueueSetEventFilter;
        WithdrawalQueueSet(newQueue?: null): WithdrawalQueueSetEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        HARVESTER(overrides?: CallOverrides): Promise<BigNumber>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;
        addStrategy(strategy: string, tvlBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        depositIntoStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        harvest(strategyList: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;
        lockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        maxLockedProfit(overrides?: CallOverrides): Promise<BigNumber>;
        rebalance(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeStrategy(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setWithdrawalQueue(newQueue: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        strategies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        totalBps(overrides?: CallOverrides): Promise<BigNumber>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<BigNumber>;
        updateStrategyAllocations(strategyList: string[], strategyBps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vaultTVL(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawFromStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawalQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        HARVESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LOCK_INTERVAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addStrategy(strategy: string, tvlBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositIntoStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithdrawalQueue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        harvest(strategyList: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastHarvest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLockedProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalance(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeStrategy(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setWithdrawalQueue(newQueue: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        strategies(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStrategyHoldings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateStrategyAllocations(strategyList: string[], strategyBps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vaultTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawFromStrategy(strategy: string, assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawalQueue(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
