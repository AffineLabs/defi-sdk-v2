import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type WithdrawalInfoStruct = {
    staker: string;
    delegatedTo: string;
    withdrawer: string;
    nonce: BigNumberish;
    startBlock: BigNumberish;
    strategies: string[];
    shares: BigNumberish[];
};
export declare type WithdrawalInfoStructOutput = [
    string,
    string,
    string,
    BigNumber,
    number,
    string[],
    BigNumber[]
] & {
    staker: string;
    delegatedTo: string;
    withdrawer: string;
    nonce: BigNumber;
    startBlock: number;
    strategies: string[];
    shares: BigNumber[];
};
export interface EigenDelegatorInterface extends utils.Interface {
    functions: {
        "DELEGATION_MANAGER()": FunctionFragment;
        "STAKED_ETH_STRATEGY()": FunctionFragment;
        "STRATEGY_MANAGER()": FunctionFragment;
        "asset()": FunctionFragment;
        "completeExternalWithdrawalRequest((address,address,address,uint256,uint32,address[],uint256[])[])": FunctionFragment;
        "completeWithdrawalRequest((address,address,address,uint256,uint32,address[],uint256[])[])": FunctionFragment;
        "currentOperator()": FunctionFragment;
        "delegate(uint256)": FunctionFragment;
        "governance()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isDelegated()": FunctionFragment;
        "queuedAssets()": FunctionFragment;
        "queuedShares()": FunctionFragment;
        "requestWithdrawal(uint256)": FunctionFragment;
        "stETH()": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "vault()": FunctionFragment;
        "withdraw()": FunctionFragment;
        "withdrawableAssets()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DELEGATION_MANAGER" | "STAKED_ETH_STRATEGY" | "STRATEGY_MANAGER" | "asset" | "completeExternalWithdrawalRequest" | "completeWithdrawalRequest" | "currentOperator" | "delegate" | "governance" | "initialize" | "isDelegated" | "queuedAssets" | "queuedShares" | "requestWithdrawal" | "stETH" | "totalLockedValue" | "vault" | "withdraw" | "withdrawableAssets"): FunctionFragment;
    encodeFunctionData(functionFragment: "DELEGATION_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "STAKED_ETH_STRATEGY", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGY_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "completeExternalWithdrawalRequest", values: [WithdrawalInfoStruct[]]): string;
    encodeFunctionData(functionFragment: "completeWithdrawalRequest", values: [WithdrawalInfoStruct[]]): string;
    encodeFunctionData(functionFragment: "currentOperator", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isDelegated", values?: undefined): string;
    encodeFunctionData(functionFragment: "queuedAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "queuedShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestWithdrawal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawableAssets", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DELEGATION_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKED_ETH_STRATEGY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGY_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "completeExternalWithdrawalRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "completeWithdrawalRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableAssets", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export declare type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface EigenDelegator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EigenDelegatorInterface;
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
        DELEGATION_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        STAKED_ETH_STRATEGY(overrides?: CallOverrides): Promise<[string]>;
        STRATEGY_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        completeExternalWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        currentOperator(overrides?: CallOverrides): Promise<[string]>;
        delegate(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        initialize(_vault: string, _operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isDelegated(overrides?: CallOverrides): Promise<[boolean]>;
        queuedAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        queuedShares(overrides?: CallOverrides): Promise<[BigNumber]>;
        requestWithdrawal(assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stETH(overrides?: CallOverrides): Promise<[string]>;
        totalLockedValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        vault(overrides?: CallOverrides): Promise<[string]>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawableAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DELEGATION_MANAGER(overrides?: CallOverrides): Promise<string>;
    STAKED_ETH_STRATEGY(overrides?: CallOverrides): Promise<string>;
    STRATEGY_MANAGER(overrides?: CallOverrides): Promise<string>;
    asset(overrides?: CallOverrides): Promise<string>;
    completeExternalWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    currentOperator(overrides?: CallOverrides): Promise<string>;
    delegate(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    governance(overrides?: CallOverrides): Promise<string>;
    initialize(_vault: string, _operator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isDelegated(overrides?: CallOverrides): Promise<boolean>;
    queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
    queuedShares(overrides?: CallOverrides): Promise<BigNumber>;
    requestWithdrawal(assets: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stETH(overrides?: CallOverrides): Promise<string>;
    totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
    vault(overrides?: CallOverrides): Promise<string>;
    withdraw(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DELEGATION_MANAGER(overrides?: CallOverrides): Promise<string>;
        STAKED_ETH_STRATEGY(overrides?: CallOverrides): Promise<string>;
        STRATEGY_MANAGER(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        completeExternalWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: CallOverrides): Promise<void>;
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: CallOverrides): Promise<void>;
        currentOperator(overrides?: CallOverrides): Promise<string>;
        delegate(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        governance(overrides?: CallOverrides): Promise<string>;
        initialize(_vault: string, _operator: string, overrides?: CallOverrides): Promise<void>;
        isDelegated(overrides?: CallOverrides): Promise<boolean>;
        queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
        queuedShares(overrides?: CallOverrides): Promise<BigNumber>;
        requestWithdrawal(assets: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stETH(overrides?: CallOverrides): Promise<string>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
    };
    estimateGas: {
        DELEGATION_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        STAKED_ETH_STRATEGY(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGY_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        completeExternalWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        currentOperator(overrides?: CallOverrides): Promise<BigNumber>;
        delegate(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_vault: string, _operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isDelegated(overrides?: CallOverrides): Promise<BigNumber>;
        queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;
        queuedShares(overrides?: CallOverrides): Promise<BigNumber>;
        requestWithdrawal(assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stETH(overrides?: CallOverrides): Promise<BigNumber>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DELEGATION_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKED_ETH_STRATEGY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGY_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        completeExternalWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        completeWithdrawalRequest(withdrawalInfo: WithdrawalInfoStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        currentOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegate(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_vault: string, _operator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isDelegated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queuedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queuedShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requestWithdrawal(assets: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawableAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
