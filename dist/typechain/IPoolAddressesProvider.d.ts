import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPoolAddressesProviderInterface extends utils.Interface {
    functions: {
        "getACLAdmin()": FunctionFragment;
        "getACLManager()": FunctionFragment;
        "getAddress(bytes32)": FunctionFragment;
        "getMarketId()": FunctionFragment;
        "getPool()": FunctionFragment;
        "getPoolConfigurator()": FunctionFragment;
        "getPoolDataProvider()": FunctionFragment;
        "getPriceOracle()": FunctionFragment;
        "getPriceOracleSentinel()": FunctionFragment;
        "setACLAdmin(address)": FunctionFragment;
        "setACLManager(address)": FunctionFragment;
        "setAddress(bytes32,address)": FunctionFragment;
        "setAddressAsProxy(bytes32,address)": FunctionFragment;
        "setMarketId(string)": FunctionFragment;
        "setPoolConfiguratorImpl(address)": FunctionFragment;
        "setPoolDataProvider(address)": FunctionFragment;
        "setPoolImpl(address)": FunctionFragment;
        "setPriceOracle(address)": FunctionFragment;
        "setPriceOracleSentinel(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getACLAdmin" | "getACLManager" | "getAddress" | "getMarketId" | "getPool" | "getPoolConfigurator" | "getPoolDataProvider" | "getPriceOracle" | "getPriceOracleSentinel" | "setACLAdmin" | "setACLManager" | "setAddress" | "setAddressAsProxy" | "setMarketId" | "setPoolConfiguratorImpl" | "setPoolDataProvider" | "setPoolImpl" | "setPriceOracle" | "setPriceOracleSentinel"): FunctionFragment;
    encodeFunctionData(functionFragment: "getACLAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getACLManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getMarketId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolDataProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracleSentinel", values?: undefined): string;
    encodeFunctionData(functionFragment: "setACLAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "setACLManager", values: [string]): string;
    encodeFunctionData(functionFragment: "setAddress", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setAddressAsProxy", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setMarketId", values: [string]): string;
    encodeFunctionData(functionFragment: "setPoolConfiguratorImpl", values: [string]): string;
    encodeFunctionData(functionFragment: "setPoolDataProvider", values: [string]): string;
    encodeFunctionData(functionFragment: "setPoolImpl", values: [string]): string;
    encodeFunctionData(functionFragment: "setPriceOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "setPriceOracleSentinel", values: [string]): string;
    decodeFunctionResult(functionFragment: "getACLAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getACLManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolDataProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracleSentinel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setACLAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setACLManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressAsProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolConfiguratorImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolDataProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracleSentinel", data: BytesLike): Result;
    events: {
        "ACLAdminUpdated(address,address)": EventFragment;
        "ACLManagerUpdated(address,address)": EventFragment;
        "AddressSet(bytes32,address,address)": EventFragment;
        "AddressSetAsProxy(bytes32,address,address,address)": EventFragment;
        "MarketIdSet(string,string)": EventFragment;
        "PoolConfiguratorUpdated(address,address)": EventFragment;
        "PoolDataProviderUpdated(address,address)": EventFragment;
        "PoolUpdated(address,address)": EventFragment;
        "PriceOracleSentinelUpdated(address,address)": EventFragment;
        "PriceOracleUpdated(address,address)": EventFragment;
        "ProxyCreated(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ACLAdminUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ACLManagerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressSetAsProxy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolConfiguratorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolDataProviderUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PriceOracleSentinelUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PriceOracleUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProxyCreated"): EventFragment;
}
export interface ACLAdminUpdatedEventObject {
    oldAddress: string;
    newAddress: string;
}
export declare type ACLAdminUpdatedEvent = TypedEvent<[
    string,
    string
], ACLAdminUpdatedEventObject>;
export declare type ACLAdminUpdatedEventFilter = TypedEventFilter<ACLAdminUpdatedEvent>;
export interface ACLManagerUpdatedEventObject {
    oldAddress: string;
    newAddress: string;
}
export declare type ACLManagerUpdatedEvent = TypedEvent<[
    string,
    string
], ACLManagerUpdatedEventObject>;
export declare type ACLManagerUpdatedEventFilter = TypedEventFilter<ACLManagerUpdatedEvent>;
export interface AddressSetEventObject {
    id: string;
    oldAddress: string;
    newAddress: string;
}
export declare type AddressSetEvent = TypedEvent<[
    string,
    string,
    string
], AddressSetEventObject>;
export declare type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>;
export interface AddressSetAsProxyEventObject {
    id: string;
    proxyAddress: string;
    oldImplementationAddress: string;
    newImplementationAddress: string;
}
export declare type AddressSetAsProxyEvent = TypedEvent<[
    string,
    string,
    string,
    string
], AddressSetAsProxyEventObject>;
export declare type AddressSetAsProxyEventFilter = TypedEventFilter<AddressSetAsProxyEvent>;
export interface MarketIdSetEventObject {
    oldMarketId: string;
    newMarketId: string;
}
export declare type MarketIdSetEvent = TypedEvent<[
    string,
    string
], MarketIdSetEventObject>;
export declare type MarketIdSetEventFilter = TypedEventFilter<MarketIdSetEvent>;
export interface PoolConfiguratorUpdatedEventObject {
    oldAddress: string;
    newAddress: string;
}
export declare type PoolConfiguratorUpdatedEvent = TypedEvent<[
    string,
    string
], PoolConfiguratorUpdatedEventObject>;
export declare type PoolConfiguratorUpdatedEventFilter = TypedEventFilter<PoolConfiguratorUpdatedEvent>;
export interface PoolDataProviderUpdatedEventObject {
    oldAddress: string;
    newAddress: string;
}
export declare type PoolDataProviderUpdatedEvent = TypedEvent<[
    string,
    string
], PoolDataProviderUpdatedEventObject>;
export declare type PoolDataProviderUpdatedEventFilter = TypedEventFilter<PoolDataProviderUpdatedEvent>;
export interface PoolUpdatedEventObject {
    oldAddress: string;
    newAddress: string;
}
export declare type PoolUpdatedEvent = TypedEvent<[
    string,
    string
], PoolUpdatedEventObject>;
export declare type PoolUpdatedEventFilter = TypedEventFilter<PoolUpdatedEvent>;
export interface PriceOracleSentinelUpdatedEventObject {
    oldAddress: string;
    newAddress: string;
}
export declare type PriceOracleSentinelUpdatedEvent = TypedEvent<[
    string,
    string
], PriceOracleSentinelUpdatedEventObject>;
export declare type PriceOracleSentinelUpdatedEventFilter = TypedEventFilter<PriceOracleSentinelUpdatedEvent>;
export interface PriceOracleUpdatedEventObject {
    oldAddress: string;
    newAddress: string;
}
export declare type PriceOracleUpdatedEvent = TypedEvent<[
    string,
    string
], PriceOracleUpdatedEventObject>;
export declare type PriceOracleUpdatedEventFilter = TypedEventFilter<PriceOracleUpdatedEvent>;
export interface ProxyCreatedEventObject {
    id: string;
    proxyAddress: string;
    implementationAddress: string;
}
export declare type ProxyCreatedEvent = TypedEvent<[
    string,
    string,
    string
], ProxyCreatedEventObject>;
export declare type ProxyCreatedEventFilter = TypedEventFilter<ProxyCreatedEvent>;
export interface IPoolAddressesProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolAddressesProviderInterface;
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
        getACLAdmin(overrides?: CallOverrides): Promise<[string]>;
        getACLManager(overrides?: CallOverrides): Promise<[string]>;
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getMarketId(overrides?: CallOverrides): Promise<[string]>;
        getPool(overrides?: CallOverrides): Promise<[string]>;
        getPoolConfigurator(overrides?: CallOverrides): Promise<[string]>;
        getPoolDataProvider(overrides?: CallOverrides): Promise<[string]>;
        getPriceOracle(overrides?: CallOverrides): Promise<[string]>;
        getPriceOracleSentinel(overrides?: CallOverrides): Promise<[string]>;
        setACLAdmin(newAclAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setACLManager(newAclManager: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setAddressAsProxy(id: BytesLike, newImplementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMarketId(newMarketId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPoolConfiguratorImpl(newPoolConfiguratorImpl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPoolDataProvider(newDataProvider: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPoolImpl(newPoolImpl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPriceOracle(newPriceOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPriceOracleSentinel(newPriceOracleSentinel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    getACLAdmin(overrides?: CallOverrides): Promise<string>;
    getACLManager(overrides?: CallOverrides): Promise<string>;
    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;
    getMarketId(overrides?: CallOverrides): Promise<string>;
    getPool(overrides?: CallOverrides): Promise<string>;
    getPoolConfigurator(overrides?: CallOverrides): Promise<string>;
    getPoolDataProvider(overrides?: CallOverrides): Promise<string>;
    getPriceOracle(overrides?: CallOverrides): Promise<string>;
    getPriceOracleSentinel(overrides?: CallOverrides): Promise<string>;
    setACLAdmin(newAclAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setACLManager(newAclManager: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setAddressAsProxy(id: BytesLike, newImplementationAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMarketId(newMarketId: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPoolConfiguratorImpl(newPoolConfiguratorImpl: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPoolDataProvider(newDataProvider: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPoolImpl(newPoolImpl: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPriceOracle(newPriceOracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPriceOracleSentinel(newPriceOracleSentinel: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        getACLAdmin(overrides?: CallOverrides): Promise<string>;
        getACLManager(overrides?: CallOverrides): Promise<string>;
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;
        getMarketId(overrides?: CallOverrides): Promise<string>;
        getPool(overrides?: CallOverrides): Promise<string>;
        getPoolConfigurator(overrides?: CallOverrides): Promise<string>;
        getPoolDataProvider(overrides?: CallOverrides): Promise<string>;
        getPriceOracle(overrides?: CallOverrides): Promise<string>;
        getPriceOracleSentinel(overrides?: CallOverrides): Promise<string>;
        setACLAdmin(newAclAdmin: string, overrides?: CallOverrides): Promise<void>;
        setACLManager(newAclManager: string, overrides?: CallOverrides): Promise<void>;
        setAddress(id: BytesLike, newAddress: string, overrides?: CallOverrides): Promise<void>;
        setAddressAsProxy(id: BytesLike, newImplementationAddress: string, overrides?: CallOverrides): Promise<void>;
        setMarketId(newMarketId: string, overrides?: CallOverrides): Promise<void>;
        setPoolConfiguratorImpl(newPoolConfiguratorImpl: string, overrides?: CallOverrides): Promise<void>;
        setPoolDataProvider(newDataProvider: string, overrides?: CallOverrides): Promise<void>;
        setPoolImpl(newPoolImpl: string, overrides?: CallOverrides): Promise<void>;
        setPriceOracle(newPriceOracle: string, overrides?: CallOverrides): Promise<void>;
        setPriceOracleSentinel(newPriceOracleSentinel: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ACLAdminUpdated(address,address)"(oldAddress?: string | null, newAddress?: string | null): ACLAdminUpdatedEventFilter;
        ACLAdminUpdated(oldAddress?: string | null, newAddress?: string | null): ACLAdminUpdatedEventFilter;
        "ACLManagerUpdated(address,address)"(oldAddress?: string | null, newAddress?: string | null): ACLManagerUpdatedEventFilter;
        ACLManagerUpdated(oldAddress?: string | null, newAddress?: string | null): ACLManagerUpdatedEventFilter;
        "AddressSet(bytes32,address,address)"(id?: BytesLike | null, oldAddress?: string | null, newAddress?: string | null): AddressSetEventFilter;
        AddressSet(id?: BytesLike | null, oldAddress?: string | null, newAddress?: string | null): AddressSetEventFilter;
        "AddressSetAsProxy(bytes32,address,address,address)"(id?: BytesLike | null, proxyAddress?: string | null, oldImplementationAddress?: null, newImplementationAddress?: string | null): AddressSetAsProxyEventFilter;
        AddressSetAsProxy(id?: BytesLike | null, proxyAddress?: string | null, oldImplementationAddress?: null, newImplementationAddress?: string | null): AddressSetAsProxyEventFilter;
        "MarketIdSet(string,string)"(oldMarketId?: string | null, newMarketId?: string | null): MarketIdSetEventFilter;
        MarketIdSet(oldMarketId?: string | null, newMarketId?: string | null): MarketIdSetEventFilter;
        "PoolConfiguratorUpdated(address,address)"(oldAddress?: string | null, newAddress?: string | null): PoolConfiguratorUpdatedEventFilter;
        PoolConfiguratorUpdated(oldAddress?: string | null, newAddress?: string | null): PoolConfiguratorUpdatedEventFilter;
        "PoolDataProviderUpdated(address,address)"(oldAddress?: string | null, newAddress?: string | null): PoolDataProviderUpdatedEventFilter;
        PoolDataProviderUpdated(oldAddress?: string | null, newAddress?: string | null): PoolDataProviderUpdatedEventFilter;
        "PoolUpdated(address,address)"(oldAddress?: string | null, newAddress?: string | null): PoolUpdatedEventFilter;
        PoolUpdated(oldAddress?: string | null, newAddress?: string | null): PoolUpdatedEventFilter;
        "PriceOracleSentinelUpdated(address,address)"(oldAddress?: string | null, newAddress?: string | null): PriceOracleSentinelUpdatedEventFilter;
        PriceOracleSentinelUpdated(oldAddress?: string | null, newAddress?: string | null): PriceOracleSentinelUpdatedEventFilter;
        "PriceOracleUpdated(address,address)"(oldAddress?: string | null, newAddress?: string | null): PriceOracleUpdatedEventFilter;
        PriceOracleUpdated(oldAddress?: string | null, newAddress?: string | null): PriceOracleUpdatedEventFilter;
        "ProxyCreated(bytes32,address,address)"(id?: BytesLike | null, proxyAddress?: string | null, implementationAddress?: string | null): ProxyCreatedEventFilter;
        ProxyCreated(id?: BytesLike | null, proxyAddress?: string | null, implementationAddress?: string | null): ProxyCreatedEventFilter;
    };
    estimateGas: {
        getACLAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        getACLManager(overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getMarketId(overrides?: CallOverrides): Promise<BigNumber>;
        getPool(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolConfigurator(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolDataProvider(overrides?: CallOverrides): Promise<BigNumber>;
        getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        getPriceOracleSentinel(overrides?: CallOverrides): Promise<BigNumber>;
        setACLAdmin(newAclAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setACLManager(newAclManager: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setAddressAsProxy(id: BytesLike, newImplementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMarketId(newMarketId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPoolConfiguratorImpl(newPoolConfiguratorImpl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPoolDataProvider(newDataProvider: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPoolImpl(newPoolImpl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPriceOracle(newPriceOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPriceOracleSentinel(newPriceOracleSentinel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getACLAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getACLManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddress(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarketId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolDataProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceOracleSentinel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setACLAdmin(newAclAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setACLManager(newAclManager: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setAddress(id: BytesLike, newAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setAddressAsProxy(id: BytesLike, newImplementationAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMarketId(newMarketId: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPoolConfiguratorImpl(newPoolConfiguratorImpl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPoolDataProvider(newDataProvider: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPoolImpl(newPoolImpl: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPriceOracle(newPriceOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPriceOracleSentinel(newPriceOracleSentinel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
