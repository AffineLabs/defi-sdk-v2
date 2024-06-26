import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface EmergencyWithdrawalQueueInterface extends utils.Interface {
    functions: {
        "dequeue()": FunctionFragment;
        "dequeueBatch(uint256)": FunctionFragment;
        "enqueue(address,address,uint256)": FunctionFragment;
        "headPtr()": FunctionFragment;
        "ownerToDebt(address)": FunctionFragment;
        "shareDebt()": FunctionFragment;
        "size()": FunctionFragment;
        "tailPtr()": FunctionFragment;
        "totalDebt()": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "dequeue" | "dequeueBatch" | "enqueue" | "headPtr" | "ownerToDebt" | "shareDebt" | "size" | "tailPtr" | "totalDebt" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "dequeue", values?: undefined): string;
    encodeFunctionData(functionFragment: "dequeueBatch", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "enqueue", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "headPtr", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerToDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "shareDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "size", values?: undefined): string;
    encodeFunctionData(functionFragment: "tailPtr", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "dequeue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dequeueBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enqueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "headPtr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerToDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shareDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "size", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tailPtr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {
        "Pop(uint256,address,address,uint256)": EventFragment;
        "Push(uint256,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Pop"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Push"): EventFragment;
}
export interface PopEventObject {
    pos: BigNumber;
    owner: string;
    receiver: string;
    shares: BigNumber;
}
export type PopEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], PopEventObject>;
export type PopEventFilter = TypedEventFilter<PopEvent>;
export interface PushEventObject {
    pos: BigNumber;
    owner: string;
    receiver: string;
    shares: BigNumber;
}
export type PushEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], PushEventObject>;
export type PushEventFilter = TypedEventFilter<PushEvent>;
export interface EmergencyWithdrawalQueue extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EmergencyWithdrawalQueueInterface;
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
        dequeue(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        dequeueBatch(batchSize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        enqueue(owner: string, receiver: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        headPtr(overrides?: CallOverrides): Promise<[BigNumber]>;
        ownerToDebt(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        shareDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
        size(overrides?: CallOverrides): Promise<[BigNumber]>;
        tailPtr(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    dequeue(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    dequeueBatch(batchSize: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    enqueue(owner: string, receiver: string, shares: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    headPtr(overrides?: CallOverrides): Promise<BigNumber>;
    ownerToDebt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    shareDebt(overrides?: CallOverrides): Promise<BigNumber>;
    size(overrides?: CallOverrides): Promise<BigNumber>;
    tailPtr(overrides?: CallOverrides): Promise<BigNumber>;
    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        dequeue(overrides?: CallOverrides): Promise<void>;
        dequeueBatch(batchSize: BigNumberish, overrides?: CallOverrides): Promise<void>;
        enqueue(owner: string, receiver: string, shares: BigNumberish, overrides?: CallOverrides): Promise<void>;
        headPtr(overrides?: CallOverrides): Promise<BigNumber>;
        ownerToDebt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        shareDebt(overrides?: CallOverrides): Promise<BigNumber>;
        size(overrides?: CallOverrides): Promise<BigNumber>;
        tailPtr(overrides?: CallOverrides): Promise<BigNumber>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Pop(uint256,address,address,uint256)"(pos?: BigNumberish | null, owner?: string | null, receiver?: string | null, shares?: null): PopEventFilter;
        Pop(pos?: BigNumberish | null, owner?: string | null, receiver?: string | null, shares?: null): PopEventFilter;
        "Push(uint256,address,address,uint256)"(pos?: BigNumberish | null, owner?: string | null, receiver?: string | null, shares?: null): PushEventFilter;
        Push(pos?: BigNumberish | null, owner?: string | null, receiver?: string | null, shares?: null): PushEventFilter;
    };
    estimateGas: {
        dequeue(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        dequeueBatch(batchSize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        enqueue(owner: string, receiver: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        headPtr(overrides?: CallOverrides): Promise<BigNumber>;
        ownerToDebt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        shareDebt(overrides?: CallOverrides): Promise<BigNumber>;
        size(overrides?: CallOverrides): Promise<BigNumber>;
        tailPtr(overrides?: CallOverrides): Promise<BigNumber>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        dequeue(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        dequeueBatch(batchSize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        enqueue(owner: string, receiver: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        headPtr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerToDebt(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shareDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        size(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tailPtr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
