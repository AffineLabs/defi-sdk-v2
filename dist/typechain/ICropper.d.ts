import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICropperInterface extends utils.Interface {
    functions: {
        "exit(address,address,uint256)": FunctionFragment;
        "flux(address,address,address,uint256)": FunctionFragment;
        "frob(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "join(address,address,uint256)": FunctionFragment;
        "move(address,address,uint256)": FunctionFragment;
        "proxy(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exit" | "flux" | "frob" | "join" | "move" | "proxy"): FunctionFragment;
    encodeFunctionData(functionFragment: "exit", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flux", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "frob", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "join", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "move", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "proxy", values: [string]): string;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flux", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "frob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxy", data: BytesLike): Result;
    events: {};
}
export interface ICropper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICropperInterface;
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
        exit(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flux(crop: string, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        frob(ilk: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        join(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        move(u: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        proxy(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    exit(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flux(crop: string, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    frob(ilk: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    join(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    move(u: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    proxy(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        exit(crop: string, usr: string, val: BigNumberish, overrides?: CallOverrides): Promise<void>;
        flux(crop: string, src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        frob(ilk: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: CallOverrides): Promise<void>;
        join(crop: string, usr: string, val: BigNumberish, overrides?: CallOverrides): Promise<void>;
        move(u: string, dst: string, rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        proxy(user: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        exit(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flux(crop: string, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        frob(ilk: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        join(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        move(u: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        proxy(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exit(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flux(crop: string, src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        frob(ilk: BytesLike, u: string, v: string, w: string, dink: BigNumberish, dart: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        join(crop: string, usr: string, val: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        move(u: string, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        proxy(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
