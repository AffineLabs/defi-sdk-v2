import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IAaveIncentivesControllerInterface extends utils.Interface {
    functions: {
        "REWARD_TOKEN()": FunctionFragment;
        "claimRewards(address[],uint256,address)": FunctionFragment;
        "claimRewardsOnBehalf(address[],uint256,address,address)": FunctionFragment;
        "getAssetData(address)": FunctionFragment;
        "getDistributionEnd()": FunctionFragment;
        "getRewardsBalance(address[],address)": FunctionFragment;
        "getUserUnclaimedRewards(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "REWARD_TOKEN" | "claimRewards" | "claimRewardsOnBehalf" | "getAssetData" | "getDistributionEnd" | "getRewardsBalance" | "getUserUnclaimedRewards"): FunctionFragment;
    encodeFunctionData(functionFragment: "REWARD_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [string[], BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "claimRewardsOnBehalf", values: [string[], BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "getAssetData", values: [string]): string;
    encodeFunctionData(functionFragment: "getDistributionEnd", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRewardsBalance", values: [string[], string]): string;
    encodeFunctionData(functionFragment: "getUserUnclaimedRewards", values: [string]): string;
    decodeFunctionResult(functionFragment: "REWARD_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewardsOnBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDistributionEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserUnclaimedRewards", data: BytesLike): Result;
    events: {};
}
export interface IAaveIncentivesController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAaveIncentivesControllerInterface;
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
        REWARD_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getDistributionEnd(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
    claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAssetData(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;
    getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        REWARD_TOKEN(overrides?: CallOverrides): Promise<string>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        REWARD_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDistributionEnd(overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        REWARD_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(assets: string[], amount: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimRewardsOnBehalf(assets: string[], amount: BigNumberish, user: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAssetData(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDistributionEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsBalance(assets: string[], user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserUnclaimedRewards(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
