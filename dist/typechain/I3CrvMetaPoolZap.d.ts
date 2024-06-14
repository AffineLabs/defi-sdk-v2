import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface I3CrvMetaPoolZapInterface extends utils.Interface {
    functions: {
        "add_liquidity(address,uint256[4],uint256)": FunctionFragment;
        "calc_token_amount(address,uint256[4],bool)": FunctionFragment;
        "calc_withdraw_one_coin(address,uint256,int128)": FunctionFragment;
        "remove_liquidity_imbalance(address,uint256[4],uint256)": FunctionFragment;
        "remove_liquidity_one_coin(address,uint256,int128,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add_liquidity" | "calc_token_amount" | "calc_withdraw_one_coin" | "remove_liquidity_imbalance" | "remove_liquidity_one_coin"): FunctionFragment;
    encodeFunctionData(functionFragment: "add_liquidity", values: [
        string,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "calc_token_amount", values: [
        string,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance", values: [
        string,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [string, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    events: {};
}
export interface I3CrvMetaPoolZap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: I3CrvMetaPoolZapInterface;
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
        add_liquidity(pool: string, depositAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        calc_token_amount(pool: string, amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], deposit: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_withdraw_one_coin(pool: string, tokenAmount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        remove_liquidity_imbalance(_pool: string, _amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _maxBurnAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        remove_liquidity_one_coin(pool: string, burnAmount: BigNumberish, index: BigNumberish, minAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    add_liquidity(pool: string, depositAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    calc_token_amount(pool: string, amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    calc_withdraw_one_coin(pool: string, tokenAmount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    remove_liquidity_imbalance(_pool: string, _amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _maxBurnAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    remove_liquidity_one_coin(pool: string, burnAmount: BigNumberish, index: BigNumberish, minAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        add_liquidity(pool: string, depositAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(pool: string, amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(pool: string, tokenAmount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_imbalance(_pool: string, _amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _maxBurnAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(pool: string, burnAmount: BigNumberish, index: BigNumberish, minAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        add_liquidity(pool: string, depositAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        calc_token_amount(pool: string, amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(pool: string, tokenAmount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_imbalance(_pool: string, _amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _maxBurnAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        remove_liquidity_one_coin(pool: string, burnAmount: BigNumberish, index: BigNumberish, minAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        add_liquidity(pool: string, depositAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], minMintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        calc_token_amount(pool: string, amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], deposit: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(pool: string, tokenAmount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_liquidity_imbalance(_pool: string, _amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _maxBurnAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(pool: string, burnAmount: BigNumberish, index: BigNumberish, minAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
