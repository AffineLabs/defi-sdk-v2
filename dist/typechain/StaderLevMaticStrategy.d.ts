import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StaderLevMaticStrategyInterface extends utils.Interface {
    functions: {
        "AAVE()": FunctionFragment;
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "BALANCER()": FunctionFragment;
        "BALANCER_QUERY()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MATICX()": FunctionFragment;
        "MAX_BPS()": FunctionFragment;
        "POOL()": FunctionFragment;
        "POOL_ID()": FunctionFragment;
        "STADER()": FunctionFragment;
        "STRATEGIST_ROLE()": FunctionFragment;
        "WMATIC()": FunctionFragment;
        "aToken()": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "borrowBps()": FunctionFragment;
        "createAaveDebt(uint256)": FunctionFragment;
        "debtToken()": FunctionFragment;
        "divest(uint256)": FunctionFragment;
        "executeOperation(address[],uint256[],uint256[],address,bytes)": FunctionFragment;
        "getLTVRatio()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "invest(uint256)": FunctionFragment;
        "rebalance()": FunctionFragment;
        "receiveFlashLoan(address[],uint256[],uint256[],bytes)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setBorrowBps(uint256)": FunctionFragment;
        "setSlippageBps(uint256)": FunctionFragment;
        "slippageBps()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "totalLockedValue()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AAVE" | "ADDRESSES_PROVIDER" | "BALANCER" | "BALANCER_QUERY" | "DEFAULT_ADMIN_ROLE" | "MATICX" | "MAX_BPS" | "POOL" | "POOL_ID" | "STADER" | "STRATEGIST_ROLE" | "WMATIC" | "aToken" | "asset" | "balanceOfAsset" | "borrowBps" | "createAaveDebt" | "debtToken" | "divest" | "executeOperation" | "getLTVRatio" | "getRoleAdmin" | "grantRole" | "hasRole" | "invest" | "rebalance" | "receiveFlashLoan" | "renounceRole" | "revokeRole" | "setBorrowBps" | "setSlippageBps" | "slippageBps" | "supportsInterface" | "sweep" | "totalLockedValue" | "upgradeTo" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "BALANCER", values?: undefined): string;
    encodeFunctionData(functionFragment: "BALANCER_QUERY", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MATICX", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "STADER", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGIST_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "WMATIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "aToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAaveDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "divest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeOperation", values: [string[], BigNumberish[], BigNumberish[], string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getLTVRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "invest", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rebalance", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [string[], BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setBorrowBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSlippageBps", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "slippageBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sweep", values: [string]): string;
    encodeFunctionData(functionFragment: "totalLockedValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BALANCER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BALANCER_QUERY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MATICX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STADER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGIST_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WMATIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAaveDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLTVRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSlippageBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slippageBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalLockedValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
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
export interface StaderLevMaticStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StaderLevMaticStrategyInterface;
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
        AAVE(overrides?: CallOverrides): Promise<[string]>;
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        BALANCER(overrides?: CallOverrides): Promise<[string]>;
        BALANCER_QUERY(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MATICX(overrides?: CallOverrides): Promise<[string]>;
        MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        POOL(overrides?: CallOverrides): Promise<[string]>;
        POOL_ID(overrides?: CallOverrides): Promise<[string]>;
        STADER(overrides?: CallOverrides): Promise<[string]>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<[string]>;
        WMATIC(overrides?: CallOverrides): Promise<[string]>;
        aToken(overrides?: CallOverrides): Promise<[string]>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOfAsset(overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        borrowBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        createAaveDebt(wethAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        debtToken(overrides?: CallOverrides): Promise<[string]>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeOperation(arg0: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getLTVRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rebalance(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        receiveFlashLoan(arg0: string[], amounts: BigNumberish[], arg2: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setBorrowBps(_borrowBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setSlippageBps(_slippageBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        slippageBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        upgradeTo(newStrategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    AAVE(overrides?: CallOverrides): Promise<string>;
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    BALANCER(overrides?: CallOverrides): Promise<string>;
    BALANCER_QUERY(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MATICX(overrides?: CallOverrides): Promise<string>;
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    POOL(overrides?: CallOverrides): Promise<string>;
    POOL_ID(overrides?: CallOverrides): Promise<string>;
    STADER(overrides?: CallOverrides): Promise<string>;
    STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
    WMATIC(overrides?: CallOverrides): Promise<string>;
    aToken(overrides?: CallOverrides): Promise<string>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
    borrowBps(overrides?: CallOverrides): Promise<BigNumber>;
    createAaveDebt(wethAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    debtToken(overrides?: CallOverrides): Promise<string>;
    divest(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeOperation(arg0: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getLTVRatio(overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    invest(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rebalance(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    receiveFlashLoan(arg0: string[], amounts: BigNumberish[], arg2: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setBorrowBps(_borrowBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setSlippageBps(_slippageBps: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    slippageBps(overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    sweep(token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
    upgradeTo(newStrategy: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        AAVE(overrides?: CallOverrides): Promise<string>;
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        BALANCER(overrides?: CallOverrides): Promise<string>;
        BALANCER_QUERY(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MATICX(overrides?: CallOverrides): Promise<string>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        POOL(overrides?: CallOverrides): Promise<string>;
        POOL_ID(overrides?: CallOverrides): Promise<string>;
        STADER(overrides?: CallOverrides): Promise<string>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
        WMATIC(overrides?: CallOverrides): Promise<string>;
        aToken(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBps(overrides?: CallOverrides): Promise<BigNumber>;
        createAaveDebt(wethAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        debtToken(overrides?: CallOverrides): Promise<string>;
        divest(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        executeOperation(arg0: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        getLTVRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        invest(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        rebalance(overrides?: CallOverrides): Promise<void>;
        receiveFlashLoan(arg0: string[], amounts: BigNumberish[], arg2: BigNumberish[], userData: BytesLike, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setBorrowBps(_borrowBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSlippageBps(_slippageBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        slippageBps(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        sweep(token: string, overrides?: CallOverrides): Promise<void>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newStrategy: string, overrides?: CallOverrides): Promise<void>;
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
        AAVE(overrides?: CallOverrides): Promise<BigNumber>;
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        BALANCER(overrides?: CallOverrides): Promise<BigNumber>;
        BALANCER_QUERY(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MATICX(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        POOL(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_ID(overrides?: CallOverrides): Promise<BigNumber>;
        STADER(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        WMATIC(overrides?: CallOverrides): Promise<BigNumber>;
        aToken(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBps(overrides?: CallOverrides): Promise<BigNumber>;
        createAaveDebt(wethAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        debtToken(overrides?: CallOverrides): Promise<BigNumber>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeOperation(arg0: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getLTVRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rebalance(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        receiveFlashLoan(arg0: string[], amounts: BigNumberish[], arg2: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setBorrowBps(_borrowBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setSlippageBps(_slippageBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        slippageBps(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newStrategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BALANCER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BALANCER_QUERY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MATICX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STADER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WMATIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAaveDebt(wethAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        debtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        divest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeOperation(arg0: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getLTVRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        invest(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rebalance(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        receiveFlashLoan(arg0: string[], amounts: BigNumberish[], arg2: BigNumberish[], userData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setBorrowBps(_borrowBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setSlippageBps(_slippageBps: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        slippageBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalLockedValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeTo(newStrategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
