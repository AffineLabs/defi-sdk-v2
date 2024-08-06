import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IXERC20 {
    type BridgeParametersStruct = {
        timestamp: BigNumberish;
        ratePerSecond: BigNumberish;
        maxLimit: BigNumberish;
        currentLimit: BigNumberish;
    };
    type BridgeParametersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        ratePerSecond: BigNumber;
        maxLimit: BigNumber;
        currentLimit: BigNumber;
    };
}
export interface XUltraLRTInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "FACTORY()": FunctionFragment;
        "allowTokenDeposit()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseAsset()": FunctionFragment;
        "bridges(address)": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "burningCurrentLimitOf(address)": FunctionFragment;
        "burningMaxLimitOf(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "disableTokenDeposit()": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "handle(uint32,bytes32,bytes)": FunctionFragment;
        "initialize(string,string,address)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "lastPriceUpdateTimeStamp()": FunctionFragment;
        "lockbox()": FunctionFragment;
        "mailbox()": FunctionFragment;
        "maxPriceLag()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "mintingCurrentLimitOf(address)": FunctionFragment;
        "mintingMaxLimitOf(address)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "publishTokenPrice(uint32)": FunctionFragment;
        "quotePublishTokenPrice(uint32)": FunctionFragment;
        "quoteTransferRemote(uint32,address,uint256)": FunctionFragment;
        "quoteTransferRemote(uint32,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "routerMap(uint32)": FunctionFragment;
        "setBaseAsset(address)": FunctionFragment;
        "setLimits(address,uint256,uint256)": FunctionFragment;
        "setLockbox(address)": FunctionFragment;
        "setMailbox(address)": FunctionFragment;
        "setMaxPriceLag(uint256)": FunctionFragment;
        "setRouter(uint32,bytes32)": FunctionFragment;
        "sharePrice()": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenDepositAllowed()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transferRemote(uint32,uint256)": FunctionFragment;
        "transferRemote(uint32,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "FACTORY" | "allowTokenDeposit" | "allowance" | "approve" | "balanceOf" | "baseAsset" | "bridges" | "burn" | "burningCurrentLimitOf" | "burningMaxLimitOf" | "decimals" | "deposit" | "disableTokenDeposit" | "eip712Domain" | "handle" | "initialize(string,string,address)" | "initialize(address,address,address)" | "lastPriceUpdateTimeStamp" | "lockbox" | "mailbox" | "maxPriceLag" | "mint" | "mintingCurrentLimitOf" | "mintingMaxLimitOf" | "name" | "nonces" | "owner" | "paused" | "permit" | "publishTokenPrice" | "quotePublishTokenPrice" | "quoteTransferRemote(uint32,address,uint256)" | "quoteTransferRemote(uint32,uint256)" | "renounceOwnership" | "routerMap" | "setBaseAsset" | "setLimits" | "setLockbox" | "setMailbox" | "setMaxPriceLag" | "setRouter" | "sharePrice" | "symbol" | "tokenDepositAllowed" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "transferRemote(uint32,uint256)" | "transferRemote(uint32,address,uint256)"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "FACTORY", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowTokenDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "baseAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridges", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burningCurrentLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burningMaxLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "disableTokenDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize(string,string,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "initialize(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "lastPriceUpdateTimeStamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "mailbox", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxPriceLag", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintingCurrentLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "mintingMaxLimitOf", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "publishTokenPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quotePublishTokenPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteTransferRemote(uint32,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteTransferRemote(uint32,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "routerMap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBaseAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "setLimits", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLockbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setMailbox", values: [string]): string;
    encodeFunctionData(functionFragment: "setMaxPriceLag", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRouter", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "sharePrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenDepositAllowed", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferRemote(uint32,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferRemote(uint32,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FACTORY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowTokenDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burningCurrentLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burningMaxLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableTokenDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(string,string,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastPriceUpdateTimeStamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mailbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxPriceLag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintingCurrentLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintingMaxLimitOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quotePublishTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteTransferRemote(uint32,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteTransferRemote(uint32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLockbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMailbox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxPriceLag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenDepositAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferRemote(uint32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferRemote(uint32,address,uint256)", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "BridgeLimitsSet(uint256,uint256,address)": EventFragment;
        "EIP712DomainChanged()": EventFragment;
        "Initialized(uint64)": EventFragment;
        "LockboxSet(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeLimitsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LockboxSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
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
export interface BridgeLimitsSetEventObject {
    _mintingLimit: BigNumber;
    _burningLimit: BigNumber;
    _bridge: string;
}
export type BridgeLimitsSetEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string
], BridgeLimitsSetEventObject>;
export type BridgeLimitsSetEventFilter = TypedEventFilter<BridgeLimitsSetEvent>;
export interface EIP712DomainChangedEventObject {
}
export type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
export interface InitializedEventObject {
    version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LockboxSetEventObject {
    _lockbox: string;
}
export type LockboxSetEvent = TypedEvent<[string], LockboxSetEventObject>;
export type LockboxSetEventFilter = TypedEventFilter<LockboxSetEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
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
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface XUltraLRT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: XUltraLRTInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        FACTORY(overrides?: CallOverrides): Promise<[string]>;
        allowTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseAsset(overrides?: CallOverrides): Promise<[string]>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<[
            IXERC20.BridgeParametersStructOutput,
            IXERC20.BridgeParametersStructOutput
        ] & {
            minterParams: IXERC20.BridgeParametersStructOutput;
            burnerParams: IXERC20.BridgeParametersStructOutput;
        }>;
        burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disableTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "initialize(string,string,address)"(_name: string, _symbol: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "initialize(address,address,address)"(_mailbox: string, _governance: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        lockbox(overrides?: CallOverrides): Promise<[string]>;
        mailbox(overrides?: CallOverrides): Promise<[string]>;
        maxPriceLag(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _limit: BigNumber;
        }>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            fees: BigNumber;
        }>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            fees: BigNumber;
        }>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            fees: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setBaseAsset(_baseAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setLockbox(_lockbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMailbox(_mailbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sharePrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    FACTORY(overrides?: CallOverrides): Promise<string>;
    allowTokenDeposit(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    baseAsset(overrides?: CallOverrides): Promise<string>;
    bridges(arg0: string, overrides?: CallOverrides): Promise<[
        IXERC20.BridgeParametersStructOutput,
        IXERC20.BridgeParametersStructOutput
    ] & {
        minterParams: IXERC20.BridgeParametersStructOutput;
        burnerParams: IXERC20.BridgeParametersStructOutput;
    }>;
    burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    deposit(_amount: BigNumberish, receiver: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disableTokenDeposit(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "initialize(string,string,address)"(_name: string, _symbol: string, _factory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "initialize(address,address,address)"(_mailbox: string, _governance: string, _factory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;
    lockbox(overrides?: CallOverrides): Promise<string>;
    mailbox(overrides?: CallOverrides): Promise<string>;
    maxPriceLag(overrides?: CallOverrides): Promise<BigNumber>;
    mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setBaseAsset(_baseAsset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setLockbox(_lockbox: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMailbox(_mailbox: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sharePrice(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        FACTORY(overrides?: CallOverrides): Promise<string>;
        allowTokenDeposit(overrides?: CallOverrides): Promise<void>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<string>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<[
            IXERC20.BridgeParametersStructOutput,
            IXERC20.BridgeParametersStructOutput
        ] & {
            minterParams: IXERC20.BridgeParametersStructOutput;
            burnerParams: IXERC20.BridgeParametersStructOutput;
        }>;
        burn(_user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<void>;
        disableTokenDeposit(overrides?: CallOverrides): Promise<void>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        "initialize(string,string,address)"(_name: string, _symbol: string, _factory: string, overrides?: CallOverrides): Promise<void>;
        "initialize(address,address,address)"(_mailbox: string, _governance: string, _factory: string, overrides?: CallOverrides): Promise<void>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;
        lockbox(overrides?: CallOverrides): Promise<string>;
        mailbox(overrides?: CallOverrides): Promise<string>;
        maxPriceLag(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        publishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<void>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setBaseAsset(_baseAsset: string, overrides?: CallOverrides): Promise<void>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLockbox(_lockbox: string, overrides?: CallOverrides): Promise<void>;
        setMailbox(_mailbox: string, overrides?: CallOverrides): Promise<void>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        sharePrice(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "BridgeLimitsSet(uint256,uint256,address)"(_mintingLimit?: null, _burningLimit?: null, _bridge?: string | null): BridgeLimitsSetEventFilter;
        BridgeLimitsSet(_mintingLimit?: null, _burningLimit?: null, _bridge?: string | null): BridgeLimitsSetEventFilter;
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "Initialized(uint64)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "LockboxSet(address)"(_lockbox?: null): LockboxSetEventFilter;
        LockboxSet(_lockbox?: null): LockboxSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        FACTORY(overrides?: CallOverrides): Promise<BigNumber>;
        allowTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<BigNumber>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        disableTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "initialize(string,string,address)"(_name: string, _symbol: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "initialize(address,address,address)"(_mailbox: string, _governance: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;
        lockbox(overrides?: CallOverrides): Promise<BigNumber>;
        mailbox(overrides?: CallOverrides): Promise<BigNumber>;
        maxPriceLag(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setBaseAsset(_baseAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setLockbox(_lockbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMailbox(_mailbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sharePrice(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FACTORY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridges(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        burningCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burningMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_amount: BigNumberish, receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disableTokenDeposit(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handle(_origin: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "initialize(string,string,address)"(_name: string, _symbol: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "initialize(address,address,address)"(_mailbox: string, _governance: string, _factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lastPriceUpdateTimeStamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mailbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxPriceLag(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_user: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mintingCurrentLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintingMaxLimitOf(_bridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        publishTokenPrice(domain: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        quotePublishTokenPrice(domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteTransferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "quoteTransferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        routerMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBaseAsset(_baseAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLimits(_bridge: string, _mintingLimit: BigNumberish, _burningLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setLockbox(_lockbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMailbox(_mailbox: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMaxPriceLag(_maxPriceLag: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setRouter(_origin: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sharePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDepositAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferRemote(uint32,uint256)"(destination: BigNumberish, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferRemote(uint32,address,uint256)"(destination: BigNumberish, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
