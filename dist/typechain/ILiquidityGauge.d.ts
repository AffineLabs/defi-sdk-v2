import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ILiquidityGaugeInterface extends utils.Interface {
    functions: {
        "balanceOf(address)": FunctionFragment;
        "claim_rewards()": FunctionFragment;
        "claimable_reward(address,address)": FunctionFragment;
        "claimable_tokens(address)": FunctionFragment;
        "claimed_reward(address,address)": FunctionFragment;
        "deposit(uint256)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "claim_rewards" | "claimable_reward" | "claimable_tokens" | "claimed_reward" | "deposit" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claim_rewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimable_reward", values: [string, string]): string;
    encodeFunctionData(functionFragment: "claimable_tokens", values: [string]): string;
    encodeFunctionData(functionFragment: "claimed_reward", values: [string, string]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim_rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable_reward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable_tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimed_reward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface ILiquidityGauge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILiquidityGaugeInterface;
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
        balanceOf(owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claim_rewards(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimable_reward(addr: string, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimable_tokens(addr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimed_reward(addr: string, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(_value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    balanceOf(owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claim_rewards(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimable_reward(addr: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimable_tokens(addr: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimed_reward(addr: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(_value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        claim_rewards(overrides?: CallOverrides): Promise<void>;
        claimable_reward(addr: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable_tokens(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimed_reward(addr: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdraw(_value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        balanceOf(owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claim_rewards(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimable_reward(addr: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimable_tokens(addr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimed_reward(addr: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(_value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claim_rewards(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimable_reward(addr: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimable_tokens(addr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimed_reward(addr: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(_value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
