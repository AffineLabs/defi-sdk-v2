import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IMasterChef {
    type PoolInfoStruct = {
        lpToken: string;
        allocPoint: BigNumberish;
        lastRewardBlock: BigNumberish;
        accSushiPerShare: BigNumberish;
    };
    type PoolInfoStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        lpToken: string;
        allocPoint: BigNumber;
        lastRewardBlock: BigNumber;
        accSushiPerShare: BigNumber;
    };
    type PoolInfoV2Struct = {
        allocPoint: BigNumberish;
        lastRewardTime: BigNumberish;
        accSushiPerShare: BigNumberish;
    };
    type PoolInfoV2StructOutput = [BigNumber, BigNumber, BigNumber] & {
        allocPoint: BigNumber;
        lastRewardTime: BigNumber;
        accSushiPerShare: BigNumber;
    };
    type UserInfoStruct = {
        amount: BigNumberish;
        rewardDebt: BigNumberish;
    };
    type UserInfoStructOutput = [BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
    };
}
export interface IMasterChefInterface extends utils.Interface {
    functions: {
        "deposit(uint256,uint256,address)": FunctionFragment;
        "deposit(uint256,uint256)": FunctionFragment;
        "harvest(uint256,address)": FunctionFragment;
        "pendingSushi(uint256,address)": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "totalAllocPoint()": FunctionFragment;
        "updatePool(uint256)": FunctionFragment;
        "userInfo(uint256,address)": FunctionFragment;
        "withdraw(uint256,uint256)": FunctionFragment;
        "withdrawAndHarvest(uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit(uint256,uint256,address)" | "deposit(uint256,uint256)" | "harvest" | "pendingSushi" | "poolInfo" | "poolLength" | "totalAllocPoint" | "updatePool" | "userInfo" | "withdraw" | "withdrawAndHarvest"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit(uint256,uint256,address)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deposit(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "harvest", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pendingSushi", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "updatePool", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "userInfo", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAndHarvest", values: [BigNumberish, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "deposit(uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingSushi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAndHarvest", data: BytesLike): Result;
    events: {};
}
export interface IMasterChef extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMasterChefInterface;
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
        "deposit(uint256,uint256,address)"(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "deposit(uint256,uint256)"(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        harvest(pid: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            pending: BigNumber;
        }>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<[IMasterChef.PoolInfoStructOutput]>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<[IMasterChef.UserInfoStructOutput]>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawAndHarvest(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    "deposit(uint256,uint256,address)"(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "deposit(uint256,uint256)"(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    harvest(pid: BigNumberish, to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<IMasterChef.PoolInfoStructOutput>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
    updatePool(_pid: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<IMasterChef.UserInfoStructOutput>;
    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawAndHarvest(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        "deposit(uint256,uint256,address)"(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: CallOverrides): Promise<void>;
        "deposit(uint256,uint256)"(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        harvest(pid: BigNumberish, to: string, overrides?: CallOverrides): Promise<void>;
        pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<IMasterChef.PoolInfoStructOutput>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<IMasterChef.PoolInfoV2StructOutput>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<IMasterChef.UserInfoStructOutput>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawAndHarvest(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        "deposit(uint256,uint256,address)"(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "deposit(uint256,uint256)"(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        harvest(pid: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawAndHarvest(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "deposit(uint256,uint256,address)"(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "deposit(uint256,uint256)"(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        harvest(pid: BigNumberish, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pendingSushi(_pid: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updatePool(_pid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        userInfo(pid: BigNumberish, user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawAndHarvest(_pid: BigNumberish, _amount: BigNumberish, _to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
