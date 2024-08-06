import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UltraLRTRouterInterface extends utils.Interface {
    functions: {
        "depositNative(address,address)": FunctionFragment;
        "depositStEth(uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
        "depositWStEth(uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
        "depositWeth(uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
        "governance()": FunctionFragment;
        "initialize(address,address,address,address,address)": FunctionFragment;
        "paused()": FunctionFragment;
        "permit2()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "stEth()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "wStEth()": FunctionFragment;
        "weth()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositNative" | "depositStEth" | "depositWStEth" | "depositWeth" | "governance" | "initialize" | "paused" | "permit2" | "proxiableUUID" | "stEth" | "upgradeTo" | "upgradeToAndCall" | "wStEth" | "weth"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositNative", values: [string, string]): string;
    encodeFunctionData(functionFragment: "depositStEth", values: [
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "depositWStEth", values: [
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "depositWeth", values: [
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit2", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "stEth", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "wStEth", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "depositNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositStEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositWStEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositWeth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wStEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface UltraLRTRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UltraLRTRouterInterface;
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
        depositNative(vault: string, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositWStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositWeth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        initialize(_governance: string, _weth: string, _stEth: string, _wStEth: string, _permit2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        permit2(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        stEth(overrides?: CallOverrides): Promise<[string]>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        wStEth(overrides?: CallOverrides): Promise<[string]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    depositNative(vault: string, to: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositWStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositWeth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    governance(overrides?: CallOverrides): Promise<string>;
    initialize(_governance: string, _weth: string, _stEth: string, _wStEth: string, _permit2: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    permit2(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    stEth(overrides?: CallOverrides): Promise<string>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    wStEth(overrides?: CallOverrides): Promise<string>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        depositNative(vault: string, to: string, overrides?: CallOverrides): Promise<void>;
        depositStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositWStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositWeth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        governance(overrides?: CallOverrides): Promise<string>;
        initialize(_governance: string, _weth: string, _stEth: string, _wStEth: string, _permit2: string, overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        permit2(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        stEth(overrides?: CallOverrides): Promise<string>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        wStEth(overrides?: CallOverrides): Promise<string>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        depositNative(vault: string, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositWStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositWeth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_governance: string, _weth: string, _stEth: string, _wStEth: string, _permit2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        permit2(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        stEth(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        wStEth(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        depositNative(vault: string, to: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositWStEth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositWeth(amount: BigNumberish, vault: string, to: string, nonce: BigNumberish, deadline: BigNumberish, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_governance: string, _weth: string, _stEth: string, _wStEth: string, _permit2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        wStEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
