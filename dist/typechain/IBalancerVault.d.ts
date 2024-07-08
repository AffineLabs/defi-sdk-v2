import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IBalancerVault {
    type BatchSwapStepStruct = {
        poolId: BytesLike;
        assetInIndex: BigNumberish;
        assetOutIndex: BigNumberish;
        amount: BigNumberish;
        userData: BytesLike;
    };
    type BatchSwapStepStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        poolId: string;
        assetInIndex: BigNumber;
        assetOutIndex: BigNumber;
        amount: BigNumber;
        userData: string;
    };
    type FundManagementStruct = {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
    };
    type FundManagementStructOutput = [
        string,
        boolean,
        string,
        boolean
    ] & {
        sender: string;
        fromInternalBalance: boolean;
        recipient: string;
        toInternalBalance: boolean;
    };
    type SingleSwapStruct = {
        poolId: BytesLike;
        kind: BigNumberish;
        assetIn: string;
        assetOut: string;
        amount: BigNumberish;
        userData: BytesLike;
    };
    type SingleSwapStructOutput = [
        string,
        number,
        string,
        string,
        BigNumber,
        string
    ] & {
        poolId: string;
        kind: number;
        assetIn: string;
        assetOut: string;
        amount: BigNumber;
        userData: string;
    };
}
export interface IBalancerVaultInterface extends utils.Interface {
    functions: {
        "flashLoan(address,address[],uint256[],bytes)": FunctionFragment;
        "getPool(bytes32)": FunctionFragment;
        "getPoolTokens(bytes32)": FunctionFragment;
        "queryBatchSwap(uint8,(bytes32,uint256,uint256,uint256,bytes)[],address[],(address,bool,address,bool))": FunctionFragment;
        "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "flashLoan" | "getPool" | "getPoolTokens" | "queryBatchSwap" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "flashLoan", values: [string, string[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "getPool", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPoolTokens", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "queryBatchSwap", values: [
        BigNumberish,
        IBalancerVault.BatchSwapStepStruct[],
        string[],
        IBalancerVault.FundManagementStruct
    ]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        IBalancerVault.SingleSwapStruct,
        IBalancerVault.FundManagementStruct,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryBatchSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IBalancerVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBalancerVaultInterface;
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
        flashLoan(recipient: string, tokens: string[], amounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getPool(poolId: BytesLike, overrides?: CallOverrides): Promise<[string, number]>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber
        ] & {
            tokens: string[];
            balances: BigNumber[];
            lastChangeBlock: BigNumber;
        }>;
        queryBatchSwap(kind: BigNumberish, swaps: IBalancerVault.BatchSwapStepStruct[], assets: string[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    flashLoan(recipient: string, tokens: string[], amounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getPool(poolId: BytesLike, overrides?: CallOverrides): Promise<[string, number]>;
    getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        BigNumber
    ] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
    }>;
    queryBatchSwap(kind: BigNumberish, swaps: IBalancerVault.BatchSwapStepStruct[], assets: string[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        flashLoan(recipient: string, tokens: string[], amounts: BigNumberish[], userData: BytesLike, overrides?: CallOverrides): Promise<void>;
        getPool(poolId: BytesLike, overrides?: CallOverrides): Promise<[string, number]>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber
        ] & {
            tokens: string[];
            balances: BigNumber[];
            lastChangeBlock: BigNumber;
        }>;
        queryBatchSwap(kind: BigNumberish, swaps: IBalancerVault.BatchSwapStepStruct[], assets: string[], funds: IBalancerVault.FundManagementStruct, overrides?: CallOverrides): Promise<BigNumber[]>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        flashLoan(recipient: string, tokens: string[], amounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getPool(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        queryBatchSwap(kind: BigNumberish, swaps: IBalancerVault.BatchSwapStepStruct[], assets: string[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        flashLoan(recipient: string, tokens: string[], amounts: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getPool(poolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queryBatchSwap(kind: BigNumberish, swaps: IBalancerVault.BatchSwapStepStruct[], assets: string[], funds: IBalancerVault.FundManagementStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(singleSwap: IBalancerVault.SingleSwapStruct, funds: IBalancerVault.FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
