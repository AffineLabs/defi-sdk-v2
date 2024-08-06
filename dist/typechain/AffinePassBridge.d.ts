import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace Client {
    type EVMTokenAmountStruct = {
        token: string;
        amount: BigNumberish;
    };
    type EVMTokenAmountStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type Any2EVMMessageStruct = {
        messageId: BytesLike;
        sourceChainSelector: BigNumberish;
        sender: BytesLike;
        data: BytesLike;
        destTokenAmounts: Client.EVMTokenAmountStruct[];
    };
    type Any2EVMMessageStructOutput = [
        string,
        BigNumber,
        string,
        string,
        Client.EVMTokenAmountStructOutput[]
    ] & {
        messageId: string;
        sourceChainSelector: BigNumber;
        sender: string;
        data: string;
        destTokenAmounts: Client.EVMTokenAmountStructOutput[];
    };
}
export interface AffinePassBridgeInterface extends utils.Interface {
    functions: {
        "affinePass()": FunctionFragment;
        "bridgePass(uint64,address,uint256)": FunctionFragment;
        "ccipFee(uint64)": FunctionFragment;
        "ccipReceive((bytes32,uint64,bytes,bytes,(address,uint256)[]))": FunctionFragment;
        "chainReceiver(uint64)": FunctionFragment;
        "getRouter()": FunctionFragment;
        "initialize()": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setPaused(bool)": FunctionFragment;
        "setchainReceiver(uint64,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "whitelistDestinationChain(uint64,bool)": FunctionFragment;
        "whitelistSender(address,bool)": FunctionFragment;
        "whitelistSourceChain(uint64,bool)": FunctionFragment;
        "whitelistedDestinationChains(uint64)": FunctionFragment;
        "whitelistedSenders(address)": FunctionFragment;
        "whitelistedSourceChains(uint64)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "affinePass" | "bridgePass" | "ccipFee" | "ccipReceive" | "chainReceiver" | "getRouter" | "initialize" | "owner" | "paused" | "proxiableUUID" | "renounceOwnership" | "setPaused" | "setchainReceiver" | "supportsInterface" | "transferOwnership" | "upgradeTo" | "upgradeToAndCall" | "whitelistDestinationChain" | "whitelistSender" | "whitelistSourceChain" | "whitelistedDestinationChains" | "whitelistedSenders" | "whitelistedSourceChains" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "affinePass", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgePass", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ccipFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "ccipReceive", values: [Client.Any2EVMMessageStruct]): string;
    encodeFunctionData(functionFragment: "chainReceiver", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setchainReceiver", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "whitelistDestinationChain", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "whitelistSender", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "whitelistSourceChain", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "whitelistedDestinationChains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "whitelistedSenders", values: [string]): string;
    encodeFunctionData(functionFragment: "whitelistedSourceChains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "affinePass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgePass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccipFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ccipReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setchainReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistDestinationChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistSourceChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedDestinationChains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedSenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistedSourceChains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "BridgeReceipt(bytes32,uint64,address,uint256)": EventFragment;
        "BridgeRequest(bytes32,uint64,address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeReceipt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeRequest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface BridgeReceiptEventObject {
    messageId: string;
    sourceChainSelector: BigNumber;
    receiver: string;
    id: BigNumber;
}
export type BridgeReceiptEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], BridgeReceiptEventObject>;
export type BridgeReceiptEventFilter = TypedEventFilter<BridgeReceiptEvent>;
export interface BridgeRequestEventObject {
    messageId: string;
    destinationChainSelector: BigNumber;
    sender: string;
    id: BigNumber;
}
export type BridgeRequestEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], BridgeRequestEventObject>;
export type BridgeRequestEventFilter = TypedEventFilter<BridgeRequestEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface AffinePassBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AffinePassBridgeInterface;
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
        affinePass(overrides?: CallOverrides): Promise<[string]>;
        bridgePass(destinationChainSelector: BigNumberish, receiver: string, id: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ccipFee(destinationChainSelector: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        chainReceiver(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRouter(overrides?: CallOverrides): Promise<[string]>;
        initialize(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPaused(_paused: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setchainReceiver(chainSelector: BigNumberish, reciever: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        whitelistDestinationChain(_destinationChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        whitelistSender(_sender: string, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        whitelistSourceChain(_sourceChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        whitelistedDestinationChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        whitelistedSenders(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        whitelistedSourceChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    affinePass(overrides?: CallOverrides): Promise<string>;
    bridgePass(destinationChainSelector: BigNumberish, receiver: string, id: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ccipFee(destinationChainSelector: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    chainReceiver(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRouter(overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPaused(_paused: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setchainReceiver(chainSelector: BigNumberish, reciever: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    whitelistDestinationChain(_destinationChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    whitelistSender(_sender: string, _whitelist: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    whitelistSourceChain(_sourceChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    whitelistedDestinationChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    whitelistedSenders(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    whitelistedSourceChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    withdraw(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        affinePass(overrides?: CallOverrides): Promise<string>;
        bridgePass(destinationChainSelector: BigNumberish, receiver: string, id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        ccipFee(destinationChainSelector: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: CallOverrides): Promise<void>;
        chainReceiver(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRouter(overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setPaused(_paused: boolean, overrides?: CallOverrides): Promise<void>;
        setchainReceiver(chainSelector: BigNumberish, reciever: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        whitelistDestinationChain(_destinationChainSelector: BigNumberish, _whitelist: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistSender(_sender: string, _whitelist: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistSourceChain(_sourceChainSelector: BigNumberish, _whitelist: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistedDestinationChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        whitelistedSenders(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        whitelistedSourceChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "BridgeReceipt(bytes32,uint64,address,uint256)"(messageId?: BytesLike | null, sourceChainSelector?: BigNumberish | null, receiver?: null, id?: null): BridgeReceiptEventFilter;
        BridgeReceipt(messageId?: BytesLike | null, sourceChainSelector?: BigNumberish | null, receiver?: null, id?: null): BridgeReceiptEventFilter;
        "BridgeRequest(bytes32,uint64,address,uint256)"(messageId?: BytesLike | null, destinationChainSelector?: BigNumberish | null, sender?: null, id?: null): BridgeRequestEventFilter;
        BridgeRequest(messageId?: BytesLike | null, destinationChainSelector?: BigNumberish | null, sender?: null, id?: null): BridgeRequestEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        affinePass(overrides?: CallOverrides): Promise<BigNumber>;
        bridgePass(destinationChainSelector: BigNumberish, receiver: string, id: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        ccipFee(destinationChainSelector: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        chainReceiver(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRouter(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPaused(_paused: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setchainReceiver(chainSelector: BigNumberish, reciever: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        whitelistDestinationChain(_destinationChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        whitelistSender(_sender: string, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        whitelistSourceChain(_sourceChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        whitelistedDestinationChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedSenders(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        whitelistedSourceChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        affinePass(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridgePass(destinationChainSelector: BigNumberish, receiver: string, id: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ccipFee(destinationChainSelector: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        chainReceiver(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPaused(_paused: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setchainReceiver(chainSelector: BigNumberish, reciever: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        whitelistDestinationChain(_destinationChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        whitelistSender(_sender: string, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        whitelistSourceChain(_sourceChainSelector: BigNumberish, _whitelist: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        whitelistedDestinationChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedSenders(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistedSourceChains(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
