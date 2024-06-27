import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LidoLevV3Interface extends utils.Interface {
    functions: {
        "AAVE()": FunctionFragment;
        "BALANCER()": FunctionFragment;
        "CURVE()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_BPS()": FunctionFragment;
        "STETH()": FunctionFragment;
        "STRATEGIST_ROLE()": FunctionFragment;
        "WETH()": FunctionFragment;
        "WSTETH()": FunctionFragment;
        "aToken()": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOfAsset()": FunctionFragment;
        "borrowBps()": FunctionFragment;
        "createAaveDebt(uint256)": FunctionFragment;
        "debtToken()": FunctionFragment;
        "divest(uint256)": FunctionFragment;
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
    getFunction(nameOrSignatureOrTopic: "AAVE" | "BALANCER" | "CURVE" | "DEFAULT_ADMIN_ROLE" | "MAX_BPS" | "STETH" | "STRATEGIST_ROLE" | "WETH" | "WSTETH" | "aToken" | "asset" | "balanceOfAsset" | "borrowBps" | "createAaveDebt" | "debtToken" | "divest" | "getLTVRatio" | "getRoleAdmin" | "grantRole" | "hasRole" | "invest" | "rebalance" | "receiveFlashLoan" | "renounceRole" | "revokeRole" | "setBorrowBps" | "setSlippageBps" | "slippageBps" | "supportsInterface" | "sweep" | "totalLockedValue" | "upgradeTo" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "BALANCER", values?: undefined): string;
    encodeFunctionData(functionFragment: "CURVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "STETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "STRATEGIST_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WSTETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "aToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOfAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAaveDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "debtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "divest", values: [BigNumberish]): string;
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
    decodeFunctionResult(functionFragment: "BALANCER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CURVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STRATEGIST_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WSTETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAaveDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "divest", data: BytesLike): Result;
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
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface LidoLevV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LidoLevV3Interface;
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
        BALANCER(overrides?: CallOverrides): Promise<[string]>;
        CURVE(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        STETH(overrides?: CallOverrides): Promise<[string]>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<[string]>;
        WETH(overrides?: CallOverrides): Promise<[string]>;
        WSTETH(overrides?: CallOverrides): Promise<[string]>;
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
    BALANCER(overrides?: CallOverrides): Promise<string>;
    CURVE(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    STETH(overrides?: CallOverrides): Promise<string>;
    STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
    WETH(overrides?: CallOverrides): Promise<string>;
    WSTETH(overrides?: CallOverrides): Promise<string>;
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
        BALANCER(overrides?: CallOverrides): Promise<string>;
        CURVE(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STETH(overrides?: CallOverrides): Promise<string>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<string>;
        WETH(overrides?: CallOverrides): Promise<string>;
        WSTETH(overrides?: CallOverrides): Promise<string>;
        aToken(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOfAsset(overrides?: CallOverrides): Promise<BigNumber>;
        borrowBps(overrides?: CallOverrides): Promise<BigNumber>;
        createAaveDebt(wethAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        debtToken(overrides?: CallOverrides): Promise<string>;
        divest(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
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
        BALANCER(overrides?: CallOverrides): Promise<BigNumber>;
        CURVE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        STETH(overrides?: CallOverrides): Promise<BigNumber>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        WSTETH(overrides?: CallOverrides): Promise<BigNumber>;
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
        BALANCER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CURVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STRATEGIST_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WSTETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
