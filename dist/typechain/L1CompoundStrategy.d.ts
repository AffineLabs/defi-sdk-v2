import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L1CompoundStrategyInterface extends utils.Interface {
    functions: {
        "COMP()": FunctionFragment;
        "COMPTROLLER()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "ROUTER()": FunctionFragment;
        "STRATEGIST()": FunctionFragment;
        "WETH()": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "cToken()": FunctionFragment;
        "claimRewards(uint256)": FunctionFragment;
        "divest(uint256)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "invest(uint256)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "COMP" | "COMPTROLLER" | "DEFAULT_ADMIN_ROLE" | "ROUTER" | "STRATEGIST" | "WETH" | "asset" | "balanceOfAsset" | "cToken" | "claimRewards" | "divest" | "getRoleAdmin" | "grantRole" | "hasRole" | "invest" | "renounceRole" | "revokeRole" | "supportsInterface" | "sweep" | "totalLockedValue" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "COMP", values?: undefined): string;
    encodeFunctionData(functionFragment: "COMPTROLLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGIST", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "cToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "divest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "invest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sweep", values: [string]): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "COMP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COMPTROLLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGIST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface L1CompoundStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1CompoundStrategyInterface;
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
        COMP(overrides?: CallOverrides): Promise<[string]>;
        COMPTROLLER(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        ROUTER(overrides?: CallOverrides): Promise<[string]>;
        STRATEGIST(overrides?: CallOverrides): Promise<[string]>;
        WETH(overrides?: CallOverrides): Promise<[string]>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOfAsset(overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        cToken(overrides?: CallOverrides): Promise<[string]>;
        claimRewards(minAssetsFromReward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    COMP(overrides?: CallOverrides): Promise<string>;
    COMPTROLLER(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    ROUTER(overrides?: CallOverrides): Promise<string>;
    STRATEGIST(overrides?: CallOverrides): Promise<string>;
    WETH(overrides?: CallOverrides): Promise<string>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
    cToken(overrides?: CallOverrides): Promise<string>;
    claimRewards(minAssetsFromReward: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    divest(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    invest(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    sweep(token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalLockedValue(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        COMP(overrides?: CallOverrides): Promise<string>;
        COMPTROLLER(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        ROUTER(overrides?: CallOverrides): Promise<string>;
        STRATEGIST(overrides?: CallOverrides): Promise<string>;
        WETH(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        cToken(overrides?: CallOverrides): Promise<string>;
        claimRewards(minAssetsFromReward: BigNumberish, overrides?: CallOverrides): Promise<void>;
        divest(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        invest(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        sweep(token: string, overrides?: CallOverrides): Promise<void>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        COMP(overrides?: CallOverrides): Promise<BigNumber>;
        COMPTROLLER(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST(overrides?: CallOverrides): Promise<BigNumber>;
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        cToken(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(minAssetsFromReward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalLockedValue(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        COMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COMPTROLLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGIST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(minAssetsFromReward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
