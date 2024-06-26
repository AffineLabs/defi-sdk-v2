import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IAeroPool {
    type ObservationStruct = {
        timestamp: BigNumberish;
        reserve0Cumulative: BigNumberish;
        reserve1Cumulative: BigNumberish;
    };
    type ObservationStructOutput = [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
    };
}
export interface IAeroPoolInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "blockTimestampLast()": FunctionFragment;
        "burn(address)": FunctionFragment;
        "claimFees()": FunctionFragment;
        "claimable0(address)": FunctionFragment;
        "claimable1(address)": FunctionFragment;
        "currentCumulativePrices()": FunctionFragment;
        "decimals()": FunctionFragment;
        "factory()": FunctionFragment;
        "getAmountOut(uint256,address)": FunctionFragment;
        "getK()": FunctionFragment;
        "getReserves()": FunctionFragment;
        "index0()": FunctionFragment;
        "index1()": FunctionFragment;
        "initialize(address,address,bool)": FunctionFragment;
        "lastObservation()": FunctionFragment;
        "metadata()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "name()": FunctionFragment;
        "observationLength()": FunctionFragment;
        "periodSize()": FunctionFragment;
        "poolFees()": FunctionFragment;
        "prices(address,uint256,uint256)": FunctionFragment;
        "quote(address,uint256,uint256)": FunctionFragment;
        "reserve0()": FunctionFragment;
        "reserve0CumulativeLast()": FunctionFragment;
        "reserve1()": FunctionFragment;
        "reserve1CumulativeLast()": FunctionFragment;
        "sample(address,uint256,uint256,uint256)": FunctionFragment;
        "setName(string)": FunctionFragment;
        "setSymbol(string)": FunctionFragment;
        "skim(address)": FunctionFragment;
        "stable()": FunctionFragment;
        "supplyIndex0(address)": FunctionFragment;
        "supplyIndex1(address)": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
        "symbol()": FunctionFragment;
        "sync()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "tokens()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "blockTimestampLast" | "burn" | "claimFees" | "claimable0" | "claimable1" | "currentCumulativePrices" | "decimals" | "factory" | "getAmountOut" | "getK" | "getReserves" | "index0" | "index1" | "initialize" | "lastObservation" | "metadata" | "mint" | "name" | "observationLength" | "periodSize" | "poolFees" | "prices" | "quote" | "reserve0" | "reserve0CumulativeLast" | "reserve1" | "reserve1CumulativeLast" | "sample" | "setName" | "setSymbol" | "skim" | "stable" | "supplyIndex0" | "supplyIndex1" | "swap" | "symbol" | "sync" | "token0" | "token1" | "tokens" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "blockTimestampLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [string]): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimable0", values: [string]): string;
    encodeFunctionData(functionFragment: "claimable1", values: [string]): string;
    encodeFunctionData(functionFragment: "currentCumulativePrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getK", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "index0", values?: undefined): string;
    encodeFunctionData(functionFragment: "index1", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "lastObservation", values?: undefined): string;
    encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "observationLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "prices", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quote", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reserve0", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve0CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve1", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve1CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "sample", values: [string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setName", values: [string]): string;
    encodeFunctionData(functionFragment: "setSymbol", values: [string]): string;
    encodeFunctionData(functionFragment: "skim", values: [string]): string;
    encodeFunctionData(functionFragment: "stable", values?: undefined): string;
    encodeFunctionData(functionFragment: "supplyIndex0", values: [string]): string;
    encodeFunctionData(functionFragment: "supplyIndex1", values: [string]): string;
    encodeFunctionData(functionFragment: "swap", values: [BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blockTimestampLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentCumulativePrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastObservation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observationLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve0CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve1CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sample", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSymbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyIndex0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyIndex1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Burn(address,address,uint256,uint256)": EventFragment;
        "Claim(address,address,uint256,uint256)": EventFragment;
        "Fees(address,uint256,uint256)": EventFragment;
        "Mint(address,uint256,uint256)": EventFragment;
        "Swap(address,address,uint256,uint256,uint256,uint256)": EventFragment;
        "Sync(uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Fees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
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
export interface BurnEventObject {
    sender: string;
    to: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type BurnEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BurnEventObject>;
export type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface ClaimEventObject {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type ClaimEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], ClaimEventObject>;
export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export interface FeesEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type FeesEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], FeesEventObject>;
export type FeesEventFilter = TypedEventFilter<FeesEvent>;
export interface MintEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MintEventObject>;
export type MintEventFilter = TypedEventFilter<MintEvent>;
export interface SwapEventObject {
    sender: string;
    to: string;
    amount0In: BigNumber;
    amount1In: BigNumber;
    amount0Out: BigNumber;
    amount1Out: BigNumber;
}
export type SwapEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], SwapEventObject>;
export type SwapEventFilter = TypedEventFilter<SwapEvent>;
export interface SyncEventObject {
    reserve0: BigNumber;
    reserve1: BigNumber;
}
export type SyncEvent = TypedEvent<[BigNumber, BigNumber], SyncEventObject>;
export type SyncEventFilter = TypedEventFilter<SyncEvent>;
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
export interface IAeroPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAeroPoolInterface;
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
        blockTimestampLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimable0(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimable1(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAmountOut(amountIn: BigNumberish, tokenIn: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getK(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        index0(overrides?: CallOverrides): Promise<[BigNumber]>;
        index1(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lastObservation(overrides?: CallOverrides): Promise<[IAeroPool.ObservationStructOutput]>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
        }>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        observationLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolFees(overrides?: CallOverrides): Promise<[string]>;
        prices(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        quote(tokenIn: string, amountIn: BigNumberish, granularity: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        reserve0(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve1(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        sample(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, window: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        setName(__name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setSymbol(__symbol: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        skim(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stable(overrides?: CallOverrides): Promise<[boolean]>;
        supplyIndex0(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyIndex1(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        sync(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
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
    blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
    burn(to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimFees(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimable0(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimable1(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    currentCumulativePrices(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
        blockTimestamp: BigNumber;
    }>;
    decimals(overrides?: CallOverrides): Promise<number>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAmountOut(amountIn: BigNumberish, tokenIn: string, overrides?: CallOverrides): Promise<BigNumber>;
    getK(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getReserves(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: BigNumber;
    }>;
    index0(overrides?: CallOverrides): Promise<BigNumber>;
    index1(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lastObservation(overrides?: CallOverrides): Promise<IAeroPool.ObservationStructOutput>;
    metadata(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
    ] & {
        dec0: BigNumber;
        dec1: BigNumber;
        r0: BigNumber;
        r1: BigNumber;
        st: boolean;
        t0: string;
        t1: string;
    }>;
    mint(to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    observationLength(overrides?: CallOverrides): Promise<BigNumber>;
    periodSize(overrides?: CallOverrides): Promise<BigNumber>;
    poolFees(overrides?: CallOverrides): Promise<string>;
    prices(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    quote(tokenIn: string, amountIn: BigNumberish, granularity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    reserve0(overrides?: CallOverrides): Promise<BigNumber>;
    reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    reserve1(overrides?: CallOverrides): Promise<BigNumber>;
    reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    sample(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, window: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    setName(__name: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setSymbol(__symbol: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    skim(to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stable(overrides?: CallOverrides): Promise<boolean>;
    supplyIndex0(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    supplyIndex1(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    sync(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    tokens(overrides?: CallOverrides): Promise<[string, string]>;
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
        blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        claimFees(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        claimable0(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable1(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<number>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAmountOut(amountIn: BigNumberish, tokenIn: string, overrides?: CallOverrides): Promise<BigNumber>;
        getK(overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        index0(overrides?: CallOverrides): Promise<BigNumber>;
        index1(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: CallOverrides): Promise<void>;
        lastObservation(overrides?: CallOverrides): Promise<IAeroPool.ObservationStructOutput>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
        }>;
        mint(to: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodSize(overrides?: CallOverrides): Promise<BigNumber>;
        poolFees(overrides?: CallOverrides): Promise<string>;
        prices(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        quote(tokenIn: string, amountIn: BigNumberish, granularity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        sample(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, window: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        setName(__name: string, overrides?: CallOverrides): Promise<void>;
        setSymbol(__symbol: string, overrides?: CallOverrides): Promise<void>;
        skim(to: string, overrides?: CallOverrides): Promise<void>;
        stable(overrides?: CallOverrides): Promise<boolean>;
        supplyIndex0(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        supplyIndex1(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        sync(overrides?: CallOverrides): Promise<void>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "Burn(address,address,uint256,uint256)"(sender?: string | null, to?: string | null, amount0?: null, amount1?: null): BurnEventFilter;
        Burn(sender?: string | null, to?: string | null, amount0?: null, amount1?: null): BurnEventFilter;
        "Claim(address,address,uint256,uint256)"(sender?: string | null, recipient?: string | null, amount0?: null, amount1?: null): ClaimEventFilter;
        Claim(sender?: string | null, recipient?: string | null, amount0?: null, amount1?: null): ClaimEventFilter;
        "Fees(address,uint256,uint256)"(sender?: string | null, amount0?: null, amount1?: null): FeesEventFilter;
        Fees(sender?: string | null, amount0?: null, amount1?: null): FeesEventFilter;
        "Mint(address,uint256,uint256)"(sender?: string | null, amount0?: null, amount1?: null): MintEventFilter;
        Mint(sender?: string | null, amount0?: null, amount1?: null): MintEventFilter;
        "Swap(address,address,uint256,uint256,uint256,uint256)"(sender?: string | null, to?: string | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null): SwapEventFilter;
        Swap(sender?: string | null, to?: string | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null): SwapEventFilter;
        "Sync(uint256,uint256)"(reserve0?: null, reserve1?: null): SyncEventFilter;
        Sync(reserve0?: null, reserve1?: null): SyncEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimable0(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable1(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: BigNumberish, tokenIn: string, overrides?: CallOverrides): Promise<BigNumber>;
        getK(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        index0(overrides?: CallOverrides): Promise<BigNumber>;
        index1(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lastObservation(overrides?: CallOverrides): Promise<BigNumber>;
        metadata(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodSize(overrides?: CallOverrides): Promise<BigNumber>;
        poolFees(overrides?: CallOverrides): Promise<BigNumber>;
        prices(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quote(tokenIn: string, amountIn: BigNumberish, granularity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        sample(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, window: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setName(__name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setSymbol(__symbol: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        skim(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stable(overrides?: CallOverrides): Promise<BigNumber>;
        supplyIndex0(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        supplyIndex1(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        sync(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        tokens(overrides?: CallOverrides): Promise<BigNumber>;
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
        blockTimestampLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimable0(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimable1(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: BigNumberish, tokenIn: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getK(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        index0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        index1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lastObservation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observationLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prices(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quote(tokenIn: string, amountIn: BigNumberish, granularity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sample(tokenIn: string, amountIn: BigNumberish, points: BigNumberish, window: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setName(__name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setSymbol(__symbol: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        skim(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyIndex0(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyIndex1(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sync(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
