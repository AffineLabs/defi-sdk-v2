import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BaseStrategyInterface extends utils.Interface {
    functions: {
        "asset()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "divest(uint256)": FunctionFragment;
        "invest(uint256)": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "asset" | "balanceOfAsset" | "divest" | "invest" | "sweep" | "totalLockedValue" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "divest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "invest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sweep", values: [string]): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {};
}
export interface BaseStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseStrategyInterface;
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
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOfAsset(overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
    divest(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    invest(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sweep(token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalLockedValue(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        divest(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        invest(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sweep(token: string, overrides?: CallOverrides): Promise<void>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalLockedValue(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}