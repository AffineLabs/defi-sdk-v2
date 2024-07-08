import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC4626RouterBaseInterface extends utils.Interface {
    functions: {
        "deposit(address,address,uint256,uint256)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "redeem(address,address,uint256,uint256)": FunctionFragment;
        "withdraw(address,address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "mint" | "multicall" | "redeem" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "redeem", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface ERC4626RouterBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC4626RouterBaseInterface;
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
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mint(vault: string, to: string, shares: BigNumberish, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeem(vault: string, to: string, shares: BigNumberish, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mint(vault: string, to: string, shares: BigNumberish, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeem(vault: string, to: string, shares: BigNumberish, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mint(vault: string, to: string, shares: BigNumberish, maxAmountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        redeem(vault: string, to: string, shares: BigNumberish, minAmountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        mint(vault: string, to: string, shares: BigNumberish, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeem(vault: string, to: string, shares: BigNumberish, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mint(vault: string, to: string, shares: BigNumberish, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeem(vault: string, to: string, shares: BigNumberish, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
