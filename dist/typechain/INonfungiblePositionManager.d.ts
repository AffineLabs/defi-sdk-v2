import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace INonfungiblePositionManager {
    type CollectParamsStruct = {
        tokenId: BigNumberish;
        recipient: string;
        amount0Max: BigNumberish;
        amount1Max: BigNumberish;
    };
    type CollectParamsStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        tokenId: BigNumber;
        recipient: string;
        amount0Max: BigNumber;
        amount1Max: BigNumber;
    };
    type DecreaseLiquidityParamsStruct = {
        tokenId: BigNumberish;
        liquidity: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        deadline: BigNumberish;
    };
    type DecreaseLiquidityParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenId: BigNumber;
        liquidity: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        deadline: BigNumber;
    };
    type IncreaseLiquidityParamsStruct = {
        tokenId: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        deadline: BigNumberish;
    };
    type IncreaseLiquidityParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenId: BigNumber;
        amount0Desired: BigNumber;
        amount1Desired: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        deadline: BigNumber;
    };
    type MintParamsStruct = {
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Desired: BigNumberish;
        amount1Desired: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
    };
    type MintParamsStructOutput = [
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
    ] & {
        token0: string;
        token1: string;
        fee: number;
        tickLower: number;
        tickUpper: number;
        amount0Desired: BigNumber;
        amount1Desired: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        recipient: string;
        deadline: BigNumber;
    };
}
export interface INonfungiblePositionManagerInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "PERMIT_TYPEHASH()": FunctionFragment;
        "WETH9()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "collect((uint256,address,uint128,uint128))": FunctionFragment;
        "createAndInitializePoolIfNecessary(address,address,uint24,uint160)": FunctionFragment;
        "decreaseLiquidity((uint256,uint128,uint256,uint256,uint256))": FunctionFragment;
        "factory()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "increaseLiquidity((uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "mint((address,address,uint24,int24,int24,uint256,uint256,uint256,uint256,address,uint256))": FunctionFragment;
        "name()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "permit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "positions(uint256)": FunctionFragment;
        "refundETH()": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenByIndex(uint256)": FunctionFragment;
        "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "PERMIT_TYPEHASH" | "WETH9" | "approve" | "balanceOf" | "burn" | "collect" | "createAndInitializePoolIfNecessary" | "decreaseLiquidity" | "factory" | "getApproved" | "increaseLiquidity" | "isApprovedForAll" | "mint" | "name" | "ownerOf" | "permit" | "positions" | "refundETH" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "supportsInterface" | "sweepToken" | "symbol" | "tokenByIndex" | "tokenOfOwnerByIndex" | "tokenURI" | "totalSupply" | "transferFrom" | "unwrapWETH9"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "collect", values: [INonfungiblePositionManager.CollectParamsStruct]): string;
    encodeFunctionData(functionFragment: "createAndInitializePoolIfNecessary", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decreaseLiquidity", values: [INonfungiblePositionManager.DecreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseLiquidity", values: [INonfungiblePositionManager.IncreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "mint", values: [INonfungiblePositionManager.MintParamsStruct]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "positions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sweepToken", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenByIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenOfOwnerByIndex", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndInitializePoolIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOfOwnerByIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Collect(uint256,address,uint256,uint256)": EventFragment;
        "DecreaseLiquidity(uint256,uint128,uint256,uint256)": EventFragment;
        "IncreaseLiquidity(uint256,uint128,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreaseLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface CollectEventObject {
    tokenId: BigNumber;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type CollectEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], CollectEventObject>;
export declare type CollectEventFilter = TypedEventFilter<CollectEvent>;
export interface DecreaseLiquidityEventObject {
    tokenId: BigNumber;
    liquidity: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type DecreaseLiquidityEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], DecreaseLiquidityEventObject>;
export declare type DecreaseLiquidityEventFilter = TypedEventFilter<DecreaseLiquidityEvent>;
export interface IncreaseLiquidityEventObject {
    tokenId: BigNumber;
    liquidity: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type IncreaseLiquidityEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], IncreaseLiquidityEventObject>;
export declare type IncreaseLiquidityEventFilter = TypedEventFilter<IncreaseLiquidityEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface INonfungiblePositionManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INonfungiblePositionManagerInterface;
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
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        burn(tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            operator: string;
        }>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            owner: string;
        }>;
        permit(spender: string, tokenId: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        positions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            string,
            number,
            number,
            number,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            nonce: BigNumber;
            operator: string;
            token0: string;
            token1: string;
            fee: number;
            tickLower: number;
            tickUpper: number;
            liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        refundETH(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WETH9(overrides?: CallOverrides): Promise<string>;
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    permit(spender: string, tokenId: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    positions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        nonce: BigNumber;
        operator: string;
        token0: string;
        token1: string;
        fee: number;
        tickLower: number;
        tickUpper: number;
        liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
    }>;
    refundETH(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WETH9(overrides?: CallOverrides): Promise<string>;
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<string>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            liquidity: BigNumber;
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            tokenId: BigNumber;
            liquidity: BigNumber;
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        name(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        permit(spender: string, tokenId: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        positions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            string,
            number,
            number,
            number,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            nonce: BigNumber;
            operator: string;
            token0: string;
            token1: string;
            fee: number;
            tickLower: number;
            tickUpper: number;
            liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "Collect(uint256,address,uint256,uint256)"(tokenId?: BigNumberish | null, recipient?: null, amount0?: null, amount1?: null): CollectEventFilter;
        Collect(tokenId?: BigNumberish | null, recipient?: null, amount0?: null, amount1?: null): CollectEventFilter;
        "DecreaseLiquidity(uint256,uint128,uint256,uint256)"(tokenId?: BigNumberish | null, liquidity?: null, amount0?: null, amount1?: null): DecreaseLiquidityEventFilter;
        DecreaseLiquidity(tokenId?: BigNumberish | null, liquidity?: null, amount0?: null, amount1?: null): DecreaseLiquidityEventFilter;
        "IncreaseLiquidity(uint256,uint128,uint256,uint256)"(tokenId?: BigNumberish | null, liquidity?: null, amount0?: null, amount1?: null): IncreaseLiquidityEventFilter;
        IncreaseLiquidity(tokenId?: BigNumberish | null, liquidity?: null, amount0?: null, amount1?: null): IncreaseLiquidityEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        permit(spender: string, tokenId: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        positions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        collect(params: INonfungiblePositionManager.CollectParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decreaseLiquidity(params: INonfungiblePositionManager.DecreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseLiquidity(params: INonfungiblePositionManager.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(params: INonfungiblePositionManager.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(spender: string, tokenId: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        positions(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, _approved: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweepToken(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOfOwnerByIndex(owner: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unwrapWETH9(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
