import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace CometStructs {
    type AssetInfoStruct = {
        offset: BigNumberish;
        asset: string;
        priceFeed: string;
        scale: BigNumberish;
        borrowCollateralFactor: BigNumberish;
        liquidateCollateralFactor: BigNumberish;
        liquidationFactor: BigNumberish;
        supplyCap: BigNumberish;
    };
    type AssetInfoStructOutput = [
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        offset: number;
        asset: string;
        priceFeed: string;
        scale: BigNumber;
        borrowCollateralFactor: BigNumber;
        liquidateCollateralFactor: BigNumber;
        liquidationFactor: BigNumber;
        supplyCap: BigNumber;
    };
    type TotalsBasicStruct = {
        baseSupplyIndex: BigNumberish;
        baseBorrowIndex: BigNumberish;
        trackingSupplyIndex: BigNumberish;
        trackingBorrowIndex: BigNumberish;
        totalSupplyBase: BigNumberish;
        totalBorrowBase: BigNumberish;
        lastAccrualTime: BigNumberish;
        pauseFlags: BigNumberish;
    };
    type TotalsBasicStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        baseSupplyIndex: BigNumber;
        baseBorrowIndex: BigNumber;
        trackingSupplyIndex: BigNumber;
        trackingBorrowIndex: BigNumber;
        totalSupplyBase: BigNumber;
        totalBorrowBase: BigNumber;
        lastAccrualTime: number;
        pauseFlags: number;
    };
    type TotalsCollateralStruct = {
        totalSupplyAsset: BigNumberish;
        _reserved: BigNumberish;
    };
    type TotalsCollateralStructOutput = [BigNumber, BigNumber] & {
        totalSupplyAsset: BigNumber;
        _reserved: BigNumber;
    };
    type UserBasicStruct = {
        principal: BigNumberish;
        baseTrackingIndex: BigNumberish;
        baseTrackingAccrued: BigNumberish;
        assetsIn: BigNumberish;
        _reserved: BigNumberish;
    };
    type UserBasicStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        principal: BigNumber;
        baseTrackingIndex: BigNumber;
        baseTrackingAccrued: BigNumber;
        assetsIn: number;
        _reserved: number;
    };
    type UserCollateralStruct = {
        balance: BigNumberish;
        _reserved: BigNumberish;
    };
    type UserCollateralStructOutput = [BigNumber, BigNumber] & {
        balance: BigNumber;
        _reserved: BigNumber;
    };
}
export interface ICometInterface extends utils.Interface {
    functions: {
        "balanceOf(address)": FunctionFragment;
        "baseIndexScale()": FunctionFragment;
        "baseMinForRewards()": FunctionFragment;
        "baseScale()": FunctionFragment;
        "baseToken()": FunctionFragment;
        "baseTokenPriceFeed()": FunctionFragment;
        "baseTrackingBorrowSpeed()": FunctionFragment;
        "baseTrackingSupplySpeed()": FunctionFragment;
        "getAssetInfo(uint8)": FunctionFragment;
        "getAssetInfoByAddress(address)": FunctionFragment;
        "getBorrowRate(uint256)": FunctionFragment;
        "getPrice(address)": FunctionFragment;
        "getSupplyRate(uint256)": FunctionFragment;
        "getUtilization()": FunctionFragment;
        "numAssets()": FunctionFragment;
        "supply(address,uint256)": FunctionFragment;
        "totalBorrow()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalsBasic()": FunctionFragment;
        "totalsCollateral(address)": FunctionFragment;
        "userBasic(address)": FunctionFragment;
        "userCollateral(address,address)": FunctionFragment;
        "withdraw(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "baseIndexScale" | "baseMinForRewards" | "baseScale" | "baseToken" | "baseTokenPriceFeed" | "baseTrackingBorrowSpeed" | "baseTrackingSupplySpeed" | "getAssetInfo" | "getAssetInfoByAddress" | "getBorrowRate" | "getPrice" | "getSupplyRate" | "getUtilization" | "numAssets" | "supply" | "totalBorrow" | "totalSupply" | "totalsBasic" | "totalsCollateral" | "userBasic" | "userCollateral" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "baseIndexScale", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseMinForRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseScale", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseTokenPriceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseTrackingBorrowSpeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseTrackingSupplySpeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAssetInfoByAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "getBorrowRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getUtilization", values?: undefined): string;
    encodeFunctionData(functionFragment: "numAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "supply", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalBorrow", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalsBasic", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalsCollateral", values: [string]): string;
    encodeFunctionData(functionFragment: "userBasic", values: [string]): string;
    encodeFunctionData(functionFragment: "userCollateral", values: [string, string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseIndexScale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseMinForRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseScale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseTokenPriceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseTrackingBorrowSpeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseTrackingSupplySpeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetInfoByAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUtilization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalsBasic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userBasic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface IComet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICometInterface;
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
        balanceOf(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        baseIndexScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseMinForRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseScale(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseToken(overrides?: CallOverrides): Promise<[string]>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<[string]>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetInfo(i: BigNumberish, overrides?: CallOverrides): Promise<[CometStructs.AssetInfoStructOutput]>;
        getAssetInfoByAddress(asset: string, overrides?: CallOverrides): Promise<[CometStructs.AssetInfoStructOutput]>;
        getBorrowRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPrice(priceFeed: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUtilization(overrides?: CallOverrides): Promise<[BigNumber]>;
        numAssets(overrides?: CallOverrides): Promise<[number]>;
        supply(asset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalBorrow(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalsBasic(overrides?: CallOverrides): Promise<[CometStructs.TotalsBasicStructOutput]>;
        totalsCollateral(asset: string, overrides?: CallOverrides): Promise<[CometStructs.TotalsCollateralStructOutput]>;
        userBasic(arg0: string, overrides?: CallOverrides): Promise<[CometStructs.UserBasicStructOutput]>;
        userCollateral(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[CometStructs.UserCollateralStructOutput]>;
        withdraw(asset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    balanceOf(arg0: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    baseIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
    baseMinForRewards(overrides?: CallOverrides): Promise<BigNumber>;
    baseScale(overrides?: CallOverrides): Promise<BigNumber>;
    baseToken(overrides?: CallOverrides): Promise<string>;
    baseTokenPriceFeed(overrides?: CallOverrides): Promise<string>;
    baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<BigNumber>;
    baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<BigNumber>;
    getAssetInfo(i: BigNumberish, overrides?: CallOverrides): Promise<CometStructs.AssetInfoStructOutput>;
    getAssetInfoByAddress(asset: string, overrides?: CallOverrides): Promise<CometStructs.AssetInfoStructOutput>;
    getBorrowRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPrice(priceFeed: string, overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getUtilization(overrides?: CallOverrides): Promise<BigNumber>;
    numAssets(overrides?: CallOverrides): Promise<number>;
    supply(asset: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalBorrow(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalsBasic(overrides?: CallOverrides): Promise<CometStructs.TotalsBasicStructOutput>;
    totalsCollateral(asset: string, overrides?: CallOverrides): Promise<CometStructs.TotalsCollateralStructOutput>;
    userBasic(arg0: string, overrides?: CallOverrides): Promise<CometStructs.UserBasicStructOutput>;
    userCollateral(arg0: string, arg1: string, overrides?: CallOverrides): Promise<CometStructs.UserCollateralStructOutput>;
    withdraw(asset: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        baseIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseMinForRewards(overrides?: CallOverrides): Promise<BigNumber>;
        baseScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseToken(overrides?: CallOverrides): Promise<string>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<string>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetInfo(i: BigNumberish, overrides?: CallOverrides): Promise<CometStructs.AssetInfoStructOutput>;
        getAssetInfoByAddress(asset: string, overrides?: CallOverrides): Promise<CometStructs.AssetInfoStructOutput>;
        getBorrowRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(priceFeed: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        numAssets(overrides?: CallOverrides): Promise<number>;
        supply(asset: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalBorrow(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalsBasic(overrides?: CallOverrides): Promise<CometStructs.TotalsBasicStructOutput>;
        totalsCollateral(asset: string, overrides?: CallOverrides): Promise<CometStructs.TotalsCollateralStructOutput>;
        userBasic(arg0: string, overrides?: CallOverrides): Promise<CometStructs.UserBasicStructOutput>;
        userCollateral(arg0: string, arg1: string, overrides?: CallOverrides): Promise<CometStructs.UserCollateralStructOutput>;
        withdraw(asset: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        balanceOf(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        baseIndexScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseMinForRewards(overrides?: CallOverrides): Promise<BigNumber>;
        baseScale(overrides?: CallOverrides): Promise<BigNumber>;
        baseToken(overrides?: CallOverrides): Promise<BigNumber>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<BigNumber>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetInfo(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetInfoByAddress(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(priceFeed: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        numAssets(overrides?: CallOverrides): Promise<BigNumber>;
        supply(asset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalBorrow(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalsBasic(overrides?: CallOverrides): Promise<BigNumber>;
        totalsCollateral(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        userBasic(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        userCollateral(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(asset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(arg0: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        baseIndexScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseMinForRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTokenPriceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTrackingBorrowSpeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseTrackingSupplySpeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetInfo(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetInfoByAddress(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(priceFeed: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(utilization: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUtilization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supply(asset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalBorrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalsBasic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalsCollateral(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userBasic(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userCollateral(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(asset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
