import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICurvePoolInterface extends utils.Interface {
    functions: {
        "add_liquidity(uint256[2],uint256)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,int128)": FunctionFragment;
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
        "exchange(uint256,uint256,uint256,uint256)": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "lp_token()": FunctionFragment;
        "remove_liquidity_imbalance(uint256[2],uint256)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add_liquidity" | "calc_withdraw_one_coin" | "exchange(int128,int128,uint256,uint256)" | "exchange(uint256,uint256,uint256,uint256)" | "get_virtual_price" | "lp_token" | "remove_liquidity_imbalance" | "remove_liquidity_one_coin"): FunctionFragment;
    encodeFunctionData(functionFragment: "add_liquidity", values: [[BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange(int128,int128,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange(uint256,uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance", values: [[BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange(int128,int128,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange(uint256,uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    events: {};
}
export interface ICurvePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICurvePoolInterface;
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
        add_liquidity(depositAmounts: [BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        calc_withdraw_one_coin(_token_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "exchange(int128,int128,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "exchange(uint256,uint256,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        lp_token(overrides?: CallOverrides): Promise<[string]>;
        remove_liquidity_imbalance(_amounts: [BigNumberish, BigNumberish], _max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        remove_liquidity_one_coin(_burn_amount: BigNumberish, i: BigNumberish, _min_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    add_liquidity(depositAmounts: [BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    calc_withdraw_one_coin(_token_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "exchange(int128,int128,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "exchange(uint256,uint256,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    lp_token(overrides?: CallOverrides): Promise<string>;
    remove_liquidity_imbalance(_amounts: [BigNumberish, BigNumberish], _max_burn_amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    remove_liquidity_one_coin(_burn_amount: BigNumberish, i: BigNumberish, _min_amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        add_liquidity(depositAmounts: [BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(_token_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(int128,int128,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(uint256,uint256,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<string>;
        remove_liquidity_imbalance(_amounts: [BigNumberish, BigNumberish], _max_burn_amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(_burn_amount: BigNumberish, i: BigNumberish, _min_amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        add_liquidity(depositAmounts: [BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        calc_withdraw_one_coin(_token_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "exchange(int128,int128,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "exchange(uint256,uint256,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_imbalance(_amounts: [BigNumberish, BigNumberish], _max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        remove_liquidity_one_coin(_burn_amount: BigNumberish, i: BigNumberish, _min_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        add_liquidity(depositAmounts: [BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(_token_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "exchange(int128,int128,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "exchange(uint256,uint256,uint256,uint256)"(x: BigNumberish, y: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_liquidity_imbalance(_amounts: [BigNumberish, BigNumberish], _max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(_burn_amount: BigNumberish, i: BigNumberish, _min_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
