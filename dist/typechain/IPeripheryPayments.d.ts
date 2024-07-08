import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPeripheryPaymentsInterface extends utils.Interface {
    functions: {
        "refundETH()": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "refundETH" | "sweepToken" | "unwrapWETH9"): FunctionFragment;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweepToken", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9", data: BytesLike): Result;
    events: {};
}
export interface IPeripheryPayments extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPeripheryPaymentsInterface;
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
        refundETH(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    refundETH(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        refundETH(overrides?: CallOverrides): Promise<void>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        refundETH(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        refundETH(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
