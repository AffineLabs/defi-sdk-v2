import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RouterInterface extends utils.Interface {
    functions: {
        "approve(address,address,uint256)": FunctionFragment;
        "deposit(address,address,uint256,uint256)": FunctionFragment;
        "depositMax(address,address,uint256)": FunctionFragment;
        "depositNative()": FunctionFragment;
        "depositToVault(address,address,uint256,uint256)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "redeem(address,address,uint256,uint256)": FunctionFragment;
        "redeemMax(address,address,uint256)": FunctionFragment;
        "redeemToDeposit(address,address,address,uint256,uint256)": FunctionFragment;
        "weth()": FunctionFragment;
        "withdraw(address,address,uint256,uint256)": FunctionFragment;
        "withdrawToDeposit(address,address,address,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "deposit" | "depositMax" | "depositNative" | "depositToVault" | "mint" | "multicall" | "redeem" | "redeemMax" | "redeemToDeposit" | "weth" | "withdraw" | "withdrawToDeposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositMax", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositToVault", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "redeem", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemMax", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemToDeposit", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawToDeposit", values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemToDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToDeposit", data: BytesLike): Result;
    events: {};
}
export interface Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterInterface;
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
        approve(token: string, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositMax(vault: string, to: string, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositNative(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositToVault(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
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
        redeemMax(vault: string, to: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemToDeposit(fromVault: string, toVault: string, to: string, shares: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawToDeposit(fromVault: string, toVault: string, to: string, amount: BigNumberish, maxSharesIn: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    approve(token: string, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositMax(vault: string, to: string, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositNative(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositToVault(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
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
    redeemMax(vault: string, to: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemToDeposit(fromVault: string, toVault: string, to: string, shares: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    weth(overrides?: CallOverrides): Promise<string>;
    withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawToDeposit(fromVault: string, toVault: string, to: string, amount: BigNumberish, maxSharesIn: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        approve(token: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        depositMax(vault: string, to: string, minSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        depositNative(overrides?: CallOverrides): Promise<void>;
        depositToVault(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mint(vault: string, to: string, shares: BigNumberish, maxAmountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        redeem(vault: string, to: string, shares: BigNumberish, minAmountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemMax(vault: string, to: string, minAmountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemToDeposit(fromVault: string, toVault: string, to: string, shares: BigNumberish, minSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<string>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawToDeposit(fromVault: string, toVault: string, to: string, amount: BigNumberish, maxSharesIn: BigNumberish, minSharesOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        approve(token: string, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositMax(vault: string, to: string, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositNative(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositToVault(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
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
        redeemMax(vault: string, to: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemToDeposit(fromVault: string, toVault: string, to: string, shares: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawToDeposit(fromVault: string, toVault: string, to: string, amount: BigNumberish, maxSharesIn: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(token: string, to: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deposit(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositMax(vault: string, to: string, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositNative(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositToVault(vault: string, to: string, amount: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
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
        redeemMax(vault: string, to: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemToDeposit(fromVault: string, toVault: string, to: string, shares: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(vault: string, to: string, amount: BigNumberish, maxSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawToDeposit(fromVault: string, toVault: string, to: string, amount: BigNumberish, maxSharesIn: BigNumberish, minSharesOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
