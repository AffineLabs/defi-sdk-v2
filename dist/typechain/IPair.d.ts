import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPairInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(address)": FunctionFragment;
        "claimFees()": FunctionFragment;
        "claimable0(address)": FunctionFragment;
        "claimable1(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "getAmountOut(uint256,address)": FunctionFragment;
        "getReserves()": FunctionFragment;
        "initialize(address,address,bool)": FunctionFragment;
        "metadata()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "name()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "stable()": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
        "symbol()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "tokens()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "burn" | "claimFees" | "claimable0" | "claimable1" | "decimals" | "getAmountOut" | "getReserves" | "initialize" | "metadata" | "mint" | "name" | "permit" | "stable" | "swap" | "symbol" | "token0" | "token1" | "tokens" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [string]): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimable0", values: [string]): string;
    encodeFunctionData(functionFragment: "claimable1", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "stable", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
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
export interface IPair extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPairInterface;
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
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimable0(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimable1(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
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
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stable(overrides?: CallOverrides): Promise<[boolean]>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimFees(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimable0(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimable1(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    getReserves(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: BigNumber;
    }>;
    initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
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
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stable(overrides?: CallOverrides): Promise<boolean>;
    swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    tokens(overrides?: CallOverrides): Promise<[string, string]>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        claimFees(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        claimable0(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable1(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: CallOverrides): Promise<void>;
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
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        stable(overrides?: CallOverrides): Promise<boolean>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
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
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimable0(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable1(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        metadata(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stable(overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        tokens(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimable0(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimable1(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_token0: string, _token1: string, _stable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        metadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
