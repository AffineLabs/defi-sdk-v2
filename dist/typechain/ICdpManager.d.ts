import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICdpManagerInterface extends utils.Interface {
    functions: {
        "cdpAllow(uint256,address,uint256)": FunctionFragment;
        "cdpCan(address,uint256,address)": FunctionFragment;
        "cdpi()": FunctionFragment;
        "count(address)": FunctionFragment;
        "enter(address,uint256)": FunctionFragment;
        "first(address)": FunctionFragment;
        "flux(bytes32,uint256,address,uint256)": FunctionFragment;
        "flux(uint256,address,uint256)": FunctionFragment;
        "frob(uint256,int256,int256)": FunctionFragment;
        "give(uint256,address)": FunctionFragment;
        "ilks(uint256)": FunctionFragment;
        "last(address)": FunctionFragment;
        "list(uint256)": FunctionFragment;
        "move(uint256,address,uint256)": FunctionFragment;
        "open(bytes32,address)": FunctionFragment;
        "owns(uint256)": FunctionFragment;
        "quit(uint256,address)": FunctionFragment;
        "shift(uint256,uint256)": FunctionFragment;
        "urnAllow(address,uint256)": FunctionFragment;
        "urnCan(address,address)": FunctionFragment;
        "urns(uint256)": FunctionFragment;
        "vat()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cdpAllow" | "cdpCan" | "cdpi" | "count" | "enter" | "first" | "flux(bytes32,uint256,address,uint256)" | "flux(uint256,address,uint256)" | "frob" | "give" | "ilks" | "last" | "list" | "move" | "open" | "owns" | "quit" | "shift" | "urnAllow" | "urnCan" | "urns" | "vat"): FunctionFragment;
    encodeFunctionData(functionFragment: "cdpAllow", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "cdpCan", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "cdpi", values?: undefined): string;
    encodeFunctionData(functionFragment: "count", values: [string]): string;
    encodeFunctionData(functionFragment: "enter", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "first", values: [string]): string;
    encodeFunctionData(functionFragment: "flux(bytes32,uint256,address,uint256)", values: [BytesLike, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "flux(uint256,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "frob", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "give", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "ilks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "last", values: [string]): string;
    encodeFunctionData(functionFragment: "list", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "move", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "open", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "owns", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quit", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "shift", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "urnAllow", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "urnCan", values: [string, string]): string;
    encodeFunctionData(functionFragment: "urns", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vat", values?: undefined): string;
    decodeFunctionResult(functionFragment: "cdpAllow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cdpCan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cdpi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "first", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flux(bytes32,uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flux(uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "frob", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "give", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ilks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shift", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "urnAllow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "urnCan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "urns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
    events: {};
}
export interface ICdpManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICdpManagerInterface;
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
        cdpAllow(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cdpCan(arg0: string, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cdpi(overrides?: CallOverrides): Promise<[BigNumber]>;
        count(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        enter(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        first(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "flux(bytes32,uint256,address,uint256)"(arg0: BytesLike, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "flux(uint256,address,uint256)"(cdp: BigNumberish, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        frob(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ilks(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        last(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        move(cdp: BigNumberish, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owns(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        quit(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        shift(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        urnAllow(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        urnCan(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        urns(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        vat(overrides?: CallOverrides): Promise<[string]>;
    };
    cdpAllow(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cdpCan(arg0: string, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cdpi(overrides?: CallOverrides): Promise<BigNumber>;
    count(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    enter(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    first(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    "flux(bytes32,uint256,address,uint256)"(arg0: BytesLike, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "flux(uint256,address,uint256)"(cdp: BigNumberish, dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    frob(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ilks(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    last(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    list(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    move(cdp: BigNumberish, dst: string, rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owns(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    quit(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    shift(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    urnAllow(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    urnCan(arg0: string, arg1: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    urns(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    vat(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        cdpAllow(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cdpCan(arg0: string, arg1: BigNumberish, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        cdpi(overrides?: CallOverrides): Promise<BigNumber>;
        count(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        enter(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        first(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        "flux(bytes32,uint256,address,uint256)"(arg0: BytesLike, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "flux(uint256,address,uint256)"(cdp: BigNumberish, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        frob(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
        give(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<void>;
        ilks(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        last(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        move(cdp: BigNumberish, dst: string, rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        open(arg0: BytesLike, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        owns(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        quit(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<void>;
        shift(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        urnAllow(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        urnCan(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        urns(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        vat(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        cdpAllow(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cdpCan(arg0: string, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cdpi(overrides?: CallOverrides): Promise<BigNumber>;
        count(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        enter(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        first(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        "flux(bytes32,uint256,address,uint256)"(arg0: BytesLike, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "flux(uint256,address,uint256)"(cdp: BigNumberish, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        frob(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ilks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        last(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        move(cdp: BigNumberish, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owns(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quit(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        shift(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        urnAllow(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        urnCan(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        urns(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        vat(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cdpAllow(arg0: BigNumberish, arg1: string, arg2: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cdpCan(arg0: string, arg1: BigNumberish, arg2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cdpi(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        count(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enter(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        first(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "flux(bytes32,uint256,address,uint256)"(arg0: BytesLike, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "flux(uint256,address,uint256)"(cdp: BigNumberish, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        frob(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        give(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ilks(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        last(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        list(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        move(cdp: BigNumberish, dst: string, rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        open(arg0: BytesLike, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owns(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quit(arg0: BigNumberish, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        shift(arg0: BigNumberish, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        urnAllow(arg0: string, arg1: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        urnCan(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        urns(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vat(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
