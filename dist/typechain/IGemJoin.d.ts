import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGemJoinInterface extends utils.Interface {
    functions: {
        "cage()": FunctionFragment;
        "dec()": FunctionFragment;
        "deny(address)": FunctionFragment;
        "exit(address,uint256)": FunctionFragment;
        "gem()": FunctionFragment;
        "ilk()": FunctionFragment;
        "join(address,uint256)": FunctionFragment;
        "live()": FunctionFragment;
        "rely(address)": FunctionFragment;
        "vat()": FunctionFragment;
        "wards(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cage" | "dec" | "deny" | "exit" | "gem" | "ilk" | "join" | "live" | "rely" | "vat" | "wards"): FunctionFragment;
    encodeFunctionData(functionFragment: "cage", values?: undefined): string;
    encodeFunctionData(functionFragment: "dec", values?: undefined): string;
    encodeFunctionData(functionFragment: "deny", values: [string]): string;
    encodeFunctionData(functionFragment: "exit", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gem", values?: undefined): string;
    encodeFunctionData(functionFragment: "ilk", values?: undefined): string;
    encodeFunctionData(functionFragment: "join", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "live", values?: undefined): string;
    encodeFunctionData(functionFragment: "rely", values: [string]): string;
    encodeFunctionData(functionFragment: "vat", values?: undefined): string;
    encodeFunctionData(functionFragment: "wards", values: [string]): string;
    decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ilk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
    events: {};
}
export interface IGemJoin extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGemJoinInterface;
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
        cage(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        dec(overrides?: CallOverrides): Promise<[BigNumber]>;
        deny(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exit(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        gem(overrides?: CallOverrides): Promise<[string]>;
        ilk(overrides?: CallOverrides): Promise<[string]>;
        join(usr: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        live(overrides?: CallOverrides): Promise<[BigNumber]>;
        rely(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vat(overrides?: CallOverrides): Promise<[string]>;
        wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    cage(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    dec(overrides?: CallOverrides): Promise<BigNumber>;
    deny(arg0: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exit(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    gem(overrides?: CallOverrides): Promise<string>;
    ilk(overrides?: CallOverrides): Promise<string>;
    join(usr: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    live(overrides?: CallOverrides): Promise<BigNumber>;
    rely(arg0: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vat(overrides?: CallOverrides): Promise<string>;
    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        cage(overrides?: CallOverrides): Promise<void>;
        dec(overrides?: CallOverrides): Promise<BigNumber>;
        deny(arg0: string, overrides?: CallOverrides): Promise<void>;
        exit(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        gem(overrides?: CallOverrides): Promise<string>;
        ilk(overrides?: CallOverrides): Promise<string>;
        join(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        rely(arg0: string, overrides?: CallOverrides): Promise<void>;
        vat(overrides?: CallOverrides): Promise<string>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        cage(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        dec(overrides?: CallOverrides): Promise<BigNumber>;
        deny(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exit(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        gem(overrides?: CallOverrides): Promise<BigNumber>;
        ilk(overrides?: CallOverrides): Promise<BigNumber>;
        join(usr: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        live(overrides?: CallOverrides): Promise<BigNumber>;
        rely(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vat(overrides?: CallOverrides): Promise<BigNumber>;
        wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cage(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        dec(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deny(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exit(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        gem(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ilk(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        join(usr: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        live(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rely(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
