import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L2BridgeEscrowInterface extends utils.Interface {
    functions: {
        "asset()": FunctionFragment;
        "clearFunds(uint256,bytes)": FunctionFragment;
        "governance()": FunctionFragment;
        "rescueFunds(uint256,bytes)": FunctionFragment;
        "vault()": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
        "wormholeRouter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "asset" | "clearFunds" | "governance" | "rescueFunds" | "vault" | "withdraw" | "wormholeRouter"): FunctionFragment;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "clearFunds", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "rescueFunds", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "wormholeRouter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wormholeRouter", data: BytesLike): Result;
    events: {
        "TransferToVault(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TransferToVault"): EventFragment;
}
export interface TransferToVaultEventObject {
    assets: BigNumber;
}
export type TransferToVaultEvent = TypedEvent<[
    BigNumber
], TransferToVaultEventObject>;
export type TransferToVaultEventFilter = TypedEventFilter<TransferToVaultEvent>;
export interface L2BridgeEscrow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L2BridgeEscrowInterface;
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
        asset(overrides?: CallOverrides): Promise<[string]>;
        clearFunds(assets: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        governance(overrides?: CallOverrides): Promise<[string]>;
        rescueFunds(amount: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        wormholeRouter(overrides?: CallOverrides): Promise<[string]>;
    };
    asset(overrides?: CallOverrides): Promise<string>;
    clearFunds(assets: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    governance(overrides?: CallOverrides): Promise<string>;
    rescueFunds(amount: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    withdraw(amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    wormholeRouter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        asset(overrides?: CallOverrides): Promise<string>;
        clearFunds(assets: BigNumberish, exitProof: BytesLike, overrides?: CallOverrides): Promise<void>;
        governance(overrides?: CallOverrides): Promise<string>;
        rescueFunds(amount: BigNumberish, exitProof: BytesLike, overrides?: CallOverrides): Promise<void>;
        vault(overrides?: CallOverrides): Promise<string>;
        withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        wormholeRouter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TransferToVault(uint256)"(assets?: null): TransferToVaultEventFilter;
        TransferToVault(assets?: null): TransferToVaultEventFilter;
    };
    estimateGas: {
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        clearFunds(assets: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        governance(overrides?: CallOverrides): Promise<BigNumber>;
        rescueFunds(amount: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        wormholeRouter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearFunds(assets: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rescueFunds(amount: BigNumberish, exitProof: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        wormholeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
