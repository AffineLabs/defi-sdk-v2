import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICTokenInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfUnderlying(address)": FunctionFragment;
        "borrow(uint256)": FunctionFragment;
        "borrowBalanceCurrent(address)": FunctionFragment;
        "borrowRatePerBlock()": FunctionFragment;
        "exchangeRateCurrent()": FunctionFragment;
        "mint()": FunctionFragment;
        "mint(uint256)": FunctionFragment;
        "redeemUnderlying(uint256)": FunctionFragment;
        "repayBorrow(uint256)": FunctionFragment;
        "repayBorrow()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "balanceOfUnderlying" | "borrow" | "borrowBalanceCurrent" | "borrowRatePerBlock" | "exchangeRateCurrent" | "mint()" | "mint(uint256)" | "redeemUnderlying" | "repayBorrow(uint256)" | "repayBorrow()" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [string]): string;
    encodeFunctionData(functionFragment: "borrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowBalanceCurrent", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeRateCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint()", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrow(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrow()", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalanceCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrow(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrow()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ICToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICTokenInterface;
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
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfUnderlying(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrow(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowBalanceCurrent(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mint()"(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mint(uint256)"(underlying: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemUnderlying(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "repayBorrow(uint256)"(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "repayBorrow()"(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfUnderlying(arg0: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrow(arg0: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowBalanceCurrent(arg0: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    exchangeRateCurrent(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mint()"(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mint(uint256)"(underlying: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemUnderlying(arg0: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "repayBorrow(uint256)"(arg0: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "repayBorrow()"(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        "mint()"(overrides?: CallOverrides): Promise<void>;
        "mint(uint256)"(underlying: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemUnderlying(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "repayBorrow(uint256)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "repayBorrow()"(overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrow(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowBalanceCurrent(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mint()"(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mint(uint256)"(underlying: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemUnderlying(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "repayBorrow(uint256)"(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "repayBorrow()"(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnderlying(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrow(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowBalanceCurrent(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mint()"(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mint(uint256)"(underlying: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemUnderlying(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "repayBorrow(uint256)"(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "repayBorrow()"(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
