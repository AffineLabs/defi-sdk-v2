import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IFlashLoanRecipientInterface extends utils.Interface {
    functions: {
        "receiveFlashLoan(address[],uint256[],uint256[],bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "receiveFlashLoan"): FunctionFragment;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [string[], BigNumberish[], BigNumberish[], BytesLike]): string;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    events: {};
}
export interface IFlashLoanRecipient extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFlashLoanRecipientInterface;
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
        receiveFlashLoan(tokens: string[], amounts: BigNumberish[], feeAmounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    receiveFlashLoan(tokens: string[], amounts: BigNumberish[], feeAmounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        receiveFlashLoan(tokens: string[], amounts: BigNumberish[], feeAmounts: BigNumberish[], userData: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        receiveFlashLoan(tokens: string[], amounts: BigNumberish[], feeAmounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        receiveFlashLoan(tokens: string[], amounts: BigNumberish[], feeAmounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
