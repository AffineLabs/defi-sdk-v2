import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L2WormholeRouterInterface extends utils.Interface {
    functions: {
        "consistencyLevel()": FunctionFragment;
        "governance()": FunctionFragment;
        "nextValidNonce()": FunctionFragment;
        "otherLayerWormholeId()": FunctionFragment;
        "receiveFunds(bytes)": FunctionFragment;
        "receiveTVL(bytes)": FunctionFragment;
        "reportFundTransfer(uint256)": FunctionFragment;
        "requestFunds(uint256)": FunctionFragment;
        "setConsistencyLevel(uint8)": FunctionFragment;
        "vault()": FunctionFragment;
        "wormhole()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "consistencyLevel" | "governance" | "nextValidNonce" | "otherLayerWormholeId" | "receiveFunds" | "receiveTVL" | "reportFundTransfer" | "requestFunds" | "setConsistencyLevel" | "vault" | "wormhole"): FunctionFragment;
    encodeFunctionData(functionFragment: "consistencyLevel", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextValidNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "otherLayerWormholeId", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFunds", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "receiveTVL", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "reportFundTransfer", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "requestFunds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setConsistencyLevel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    encodeFunctionData(functionFragment: "wormhole", values?: undefined): string;
    decodeFunctionResult(functionFragment: "consistencyLevel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextValidNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "otherLayerWormholeId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reportFundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConsistencyLevel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wormhole", data: BytesLike): Result;
    events: {};
}
export interface L2WormholeRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L2WormholeRouterInterface;
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
        consistencyLevel(overrides?: CallOverrides): Promise<[number]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        nextValidNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        otherLayerWormholeId(overrides?: CallOverrides): Promise<[number]>;
        receiveFunds(message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        receiveTVL(message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        reportFundTransfer(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requestFunds(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setConsistencyLevel(_consistencyLevel: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
        wormhole(overrides?: CallOverrides): Promise<[string]>;
    };
    consistencyLevel(overrides?: CallOverrides): Promise<number>;
    governance(overrides?: CallOverrides): Promise<string>;
    nextValidNonce(overrides?: CallOverrides): Promise<BigNumber>;
    otherLayerWormholeId(overrides?: CallOverrides): Promise<number>;
    receiveFunds(message: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    receiveTVL(message: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    reportFundTransfer(amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requestFunds(amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setConsistencyLevel(_consistencyLevel: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    wormhole(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        consistencyLevel(overrides?: CallOverrides): Promise<number>;
        governance(overrides?: CallOverrides): Promise<string>;
        nextValidNonce(overrides?: CallOverrides): Promise<BigNumber>;
        otherLayerWormholeId(overrides?: CallOverrides): Promise<number>;
        receiveFunds(message: BytesLike, overrides?: CallOverrides): Promise<void>;
        receiveTVL(message: BytesLike, overrides?: CallOverrides): Promise<void>;
        reportFundTransfer(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        requestFunds(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setConsistencyLevel(_consistencyLevel: BigNumberish, overrides?: CallOverrides): Promise<void>;
        vault(overrides?: CallOverrides): Promise<string>;
        wormhole(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        consistencyLevel(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        nextValidNonce(overrides?: CallOverrides): Promise<BigNumber>;
        otherLayerWormholeId(overrides?: CallOverrides): Promise<BigNumber>;
        receiveFunds(message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        receiveTVL(message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        reportFundTransfer(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        requestFunds(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        setConsistencyLevel(_consistencyLevel: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
        wormhole(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        consistencyLevel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextValidNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        otherLayerWormholeId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveFunds(message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        receiveTVL(message: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        reportFundTransfer(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requestFunds(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setConsistencyLevel(_consistencyLevel: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
