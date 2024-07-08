import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICollateralInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "debt(address,address)": FunctionFragment;
        "issueDebt(address,uint256)": FunctionFragment;
        "issuerDebt(address)": FunctionFragment;
        "issuerRepaidDebt(address)": FunctionFragment;
        "recipientDebt(address)": FunctionFragment;
        "recipientRepaidDebt(address)": FunctionFragment;
        "repaidDebt(address,address)": FunctionFragment;
        "totalDebt()": FunctionFragment;
        "totalRepaidDebt()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "asset" | "balanceOf" | "debt" | "issueDebt" | "issuerDebt" | "issuerRepaidDebt" | "recipientDebt" | "recipientRepaidDebt" | "repaidDebt" | "totalDebt" | "totalRepaidDebt" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "debt", values: [string, string]): string;
    encodeFunctionData(functionFragment: "issueDebt", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "issuerDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "issuerRepaidDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "recipientDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "recipientRepaidDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "repaidDebt", values: [string, string]): string;
    encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalRepaidDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "issueDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "issuerDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "issuerRepaidDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientRepaidDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repaidDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalRepaidDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "IssueDebt(address,address,uint256)": EventFragment;
        "RepayDebt(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IssueDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RepayDebt"): EventFragment;
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
export interface IssueDebtEventObject {
    issuer: string;
    recipient: string;
    debtIssued: BigNumber;
}
export type IssueDebtEvent = TypedEvent<[
    string,
    string,
    BigNumber
], IssueDebtEventObject>;
export type IssueDebtEventFilter = TypedEventFilter<IssueDebtEvent>;
export interface RepayDebtEventObject {
    issuer: string;
    recipient: string;
    debtRepaid: BigNumber;
}
export type RepayDebtEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RepayDebtEventObject>;
export type RepayDebtEventFilter = TypedEventFilter<RepayDebtEvent>;
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
export interface ICollateral extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICollateralInterface;
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
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        debt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        issueDebt(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        issuerDebt(issuer: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        issuerRepaidDebt(issuer: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        recipientDebt(recipient: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        recipientRepaidDebt(recipient: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        repaidDebt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalRepaidDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
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
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    debt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
    issueDebt(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    issuerDebt(issuer: string, overrides?: CallOverrides): Promise<BigNumber>;
    issuerRepaidDebt(issuer: string, overrides?: CallOverrides): Promise<BigNumber>;
    recipientDebt(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
    recipientRepaidDebt(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
    repaidDebt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
    totalRepaidDebt(overrides?: CallOverrides): Promise<BigNumber>;
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
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        debt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        issueDebt(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        issuerDebt(issuer: string, overrides?: CallOverrides): Promise<BigNumber>;
        issuerRepaidDebt(issuer: string, overrides?: CallOverrides): Promise<BigNumber>;
        recipientDebt(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        recipientRepaidDebt(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        repaidDebt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        totalRepaidDebt(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "IssueDebt(address,address,uint256)"(issuer?: string | null, recipient?: string | null, debtIssued?: null): IssueDebtEventFilter;
        IssueDebt(issuer?: string | null, recipient?: string | null, debtIssued?: null): IssueDebtEventFilter;
        "RepayDebt(address,address,uint256)"(issuer?: string | null, recipient?: string | null, debtRepaid?: null): RepayDebtEventFilter;
        RepayDebt(issuer?: string | null, recipient?: string | null, debtRepaid?: null): RepayDebtEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        debt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        issueDebt(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        issuerDebt(issuer: string, overrides?: CallOverrides): Promise<BigNumber>;
        issuerRepaidDebt(issuer: string, overrides?: CallOverrides): Promise<BigNumber>;
        recipientDebt(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        recipientRepaidDebt(recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        repaidDebt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        totalRepaidDebt(overrides?: CallOverrides): Promise<BigNumber>;
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
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        debt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        issueDebt(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        issuerDebt(issuer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        issuerRepaidDebt(issuer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientDebt(recipient: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientRepaidDebt(recipient: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        repaidDebt(issuer: string, recipient: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalRepaidDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
