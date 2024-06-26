import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IAeroRouter {
    type RouteStruct = {
        from: string;
        to: string;
        stable: boolean;
        factory: string;
    };
    type RouteStructOutput = [string, string, boolean, string] & {
        from: string;
        to: string;
        stable: boolean;
        factory: string;
    };
    type ZapStruct = {
        tokenA: string;
        tokenB: string;
        stable: boolean;
        factory: string;
        amountOutMinA: BigNumberish;
        amountOutMinB: BigNumberish;
        amountAMin: BigNumberish;
        amountBMin: BigNumberish;
    };
    type ZapStructOutput = [
        string,
        string,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenA: string;
        tokenB: string;
        stable: boolean;
        factory: string;
        amountOutMinA: BigNumber;
        amountOutMinB: BigNumber;
        amountAMin: BigNumber;
        amountBMin: BigNumber;
    };
}
export interface IAeroRouterInterface extends utils.Interface {
    functions: {
        "ETHER()": FunctionFragment;
        "UNSAFE_swapExactTokensForTokens(uint256[],(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "addLiquidity(address,address,bool,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "addLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "defaultFactory()": FunctionFragment;
        "factoryRegistry()": FunctionFragment;
        "generateZapInParams(address,address,bool,address,uint256,uint256,(address,address,bool,address)[],(address,address,bool,address)[])": FunctionFragment;
        "generateZapOutParams(address,address,bool,address,uint256,(address,address,bool,address)[],(address,address,bool,address)[])": FunctionFragment;
        "getAmountsOut(uint256,(address,address,bool,address)[])": FunctionFragment;
        "getReserves(address,address,bool,address)": FunctionFragment;
        "poolFor(address,address,bool,address)": FunctionFragment;
        "quoteAddLiquidity(address,address,bool,address,uint256,uint256)": FunctionFragment;
        "quoteRemoveLiquidity(address,address,bool,address,uint256)": FunctionFragment;
        "quoteStableLiquidityRatio(address,address,address)": FunctionFragment;
        "removeLiquidity(address,address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHSupportingFeeOnTransferTokens(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "sortTokens(address,address)": FunctionFragment;
        "swapExactETHForTokens(uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "voter()": FunctionFragment;
        "zapIn(address,uint256,uint256,(address,address,bool,address,uint256,uint256,uint256,uint256),(address,address,bool,address)[],(address,address,bool,address)[],address,bool)": FunctionFragment;
        "zapOut(address,uint256,(address,address,bool,address,uint256,uint256,uint256,uint256),(address,address,bool,address)[],(address,address,bool,address)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ETHER" | "UNSAFE_swapExactTokensForTokens" | "addLiquidity" | "addLiquidityETH" | "defaultFactory" | "factoryRegistry" | "generateZapInParams" | "generateZapOutParams" | "getAmountsOut" | "getReserves" | "poolFor" | "quoteAddLiquidity" | "quoteRemoveLiquidity" | "quoteStableLiquidityRatio" | "removeLiquidity" | "removeLiquidityETH" | "removeLiquidityETHSupportingFeeOnTransferTokens" | "sortTokens" | "swapExactETHForTokens" | "swapExactETHForTokensSupportingFeeOnTransferTokens" | "swapExactTokensForETH" | "swapExactTokensForETHSupportingFeeOnTransferTokens" | "swapExactTokensForTokens" | "swapExactTokensForTokensSupportingFeeOnTransferTokens" | "voter" | "zapIn" | "zapOut"): FunctionFragment;
    encodeFunctionData(functionFragment: "ETHER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNSAFE_swapExactTokensForTokens", values: [BigNumberish[], IAeroRouter.RouteStruct[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        string,
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidityETH", values: [
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "defaultFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "factoryRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "generateZapInParams", values: [
        string,
        string,
        boolean,
        string,
        BigNumberish,
        BigNumberish,
        IAeroRouter.RouteStruct[],
        IAeroRouter.RouteStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "generateZapOutParams", values: [
        string,
        string,
        boolean,
        string,
        BigNumberish,
        IAeroRouter.RouteStruct[],
        IAeroRouter.RouteStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [BigNumberish, IAeroRouter.RouteStruct[]]): string;
    encodeFunctionData(functionFragment: "getReserves", values: [string, string, boolean, string]): string;
    encodeFunctionData(functionFragment: "poolFor", values: [string, string, boolean, string]): string;
    encodeFunctionData(functionFragment: "quoteAddLiquidity", values: [string, string, boolean, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteRemoveLiquidity", values: [string, string, boolean, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteStableLiquidityRatio", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        string,
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETH", values: [
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", values: [
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "sortTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [BigNumberish, IAeroRouter.RouteStruct[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", values: [BigNumberish, IAeroRouter.RouteStruct[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [
        BigNumberish,
        BigNumberish,
        IAeroRouter.RouteStruct[],
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", values: [
        BigNumberish,
        BigNumberish,
        IAeroRouter.RouteStruct[],
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        BigNumberish,
        BigNumberish,
        IAeroRouter.RouteStruct[],
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", values: [
        BigNumberish,
        BigNumberish,
        IAeroRouter.RouteStruct[],
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "voter", values?: undefined): string;
    encodeFunctionData(functionFragment: "zapIn", values: [
        string,
        BigNumberish,
        BigNumberish,
        IAeroRouter.ZapStruct,
        IAeroRouter.RouteStruct[],
        IAeroRouter.RouteStruct[],
        string,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "zapOut", values: [
        string,
        BigNumberish,
        IAeroRouter.ZapStruct,
        IAeroRouter.RouteStruct[],
        IAeroRouter.RouteStruct[]
    ]): string;
    decodeFunctionResult(functionFragment: "ETHER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNSAFE_swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateZapInParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateZapOutParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAddLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRemoveLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteStableLiquidityRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zapIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zapOut", data: BytesLike): Result;
    events: {};
}
export interface IAeroRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAeroRouterInterface;
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
        ETHER(overrides?: CallOverrides): Promise<[string]>;
        UNSAFE_swapExactTokensForTokens(amounts: BigNumberish[], routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        defaultFactory(overrides?: CallOverrides): Promise<[string]>;
        factoryRegistry(overrides?: CallOverrides): Promise<[string]>;
        generateZapInParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountInA: BigNumberish, amountInB: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        generateZapOutParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        getAmountsOut(amountIn: BigNumberish, routes: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        poolFor(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<[string] & {
            pool: string;
        }>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        quoteStableLiquidityRatio(tokenA: string, tokenB: string, factory: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            ratio: BigNumber;
        }>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        voter(overrides?: CallOverrides): Promise<[string]>;
        zapIn(tokenIn: string, amountInA: BigNumberish, amountInB: BigNumberish, zapInPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], to: string, stake: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        zapOut(tokenOut: string, liquidity: BigNumberish, zapOutPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    ETHER(overrides?: CallOverrides): Promise<string>;
    UNSAFE_swapExactTokensForTokens(amounts: BigNumberish[], routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    defaultFactory(overrides?: CallOverrides): Promise<string>;
    factoryRegistry(overrides?: CallOverrides): Promise<string>;
    generateZapInParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountInA: BigNumberish, amountInB: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountOutMinA: BigNumber;
        amountOutMinB: BigNumber;
        amountAMin: BigNumber;
        amountBMin: BigNumber;
    }>;
    generateZapOutParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountOutMinA: BigNumber;
        amountOutMinB: BigNumber;
        amountAMin: BigNumber;
        amountBMin: BigNumber;
    }>;
    getAmountsOut(amountIn: BigNumberish, routes: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getReserves(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    poolFor(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<string>;
    quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
    }>;
    quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    quoteStableLiquidityRatio(tokenA: string, tokenB: string, factory: string, overrides?: CallOverrides): Promise<BigNumber>;
    removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeLiquidityETHSupportingFeeOnTransferTokens(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string, string] & {
        token0: string;
        token1: string;
    }>;
    swapExactETHForTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    voter(overrides?: CallOverrides): Promise<string>;
    zapIn(tokenIn: string, amountInA: BigNumberish, amountInB: BigNumberish, zapInPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], to: string, stake: boolean, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    zapOut(tokenOut: string, liquidity: BigNumberish, zapOutPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        ETHER(overrides?: CallOverrides): Promise<string>;
        UNSAFE_swapExactTokensForTokens(amounts: BigNumberish[], routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
        defaultFactory(overrides?: CallOverrides): Promise<string>;
        factoryRegistry(overrides?: CallOverrides): Promise<string>;
        generateZapInParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountInA: BigNumberish, amountInB: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        generateZapOutParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        getAmountsOut(amountIn: BigNumberish, routes: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        poolFor(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<string>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        quoteStableLiquidityRatio(tokenA: string, tokenB: string, factory: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        voter(overrides?: CallOverrides): Promise<string>;
        zapIn(tokenIn: string, amountInA: BigNumberish, amountInB: BigNumberish, zapInPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], to: string, stake: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        zapOut(tokenOut: string, liquidity: BigNumberish, zapOutPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        ETHER(overrides?: CallOverrides): Promise<BigNumber>;
        UNSAFE_swapExactTokensForTokens(amounts: BigNumberish[], routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        defaultFactory(overrides?: CallOverrides): Promise<BigNumber>;
        factoryRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        generateZapInParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountInA: BigNumberish, amountInB: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        generateZapOutParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: BigNumberish, routes: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolFor(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<BigNumber>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteStableLiquidityRatio(tokenA: string, tokenB: string, factory: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<BigNumber>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<BigNumber>;
        zapIn(tokenIn: string, amountInA: BigNumberish, amountInB: BigNumberish, zapInPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], to: string, stake: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        zapOut(tokenOut: string, liquidity: BigNumberish, zapOutPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ETHER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNSAFE_swapExactTokensForTokens(amounts: BigNumberish[], routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        defaultFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factoryRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateZapInParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountInA: BigNumberish, amountInB: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateZapOutParams(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: BigNumberish, routes: IAeroRouter.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFor(tokenA: string, tokenB: string, stable: boolean, _factory: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, _factory: string, liquidity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteStableLiquidityRatio(tokenA: string, tokenB: string, factory: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IAeroRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zapIn(tokenIn: string, amountInA: BigNumberish, amountInB: BigNumberish, zapInPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], to: string, stake: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        zapOut(tokenOut: string, liquidity: BigNumberish, zapOutPool: IAeroRouter.ZapStruct, routesA: IAeroRouter.RouteStruct[], routesB: IAeroRouter.RouteStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
