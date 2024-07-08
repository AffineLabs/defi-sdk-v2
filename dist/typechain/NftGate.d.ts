import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface NftGateInterface extends utils.Interface {
    functions: {
        "accessNft()": FunctionFragment;
        "governance()": FunctionFragment;
        "setAccessNft(address)": FunctionFragment;
        "setNftProperties(bool,bool)": FunctionFragment;
        "setWithdrawalFeeWithNft(uint16)": FunctionFragment;
        "withdrawalFeeWithNft()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessNft" | "governance" | "setAccessNft" | "setNftProperties" | "setWithdrawalFeeWithNft" | "withdrawalFeeWithNft"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessNft", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAccessNft", values: [string]): string;
    encodeFunctionData(functionFragment: "setNftProperties", values: [boolean, boolean]): string;
    encodeFunctionData(functionFragment: "setWithdrawalFeeWithNft", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawalFeeWithNft", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accessNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccessNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNftProperties", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawalFeeWithNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalFeeWithNft", data: BytesLike): Result;
    events: {};
}
export interface NftGate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NftGateInterface;
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
        accessNft(overrides?: CallOverrides): Promise<[string]>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        setAccessNft(_accessNft: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setNftProperties(_needNftToDeposit: boolean, _nftDiscountActive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setWithdrawalFeeWithNft(_newFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<[number]>;
    };
    accessNft(overrides?: CallOverrides): Promise<string>;
    governance(overrides?: CallOverrides): Promise<string>;
    setAccessNft(_accessNft: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setNftProperties(_needNftToDeposit: boolean, _nftDiscountActive: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setWithdrawalFeeWithNft(_newFee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawalFeeWithNft(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        accessNft(overrides?: CallOverrides): Promise<string>;
        governance(overrides?: CallOverrides): Promise<string>;
        setAccessNft(_accessNft: string, overrides?: CallOverrides): Promise<void>;
        setNftProperties(_needNftToDeposit: boolean, _nftDiscountActive: boolean, overrides?: CallOverrides): Promise<void>;
        setWithdrawalFeeWithNft(_newFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        accessNft(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        setAccessNft(_accessNft: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setNftProperties(_needNftToDeposit: boolean, _nftDiscountActive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setWithdrawalFeeWithNft(_newFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accessNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAccessNft(_accessNft: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setNftProperties(_needNftToDeposit: boolean, _nftDiscountActive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setWithdrawalFeeWithNft(_newFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawalFeeWithNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
