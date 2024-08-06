import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IMakerAdapterInterface extends utils.Interface {
    functions: {
        "exit(address,uint256)": FunctionFragment;
        "join(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exit" | "join"): FunctionFragment;
    encodeFunctionData(functionFragment: "exit", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "join", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    events: {};
}
export interface IMakerAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMakerAdapterInterface;
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
        exit(usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        join(urn: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    exit(usr: string, val: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    join(urn: string, usr: string, val: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        exit(usr: string, val: BigNumberish, overrides?: CallOverrides): Promise<void>;
        join(urn: string, usr: string, val: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        exit(usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        join(urn: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exit(usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        join(urn: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
