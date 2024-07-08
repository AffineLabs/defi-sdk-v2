import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IWormhole {
    type SignatureStruct = {
        r: BytesLike;
        s: BytesLike;
        v: BigNumberish;
        guardianIndex: BigNumberish;
    };
    type SignatureStructOutput = [string, string, number, number] & {
        r: string;
        s: string;
        v: number;
        guardianIndex: number;
    };
    type VMStruct = {
        version: BigNumberish;
        timestamp: BigNumberish;
        nonce: BigNumberish;
        emitterChainId: BigNumberish;
        emitterAddress: BytesLike;
        sequence: BigNumberish;
        consistencyLevel: BigNumberish;
        payload: BytesLike;
        guardianSetIndex: BigNumberish;
        signatures: IWormhole.SignatureStruct[];
        hash: BytesLike;
    };
    type VMStructOutput = [
        number,
        number,
        number,
        number,
        string,
        BigNumber,
        number,
        string,
        number,
        IWormhole.SignatureStructOutput[],
        string
    ] & {
        version: number;
        timestamp: number;
        nonce: number;
        emitterChainId: number;
        emitterAddress: string;
        sequence: BigNumber;
        consistencyLevel: number;
        payload: string;
        guardianSetIndex: number;
        signatures: IWormhole.SignatureStructOutput[];
        hash: string;
    };
}
export interface IWormholeInterface extends utils.Interface {
    functions: {
        "nextSequence(address)": FunctionFragment;
        "parseAndVerifyVM(bytes)": FunctionFragment;
        "publishMessage(uint32,bytes,uint8)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "nextSequence" | "parseAndVerifyVM" | "publishMessage"): FunctionFragment;
    encodeFunctionData(functionFragment: "nextSequence", values: [string]): string;
    encodeFunctionData(functionFragment: "parseAndVerifyVM", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "publishMessage", values: [BigNumberish, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "nextSequence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseAndVerifyVM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishMessage", data: BytesLike): Result;
    events: {};
}
export interface IWormhole extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IWormholeInterface;
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
        nextSequence(emitter: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        parseAndVerifyVM(encodedVM: BytesLike, overrides?: CallOverrides): Promise<[
            IWormhole.VMStructOutput,
            boolean,
            string
        ] & {
            vm: IWormhole.VMStructOutput;
            valid: boolean;
            reason: string;
        }>;
        publishMessage(nonce: BigNumberish, payload: BytesLike, consistencyLevel: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    nextSequence(emitter: string, overrides?: CallOverrides): Promise<BigNumber>;
    parseAndVerifyVM(encodedVM: BytesLike, overrides?: CallOverrides): Promise<[
        IWormhole.VMStructOutput,
        boolean,
        string
    ] & {
        vm: IWormhole.VMStructOutput;
        valid: boolean;
        reason: string;
    }>;
    publishMessage(nonce: BigNumberish, payload: BytesLike, consistencyLevel: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        nextSequence(emitter: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseAndVerifyVM(encodedVM: BytesLike, overrides?: CallOverrides): Promise<[
            IWormhole.VMStructOutput,
            boolean,
            string
        ] & {
            vm: IWormhole.VMStructOutput;
            valid: boolean;
            reason: string;
        }>;
        publishMessage(nonce: BigNumberish, payload: BytesLike, consistencyLevel: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        nextSequence(emitter: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseAndVerifyVM(encodedVM: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        publishMessage(nonce: BigNumberish, payload: BytesLike, consistencyLevel: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        nextSequence(emitter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseAndVerifyVM(encodedVM: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publishMessage(nonce: BigNumberish, payload: BytesLike, consistencyLevel: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
