import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUniswapV2FactoryInterface extends utils.Interface {
    functions: {
        "allPairs(uint256)": FunctionFragment;
        "allPairsLength()": FunctionFragment;
        "createPair(address,address)": FunctionFragment;
        "feeTo()": FunctionFragment;
        "feeToSetter()": FunctionFragment;
        "getPair(address,address)": FunctionFragment;
        "setFeeTo(address)": FunctionFragment;
        "setFeeToSetter(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allPairs" | "allPairsLength" | "createPair" | "feeTo" | "feeToSetter" | "getPair" | "setFeeTo" | "setFeeToSetter"): FunctionFragment;
    encodeFunctionData(functionFragment: "allPairs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allPairsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "createPair", values: [string, string]): string;
    encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeToSetter", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPair", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "setFeeToSetter", values: [string]): string;
    decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPairsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeToSetter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeToSetter", data: BytesLike): Result;
    events: {
        "PairCreated(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
}
export interface PairCreatedEventObject {
    token0: string;
    token1: string;
    pair: string;
    arg3: BigNumber;
}
export declare type PairCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], PairCreatedEventObject>;
export declare type PairCreatedEventFilter = TypedEventFilter<PairCreatedEvent>;
export interface IUniswapV2Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV2FactoryInterface;
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
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            pair: string;
        }>;
        allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        feeTo(overrides?: CallOverrides): Promise<[string]>;
        feeToSetter(overrides?: CallOverrides): Promise<[string]>;
        getPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string] & {
            pair: string;
        }>;
        setFeeTo(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setFeeToSetter(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;
    createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    feeTo(overrides?: CallOverrides): Promise<string>;
    feeToSetter(overrides?: CallOverrides): Promise<string>;
    getPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;
    setFeeTo(arg0: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setFeeToSetter(arg0: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;
        createPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;
        feeTo(overrides?: CallOverrides): Promise<string>;
        feeToSetter(overrides?: CallOverrides): Promise<string>;
        getPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<string>;
        setFeeTo(arg0: string, overrides?: CallOverrides): Promise<void>;
        setFeeToSetter(arg0: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PairCreated(address,address,address,uint256)"(token0?: string | null, token1?: string | null, pair?: null, arg3?: null): PairCreatedEventFilter;
        PairCreated(token0?: string | null, token1?: string | null, pair?: null, arg3?: null): PairCreatedEventFilter;
    };
    estimateGas: {
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;
        createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        feeTo(overrides?: CallOverrides): Promise<BigNumber>;
        feeToSetter(overrides?: CallOverrides): Promise<BigNumber>;
        getPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<BigNumber>;
        setFeeTo(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setFeeToSetter(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createPair(tokenA: string, tokenB: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPair(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFeeTo(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setFeeToSetter(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
