import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DelegatorFactoryInterface extends utils.Interface {
    functions: {
        "createDelegator(address)": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createDelegator" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "createDelegator", values: [string]): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {};
}
export interface DelegatorFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DelegatorFactoryInterface;
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
        createDelegator(_operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    createDelegator(_operator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createDelegator(_operator: string, overrides?: CallOverrides): Promise<string>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        createDelegator(_operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createDelegator(_operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
