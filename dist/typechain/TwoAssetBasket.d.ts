import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace DetailedShare {
    type NumberStruct = {
        num: BigNumberish;
        decimals: BigNumberish;
    };
    type NumberStructOutput = [BigNumber, number] & {
        num: BigNumber;
        decimals: number;
    };
}
export interface TwoAssetBasketInterface extends utils.Interface {
    functions: {
        "ROUTER()": FunctionFragment;
        "_getBuySplits(uint256)": FunctionFragment;
        "_getSellSplits(uint256)": FunctionFragment;
        "_valueOfToken(address,uint256)": FunctionFragment;
        "_valueOfVaultComponents()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "btc()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "deposit(uint256,address,uint256)": FunctionFragment;
        "detailedPrice()": FunctionFragment;
        "detailedTVL()": FunctionFragment;
        "detailedTotalSupply()": FunctionFragment;
        "governance()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,address,address[2],uint256[2],address[3])": FunctionFragment;
        "name()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "ratios(uint256)": FunctionFragment;
        "redeem(uint256,address,address,uint256)": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "setTrustedForwarder(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tearDown(bytes)": FunctionFragment;
        "tokenToOracle(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "trustedForwarder()": FunctionFragment;
        "unpause()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "valueOfVault()": FunctionFragment;
        "weth()": FunctionFragment;
        "withdraw(uint256,address,address,uint256)": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ROUTER" | "_getBuySplits" | "_getSellSplits" | "_valueOfToken" | "_valueOfVaultComponents" | "allowance" | "approve" | "asset" | "balanceOf" | "btc" | "decimals" | "decreaseAllowance" | "deposit(uint256,address)" | "deposit(uint256,address,uint256)" | "detailedPrice" | "detailedTVL" | "detailedTotalSupply" | "governance" | "increaseAllowance" | "initialize" | "name" | "pause" | "paused" | "proxiableUUID" | "ratios" | "redeem(uint256,address,address,uint256)" | "redeem(uint256,address,address)" | "setTrustedForwarder" | "symbol" | "tearDown" | "tokenToOracle" | "totalSupply" | "transfer" | "transferFrom" | "trustedForwarder" | "unpause" | "upgradeTo" | "upgradeToAndCall" | "valueOfVault" | "weth" | "withdraw(uint256,address,address,uint256)" | "withdraw(uint256,address,address)"): FunctionFragment;
    encodeFunctionData(functionFragment: "ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getBuySplits", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_getSellSplits", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_valueOfToken", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_valueOfVaultComponents", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "btc", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit(uint256,address)", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deposit(uint256,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "detailedPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "detailedTVL", values?: undefined): string;
    encodeFunctionData(functionFragment: "detailedTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        [
            string,
            string
        ],
        [
            BigNumberish,
            BigNumberish
        ],
        [
            string,
            string,
            string
        ]
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "ratios", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem(uint256,address,address,uint256)", values: [BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem(uint256,address,address)", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "setTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tearDown", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenToOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "trustedForwarder", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "valueOfVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw(uint256,address,address,uint256)", values: [BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw(uint256,address,address)", values: [BigNumberish, string, string]): string;
    decodeFunctionResult(functionFragment: "ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getBuySplits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getSellSplits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_valueOfToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_valueOfVaultComponents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "btc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit(uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit(uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detailedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detailedTVL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "detailedTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ratios", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem(uint256,address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem(uint256,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tearDown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "valueOfVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw(uint256,address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw(uint256,address,address)", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Paused(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export declare type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export declare type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface DepositEventObject {
    caller: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export declare type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export declare type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface InitializedEventObject {
    version: number;
}
export declare type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface WithdrawEventObject {
    caller: string;
    receiver: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export declare type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface TwoAssetBasket extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TwoAssetBasketInterface;
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
        ROUTER(overrides?: CallOverrides): Promise<[string]>;
        _getBuySplits(assets: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            assetToBtc: BigNumber;
            assetToEth: BigNumber;
        }>;
        _getSellSplits(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        _valueOfToken(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        _valueOfVaultComponents(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        btc(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "deposit(uint256,address)"(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "deposit(uint256,address,uint256)"(assets: BigNumberish, receiver: string, minSharesOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        detailedPrice(overrides?: CallOverrides): Promise<[
            DetailedShare.NumberStructOutput
        ] & {
            price: DetailedShare.NumberStructOutput;
        }>;
        detailedTVL(overrides?: CallOverrides): Promise<[
            DetailedShare.NumberStructOutput
        ] & {
            tvl: DetailedShare.NumberStructOutput;
        }>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<[
            DetailedShare.NumberStructOutput
        ] & {
            supply: DetailedShare.NumberStructOutput;
        }>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initialize(_governance: string, _asset: string, _tokens: [string, string], _ratios: [BigNumberish, BigNumberish], _priceFeeds: [string, string, string], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        ratios(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "redeem(uint256,address,address,uint256)"(shares: BigNumberish, receiver: string, owner: string, minAssetsOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "redeem(uint256,address,address)"(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setTrustedForwarder(forwarder: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tearDown(users: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        tokenToOracle(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        trustedForwarder(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        valueOfVault(overrides?: CallOverrides): Promise<[BigNumber]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        "withdraw(uint256,address,address,uint256)"(assets: BigNumberish, receiver: string, owner: string, maxSharesBurned: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "withdraw(uint256,address,address)"(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    ROUTER(overrides?: CallOverrides): Promise<string>;
    _getBuySplits(assets: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        assetToBtc: BigNumber;
        assetToEth: BigNumber;
    }>;
    _getSellSplits(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    _valueOfToken(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    _valueOfVaultComponents(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    btc(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "deposit(uint256,address)"(assets: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "deposit(uint256,address,uint256)"(assets: BigNumberish, receiver: string, minSharesOut: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    detailedPrice(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
    detailedTVL(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
    detailedTotalSupply(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
    governance(overrides?: CallOverrides): Promise<string>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initialize(_governance: string, _asset: string, _tokens: [string, string], _ratios: [BigNumberish, BigNumberish], _priceFeeds: [string, string, string], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    ratios(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "redeem(uint256,address,address,uint256)"(shares: BigNumberish, receiver: string, owner: string, minAssetsOut: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "redeem(uint256,address,address)"(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setTrustedForwarder(forwarder: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tearDown(users: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    tokenToOracle(arg0: string, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    trustedForwarder(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    valueOfVault(overrides?: CallOverrides): Promise<BigNumber>;
    weth(overrides?: CallOverrides): Promise<string>;
    "withdraw(uint256,address,address,uint256)"(assets: BigNumberish, receiver: string, owner: string, maxSharesBurned: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "withdraw(uint256,address,address)"(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        ROUTER(overrides?: CallOverrides): Promise<string>;
        _getBuySplits(assets: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            assetToBtc: BigNumber;
            assetToEth: BigNumber;
        }>;
        _getSellSplits(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        _valueOfToken(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _valueOfVaultComponents(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        btc(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "deposit(uint256,address)"(assets: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        "deposit(uint256,address,uint256)"(assets: BigNumberish, receiver: string, minSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        detailedPrice(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
        detailedTVL(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<DetailedShare.NumberStructOutput>;
        governance(overrides?: CallOverrides): Promise<string>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initialize(_governance: string, _asset: string, _tokens: [string, string], _ratios: [BigNumberish, BigNumberish], _priceFeeds: [string, string, string], overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        ratios(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "redeem(uint256,address,address,uint256)"(shares: BigNumberish, receiver: string, owner: string, minAssetsOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "redeem(uint256,address,address)"(shares: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        setTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tearDown(users: BytesLike, overrides?: CallOverrides): Promise<void>;
        tokenToOracle(arg0: string, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        trustedForwarder(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        valueOfVault(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<string>;
        "withdraw(uint256,address,address,uint256)"(assets: BigNumberish, receiver: string, owner: string, maxSharesBurned: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "withdraw(uint256,address,address)"(assets: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Deposit(address,address,uint256,uint256)"(caller?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(caller?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(caller?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(caller?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
    };
    estimateGas: {
        ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        _getBuySplits(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _getSellSplits(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _valueOfToken(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _valueOfVaultComponents(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        btc(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "deposit(uint256,address)"(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "deposit(uint256,address,uint256)"(assets: BigNumberish, receiver: string, minSharesOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        detailedPrice(overrides?: CallOverrides): Promise<BigNumber>;
        detailedTVL(overrides?: CallOverrides): Promise<BigNumber>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initialize(_governance: string, _asset: string, _tokens: [string, string], _ratios: [BigNumberish, BigNumberish], _priceFeeds: [string, string, string], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        ratios(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "redeem(uint256,address,address,uint256)"(shares: BigNumberish, receiver: string, owner: string, minAssetsOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "redeem(uint256,address,address)"(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setTrustedForwarder(forwarder: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tearDown(users: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        tokenToOracle(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        trustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        valueOfVault(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        "withdraw(uint256,address,address,uint256)"(assets: BigNumberish, receiver: string, owner: string, maxSharesBurned: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "withdraw(uint256,address,address)"(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getBuySplits(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getSellSplits(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _valueOfToken(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _valueOfVaultComponents(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        btc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "deposit(uint256,address)"(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "deposit(uint256,address,uint256)"(assets: BigNumberish, receiver: string, minSharesOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        detailedPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        detailedTVL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        detailedTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initialize(_governance: string, _asset: string, _tokens: [string, string], _ratios: [BigNumberish, BigNumberish], _priceFeeds: [string, string, string], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ratios(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "redeem(uint256,address,address,uint256)"(shares: BigNumberish, receiver: string, owner: string, minAssetsOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "redeem(uint256,address,address)"(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setTrustedForwarder(forwarder: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tearDown(users: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        tokenToOracle(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        trustedForwarder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        valueOfVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "withdraw(uint256,address,address,uint256)"(assets: BigNumberish, receiver: string, owner: string, maxSharesBurned: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "withdraw(uint256,address,address)"(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
