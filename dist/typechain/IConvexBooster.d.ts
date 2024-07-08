import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IConvexBooster {
    type PoolInfoStruct = {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
    };
    type PoolInfoStructOutput = [
        string,
        string,
        string,
        string,
        string,
        boolean
    ] & {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
    };
}
export interface IConvexBoosterInterface extends utils.Interface {
    functions: {
        "crv()": FunctionFragment;
        "depositAll(uint256,bool)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "crv" | "depositAll" | "poolInfo" | "poolLength"): FunctionFragment;
    encodeFunctionData(functionFragment: "crv", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositAll", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    events: {};
}
export interface IConvexBooster extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConvexBoosterInterface;
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
        crv(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        poolInfo(_pid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        poolLength(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    crv(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    poolInfo(_pid: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    poolLength(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        crv(overrides?: CallOverrides): Promise<string>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: CallOverrides): Promise<boolean>;
        poolInfo(_pid: BigNumberish, overrides?: CallOverrides): Promise<IConvexBooster.PoolInfoStructOutput>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        crv(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        poolInfo(_pid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        poolLength(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        crv(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        poolInfo(_pid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        poolLength(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
