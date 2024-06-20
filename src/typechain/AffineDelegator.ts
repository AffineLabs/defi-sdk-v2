/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface AffineDelegatorInterface extends utils.Interface {
  functions: {
    "asset()": FunctionFragment;
    "delegate(uint256)": FunctionFragment;
    "queuedAssets()": FunctionFragment;
    "requestWithdrawal(uint256)": FunctionFragment;
    "totalLockedValue()": FunctionFragment;
    "vault()": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawableAssets()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "asset"
      | "delegate"
      | "queuedAssets"
      | "requestWithdrawal"
      | "totalLockedValue"
      | "vault"
      | "withdraw"
      | "withdrawableAssets"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delegate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestWithdrawal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalLockedValue",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawableAssets",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queuedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalLockedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawableAssets",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AffineDelegator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AffineDelegatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    asset(overrides?: CallOverrides): Promise<[string]>;

    delegate(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    queuedAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    requestWithdrawal(
      assets: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    totalLockedValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawableAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  asset(overrides?: CallOverrides): Promise<string>;

  delegate(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;

  requestWithdrawal(
    assets: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;

  vault(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    asset(overrides?: CallOverrides): Promise<string>;

    delegate(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;

    requestWithdrawal(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    asset(overrides?: CallOverrides): Promise<BigNumber>;

    delegate(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    queuedAssets(overrides?: CallOverrides): Promise<BigNumber>;

    requestWithdrawal(
      assets: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    totalLockedValue(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    withdrawableAssets(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegate(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    queuedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestWithdrawal(
      assets: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    totalLockedValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawableAssets(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}