import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ILendingPoolAddressesProviderInterface extends utils.Interface {
    functions: {
        "getAddress(bytes32)": FunctionFragment;
        "getEmergencyAdmin()": FunctionFragment;
        "getLendingPool()": FunctionFragment;
        "getLendingPoolCollateralManager()": FunctionFragment;
        "getLendingPoolConfigurator()": FunctionFragment;
        "getLendingRateOracle()": FunctionFragment;
        "getMarketId()": FunctionFragment;
        "getPoolAdmin()": FunctionFragment;
        "getPriceOracle()": FunctionFragment;
        "setAddress(bytes32,address)": FunctionFragment;
        "setAddressAsProxy(bytes32,address)": FunctionFragment;
        "setEmergencyAdmin(address)": FunctionFragment;
        "setLendingPoolCollateralManager(address)": FunctionFragment;
        "setLendingPoolConfiguratorImpl(address)": FunctionFragment;
        "setLendingPoolImpl(address)": FunctionFragment;
        "setLendingRateOracle(address)": FunctionFragment;
        "setMarketId(string)": FunctionFragment;
        "setPoolAdmin(address)": FunctionFragment;
        "setPriceOracle(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAddress" | "getEmergencyAdmin" | "getLendingPool" | "getLendingPoolCollateralManager" | "getLendingPoolConfigurator" | "getLendingRateOracle" | "getMarketId" | "getPoolAdmin" | "getPriceOracle" | "setAddress" | "setAddressAsProxy" | "setEmergencyAdmin" | "setLendingPoolCollateralManager" | "setLendingPoolConfiguratorImpl" | "setLendingPoolImpl" | "setLendingRateOracle" | "setMarketId" | "setPoolAdmin" | "setPriceOracle"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getEmergencyAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingPoolCollateralManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingPoolConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingRateOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMarketId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAddress", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setAddressAsProxy", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setEmergencyAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "setLendingPoolCollateralManager", values: [string]): string;
    encodeFunctionData(functionFragment: "setLendingPoolConfiguratorImpl", values: [string]): string;
    encodeFunctionData(functionFragment: "setLendingPoolImpl", values: [string]): string;
    encodeFunctionData(functionFragment: "setLendingRateOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "setMarketId", values: [string]): string;
    encodeFunctionData(functionFragment: "setPoolAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "setPriceOracle", values: [string]): string;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingPoolCollateralManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingPoolConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingRateOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressAsProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingPoolCollateralManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingPoolConfiguratorImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingPoolImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingRateOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracle", data: BytesLike): Result;
    events: {
        "AddressSet(bytes32,address,bool)": EventFragment;
        "ConfigurationAdminUpdated(address)": EventFragment;
        "EmergencyAdminUpdated(address)": EventFragment;
        "LendingPoolCollateralManagerUpdated(address)": EventFragment;
        "LendingPoolConfiguratorUpdated(address)": EventFragment;
        "LendingPoolUpdated(address)": EventFragment;
        "LendingRateOracleUpdated(address)": EventFragment;
        "MarketIdSet(string)": EventFragment;
        "PriceOracleUpdated(address)": EventFragment;
        "ProxyCreated(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConfigurationAdminUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyAdminUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LendingPoolCollateralManagerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LendingPoolConfiguratorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LendingPoolUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LendingRateOracleUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PriceOracleUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProxyCreated"): EventFragment;
}
export interface AddressSetEventObject {
    id: string;
    newAddress: string;
    hasProxy: boolean;
}
export type AddressSetEvent = TypedEvent<[
    string,
    string,
    boolean
], AddressSetEventObject>;
export type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>;
export interface ConfigurationAdminUpdatedEventObject {
    newAddress: string;
}
export type ConfigurationAdminUpdatedEvent = TypedEvent<[
    string
], ConfigurationAdminUpdatedEventObject>;
export type ConfigurationAdminUpdatedEventFilter = TypedEventFilter<ConfigurationAdminUpdatedEvent>;
export interface EmergencyAdminUpdatedEventObject {
    newAddress: string;
}
export type EmergencyAdminUpdatedEvent = TypedEvent<[
    string
], EmergencyAdminUpdatedEventObject>;
export type EmergencyAdminUpdatedEventFilter = TypedEventFilter<EmergencyAdminUpdatedEvent>;
export interface LendingPoolCollateralManagerUpdatedEventObject {
    newAddress: string;
}
export type LendingPoolCollateralManagerUpdatedEvent = TypedEvent<[
    string
], LendingPoolCollateralManagerUpdatedEventObject>;
export type LendingPoolCollateralManagerUpdatedEventFilter = TypedEventFilter<LendingPoolCollateralManagerUpdatedEvent>;
export interface LendingPoolConfiguratorUpdatedEventObject {
    newAddress: string;
}
export type LendingPoolConfiguratorUpdatedEvent = TypedEvent<[
    string
], LendingPoolConfiguratorUpdatedEventObject>;
export type LendingPoolConfiguratorUpdatedEventFilter = TypedEventFilter<LendingPoolConfiguratorUpdatedEvent>;
export interface LendingPoolUpdatedEventObject {
    newAddress: string;
}
export type LendingPoolUpdatedEvent = TypedEvent<[
    string
], LendingPoolUpdatedEventObject>;
export type LendingPoolUpdatedEventFilter = TypedEventFilter<LendingPoolUpdatedEvent>;
export interface LendingRateOracleUpdatedEventObject {
    newAddress: string;
}
export type LendingRateOracleUpdatedEvent = TypedEvent<[
    string
], LendingRateOracleUpdatedEventObject>;
export type LendingRateOracleUpdatedEventFilter = TypedEventFilter<LendingRateOracleUpdatedEvent>;
export interface MarketIdSetEventObject {
    newMarketId: string;
}
export type MarketIdSetEvent = TypedEvent<[string], MarketIdSetEventObject>;
export type MarketIdSetEventFilter = TypedEventFilter<MarketIdSetEvent>;
export interface PriceOracleUpdatedEventObject {
    newAddress: string;
}
export type PriceOracleUpdatedEvent = TypedEvent<[
    string
], PriceOracleUpdatedEventObject>;
export type PriceOracleUpdatedEventFilter = TypedEventFilter<PriceOracleUpdatedEvent>;
export interface ProxyCreatedEventObject {
    id: string;
    newAddress: string;
}
export type ProxyCreatedEvent = TypedEvent<[
    string,
    string
], ProxyCreatedEventObject>;
export type ProxyCreatedEventFilter = TypedEventFilter<ProxyCreatedEvent>;
export interface ILendingPoolAddressesProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILendingPoolAddressesProviderInterface;
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
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getEmergencyAdmin(overrides?: CallOverrides): Promise<[string]>;
        getLendingPool(overrides?: CallOverrides): Promise<[string]>;
        getLendingPoolCollateralManager(overrides?: CallOverrides): Promise<[string]>;
        getLendingPoolConfigurator(overrides?: CallOverrides): Promise<[string]>;
        getLendingRateOracle(overrides?: CallOverrides): Promise<[string]>;
        getMarketId(overrides?: CallOverrides): Promise<[string]>;
        getPoolAdmin(overrides?: CallOverrides): Promise<[string]>;
        getPriceOracle(overrides?: CallOverrides): Promise<[string]>;
        setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setAddressAsProxy(id: BytesLike, impl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setEmergencyAdmin(admin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLendingPoolCollateralManager(manager: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLendingPoolConfiguratorImpl(configurator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLendingPoolImpl(pool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLendingRateOracle(lendingRateOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMarketId(marketId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPoolAdmin(admin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPriceOracle(priceOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;
    getEmergencyAdmin(overrides?: CallOverrides): Promise<string>;
    getLendingPool(overrides?: CallOverrides): Promise<string>;
    getLendingPoolCollateralManager(overrides?: CallOverrides): Promise<string>;
    getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;
    getLendingRateOracle(overrides?: CallOverrides): Promise<string>;
    getMarketId(overrides?: CallOverrides): Promise<string>;
    getPoolAdmin(overrides?: CallOverrides): Promise<string>;
    getPriceOracle(overrides?: CallOverrides): Promise<string>;
    setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setAddressAsProxy(id: BytesLike, impl: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setEmergencyAdmin(admin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLendingPoolCollateralManager(manager: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLendingPoolConfiguratorImpl(configurator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLendingPoolImpl(pool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLendingRateOracle(lendingRateOracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMarketId(marketId: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPoolAdmin(admin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPriceOracle(priceOracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;
        getEmergencyAdmin(overrides?: CallOverrides): Promise<string>;
        getLendingPool(overrides?: CallOverrides): Promise<string>;
        getLendingPoolCollateralManager(overrides?: CallOverrides): Promise<string>;
        getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;
        getLendingRateOracle(overrides?: CallOverrides): Promise<string>;
        getMarketId(overrides?: CallOverrides): Promise<string>;
        getPoolAdmin(overrides?: CallOverrides): Promise<string>;
        getPriceOracle(overrides?: CallOverrides): Promise<string>;
        setAddress(id: BytesLike, newAddress: string, overrides?: CallOverrides): Promise<void>;
        setAddressAsProxy(id: BytesLike, impl: string, overrides?: CallOverrides): Promise<void>;
        setEmergencyAdmin(admin: string, overrides?: CallOverrides): Promise<void>;
        setLendingPoolCollateralManager(manager: string, overrides?: CallOverrides): Promise<void>;
        setLendingPoolConfiguratorImpl(configurator: string, overrides?: CallOverrides): Promise<void>;
        setLendingPoolImpl(pool: string, overrides?: CallOverrides): Promise<void>;
        setLendingRateOracle(lendingRateOracle: string, overrides?: CallOverrides): Promise<void>;
        setMarketId(marketId: string, overrides?: CallOverrides): Promise<void>;
        setPoolAdmin(admin: string, overrides?: CallOverrides): Promise<void>;
        setPriceOracle(priceOracle: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressSet(bytes32,address,bool)"(id?: null, newAddress?: string | null, hasProxy?: null): AddressSetEventFilter;
        AddressSet(id?: null, newAddress?: string | null, hasProxy?: null): AddressSetEventFilter;
        "ConfigurationAdminUpdated(address)"(newAddress?: string | null): ConfigurationAdminUpdatedEventFilter;
        ConfigurationAdminUpdated(newAddress?: string | null): ConfigurationAdminUpdatedEventFilter;
        "EmergencyAdminUpdated(address)"(newAddress?: string | null): EmergencyAdminUpdatedEventFilter;
        EmergencyAdminUpdated(newAddress?: string | null): EmergencyAdminUpdatedEventFilter;
        "LendingPoolCollateralManagerUpdated(address)"(newAddress?: string | null): LendingPoolCollateralManagerUpdatedEventFilter;
        LendingPoolCollateralManagerUpdated(newAddress?: string | null): LendingPoolCollateralManagerUpdatedEventFilter;
        "LendingPoolConfiguratorUpdated(address)"(newAddress?: string | null): LendingPoolConfiguratorUpdatedEventFilter;
        LendingPoolConfiguratorUpdated(newAddress?: string | null): LendingPoolConfiguratorUpdatedEventFilter;
        "LendingPoolUpdated(address)"(newAddress?: string | null): LendingPoolUpdatedEventFilter;
        LendingPoolUpdated(newAddress?: string | null): LendingPoolUpdatedEventFilter;
        "LendingRateOracleUpdated(address)"(newAddress?: string | null): LendingRateOracleUpdatedEventFilter;
        LendingRateOracleUpdated(newAddress?: string | null): LendingRateOracleUpdatedEventFilter;
        "MarketIdSet(string)"(newMarketId?: null): MarketIdSetEventFilter;
        MarketIdSet(newMarketId?: null): MarketIdSetEventFilter;
        "PriceOracleUpdated(address)"(newAddress?: string | null): PriceOracleUpdatedEventFilter;
        PriceOracleUpdated(newAddress?: string | null): PriceOracleUpdatedEventFilter;
        "ProxyCreated(bytes32,address)"(id?: null, newAddress?: string | null): ProxyCreatedEventFilter;
        ProxyCreated(id?: null, newAddress?: string | null): ProxyCreatedEventFilter;
    };
    estimateGas: {
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getEmergencyAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        getLendingPool(overrides?: CallOverrides): Promise<BigNumber>;
        getLendingPoolCollateralManager(overrides?: CallOverrides): Promise<BigNumber>;
        getLendingPoolConfigurator(overrides?: CallOverrides): Promise<BigNumber>;
        getLendingRateOracle(overrides?: CallOverrides): Promise<BigNumber>;
        getMarketId(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setAddressAsProxy(id: BytesLike, impl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setEmergencyAdmin(admin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLendingPoolCollateralManager(manager: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLendingPoolConfiguratorImpl(configurator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLendingPoolImpl(pool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLendingRateOracle(lendingRateOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMarketId(marketId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPoolAdmin(admin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPriceOracle(priceOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEmergencyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLendingPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLendingPoolCollateralManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLendingPoolConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLendingRateOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarketId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setAddressAsProxy(id: BytesLike, impl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setEmergencyAdmin(admin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLendingPoolCollateralManager(manager: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLendingPoolConfiguratorImpl(configurator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLendingPoolImpl(pool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLendingRateOracle(lendingRateOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMarketId(marketId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPoolAdmin(admin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPriceOracle(priceOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
