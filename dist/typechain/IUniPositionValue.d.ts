import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUniPositionValueInterface extends utils.Interface {
    functions: {
        "fees(address,uint256)": FunctionFragment;
        "principal(address,uint256,uint160)": FunctionFragment;
        "total(address,uint256,uint160)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fees" | "principal" | "total"): FunctionFragment;
    encodeFunctionData(functionFragment: "fees", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "principal", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "total", values: [string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "principal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "total", data: BytesLike): Result;
    events: {};
}
export interface IUniPositionValue extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniPositionValueInterface;
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
        fees(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        principal(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        total(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    fees(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    principal(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    total(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount0: BigNumber;
        amount1: BigNumber;
    }>;
    callStatic: {
        fees(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        principal(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        total(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        fees(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        principal(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        total(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        fees(positionManager: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        principal(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        total(positionManager: string, tokenId: BigNumberish, sqrtRatioX96: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
