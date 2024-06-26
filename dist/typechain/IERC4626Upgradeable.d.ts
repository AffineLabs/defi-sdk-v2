import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC4626UpgradeableInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "convertToAssets(uint256)": FunctionFragment;
        "convertToShares(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "maxDeposit(address)": FunctionFragment;
        "maxMint(address)": FunctionFragment;
        "maxRedeem(address)": FunctionFragment;
        "maxWithdraw(address)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "previewDeposit(uint256)": FunctionFragment;
        "previewMint(uint256)": FunctionFragment;
        "previewRedeem(uint256)": FunctionFragment;
        "previewWithdraw(uint256)": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalAssets()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "deposit" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [string]): string;
    encodeFunctionData(functionFragment: "maxMint", values: [string]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [string]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [string]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, string, string]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
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
export interface DepositEventObject {
    caller: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
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
export interface WithdrawEventObject {
    caller: string;
    receiver: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface IERC4626Upgradeable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC4626UpgradeableInterface;
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
        asset(overrides?: CallOverrides): Promise<[string] & {
            assetTokenAddress: string;
        }>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            shares: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        maxDeposit(receiver: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxAssets: BigNumber;
        }>;
        maxMint(receiver: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxShares: BigNumber;
        }>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxShares: BigNumber;
        }>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxAssets: BigNumber;
        }>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            shares: BigNumber;
        }>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            shares: BigNumber;
        }>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalAssets(overrides?: CallOverrides): Promise<[BigNumber] & {
            totalManagedAssets: BigNumber;
        }>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    maxDeposit(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxMint(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit(assets: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "Deposit(address,address,uint256,uint256)"(caller?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(caller?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(caller?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(caller?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
    };
    estimateGas: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        maxDeposit(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
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
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        maxDeposit(receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMint(receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
