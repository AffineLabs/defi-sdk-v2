import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IRouter {
    type RouteStruct = {
        from: string;
        to: string;
        stable: boolean;
    };
    type RouteStructOutput = [string, string, boolean] & {
        from: string;
        to: string;
        stable: boolean;
    };
}
export interface IRouterInterface extends utils.Interface {
    functions: {
        "addLiquidity(address,address,bool,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "addLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "getAmountOut(uint256,address,address)": FunctionFragment;
        "getAmountsOut(uint256,(address,address,bool)[])": FunctionFragment;
        "getReserves(address,address,bool)": FunctionFragment;
        "isPair(address)": FunctionFragment;
        "pairFor(address,address,bool)": FunctionFragment;
        "quoteAddLiquidity(address,address,bool,uint256,uint256)": FunctionFragment;
        "quoteRemoveLiquidity(address,address,bool,uint256)": FunctionFragment;
        "removeLiquidity(address,address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHWithPermit(address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "removeLiquidityWithPermit(address,address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "sortTokens(address,address)": FunctionFragment;
        "swapExactETHForTokens(uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSimple(uint256,uint256,address,address,bool,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addLiquidity" | "addLiquidityETH" | "getAmountOut" | "getAmountsOut" | "getReserves" | "isPair" | "pairFor" | "quoteAddLiquidity" | "quoteRemoveLiquidity" | "removeLiquidity" | "removeLiquidityETH" | "removeLiquidityETHWithPermit" | "removeLiquidityWithPermit" | "sortTokens" | "swapExactETHForTokens" | "swapExactTokensForETH" | "swapExactTokensForTokens" | "swapExactTokensForTokensSimple"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "getAmountOut", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [BigNumberish, IRouter.RouteStruct[]]): string;
    encodeFunctionData(functionFragment: "getReserves", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "isPair", values: [string]): string;
    encodeFunctionData(functionFragment: "pairFor", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "quoteAddLiquidity", values: [string, string, boolean, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteRemoveLiquidity", values: [string, string, boolean, BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "removeLiquidityETHWithPermit", values: [
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        boolean,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityWithPermit", values: [
        string,
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        boolean,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "sortTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [BigNumberish, IRouter.RouteStruct[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [
        BigNumberish,
        BigNumberish,
        IRouter.RouteStruct[],
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        BigNumberish,
        BigNumberish,
        IRouter.RouteStruct[],
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSimple", values: [
        BigNumberish,
        BigNumberish,
        string,
        string,
        boolean,
        string,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAddLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRemoveLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSimple", data: BytesLike): Result;
    events: {};
}
export interface IRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRouterInterface;
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
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAmountOut(amountIn: BigNumberish, tokenIn: string, tokenOut: string, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            amount: BigNumber;
            stable: boolean;
        }>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        isPair(pair: string, overrides?: CallOverrides): Promise<[boolean]>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[string] & {
            pair: string;
        }>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeLiquidityETHWithPermit(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAmountOut(amountIn: BigNumberish, tokenIn: string, tokenOut: string, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        amount: BigNumber;
        stable: boolean;
    }>;
    getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;
    pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<string>;
    quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
    }>;
    quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeLiquidityETHWithPermit(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeLiquidityWithPermit(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string, string] & {
        token0: string;
        token1: string;
    }>;
    swapExactETHForTokens(amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
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
        getAmountOut(amountIn: BigNumberish, tokenIn: string, tokenOut: string, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            amount: BigNumber;
            stable: boolean;
        }>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<string>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
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
        removeLiquidityETHWithPermit(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAmountOut(amountIn: BigNumberish, tokenIn: string, tokenOut: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        isPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeLiquidityETHWithPermit(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<BigNumber>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addLiquidityETH(token: string, stable: boolean, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: BigNumberish, tokenIn: string, tokenOut: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPair(pair: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRemoveLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETH(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHWithPermit(token: string, stable: boolean, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sortTokens(tokenA: string, tokenB: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapExactETHForTokens(amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
