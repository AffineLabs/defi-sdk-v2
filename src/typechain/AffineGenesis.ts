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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface AffineGenesisInterface extends utils.Interface {
  functions: {
    "MAX_DEV_TOKENS()": FunctionFragment;
    "MAX_MINT_PER_TX()": FunctionFragment;
    "MAX_PUBLIC_MINT()": FunctionFragment;
    "MAX_SUPPLY()": FunctionFragment;
    "MAX_WHITELIST_MINT()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseURI()": FunctionFragment;
    "devTokens()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getPrice()": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isWhitelisted(address,bytes32[])": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "mintDev(uint256)": FunctionFragment;
    "mintWhitelist(uint256,bytes32[])": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "saleIsActive()": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
    "setMerkleRoot(bytes32)": FunctionFragment;
    "setPrice(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "togglePublicSale()": FunctionFragment;
    "toggleWhitelistSale()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "whitelistSaleIsActive()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_DEV_TOKENS"
      | "MAX_MINT_PER_TX"
      | "MAX_PUBLIC_MINT"
      | "MAX_SUPPLY"
      | "MAX_WHITELIST_MINT"
      | "approve"
      | "balanceOf"
      | "baseURI"
      | "devTokens"
      | "getApproved"
      | "getPrice"
      | "isApprovedForAll"
      | "isWhitelisted"
      | "merkleRoot"
      | "mint"
      | "mintDev"
      | "mintWhitelist"
      | "name"
      | "owner"
      | "ownerOf"
      | "renounceOwnership"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "saleIsActive"
      | "setApprovalForAll"
      | "setBaseURI"
      | "setMerkleRoot"
      | "setPrice"
      | "supportsInterface"
      | "symbol"
      | "togglePublicSale"
      | "toggleWhitelistSale"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
      | "transferOwnership"
      | "whitelistSaleIsActive"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_DEV_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_MINT_PER_TX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_PUBLIC_MINT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_SUPPLY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_WHITELIST_MINT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(functionFragment: "devTokens", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "mintDev",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintWhitelist",
    values: [BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "saleIsActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMerkleRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "togglePublicSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleWhitelistSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistSaleIsActive",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MAX_DEV_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_MINT_PER_TX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_PUBLIC_MINT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_SUPPLY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_WHITELIST_MINT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "devTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintDev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saleIsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "togglePublicSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleWhitelistSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistSaleIsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "ConsecutiveTransfer(uint256,uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "WhitelistMerkleRootUpdated(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConsecutiveTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistMerkleRootUpdated"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface ConsecutiveTransferEventObject {
  fromTokenId: BigNumber;
  toTokenId: BigNumber;
  from: string;
  to: string;
}
export type ConsecutiveTransferEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  ConsecutiveTransferEventObject
>;

export type ConsecutiveTransferEventFilter =
  TypedEventFilter<ConsecutiveTransferEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface WhitelistMerkleRootUpdatedEventObject {
  merkleRoot: string;
}
export type WhitelistMerkleRootUpdatedEvent = TypedEvent<
  [string],
  WhitelistMerkleRootUpdatedEventObject
>;

export type WhitelistMerkleRootUpdatedEventFilter =
  TypedEventFilter<WhitelistMerkleRootUpdatedEvent>;

export interface AffineGenesis extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AffineGenesisInterface;

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
    MAX_DEV_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_MINT_PER_TX(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_SUPPLY(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    baseURI(overrides?: CallOverrides): Promise<[string]>;

    devTokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWhitelisted(
      user: string,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    mintDev(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    mintWhitelist(
      quantity: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    saleIsActive(overrides?: CallOverrides): Promise<[boolean]>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setBaseURI(
      URI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setMerkleRoot(
      _merkleRoot: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrice(
      newPrice: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    togglePublicSale(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    toggleWhitelistSale(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    whitelistSaleIsActive(overrides?: CallOverrides): Promise<[boolean]>;

    withdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  MAX_DEV_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_MINT_PER_TX(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  baseURI(overrides?: CallOverrides): Promise<string>;

  devTokens(overrides?: CallOverrides): Promise<BigNumber>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPrice(overrides?: CallOverrides): Promise<BigNumber>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWhitelisted(
    user: string,
    proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  mint(
    quantity: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  mintDev(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  mintWhitelist(
    quantity: BigNumberish,
    proof: BytesLike[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  saleIsActive(overrides?: CallOverrides): Promise<boolean>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setBaseURI(
    URI: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setMerkleRoot(
    _merkleRoot: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrice(
    newPrice: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  togglePublicSale(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  toggleWhitelistSale(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  whitelistSaleIsActive(overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_DEV_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MINT_PER_TX(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<string>;

    devTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWhitelisted(
      user: string,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    mint(quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;

    mintDev(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    mintWhitelist(
      quantity: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    saleIsActive(overrides?: CallOverrides): Promise<boolean>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBaseURI(URI: string, overrides?: CallOverrides): Promise<void>;

    setMerkleRoot(
      _merkleRoot: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrice(newPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    togglePublicSale(overrides?: CallOverrides): Promise<void>;

    toggleWhitelistSale(overrides?: CallOverrides): Promise<void>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistSaleIsActive(overrides?: CallOverrides): Promise<boolean>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "ConsecutiveTransfer(uint256,uint256,address,address)"(
      fromTokenId?: BigNumberish | null,
      toTokenId?: null,
      from?: string | null,
      to?: string | null
    ): ConsecutiveTransferEventFilter;
    ConsecutiveTransfer(
      fromTokenId?: BigNumberish | null,
      toTokenId?: null,
      from?: string | null,
      to?: string | null
    ): ConsecutiveTransferEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;

    "WhitelistMerkleRootUpdated(bytes32)"(
      merkleRoot?: BytesLike | null
    ): WhitelistMerkleRootUpdatedEventFilter;
    WhitelistMerkleRootUpdated(
      merkleRoot?: BytesLike | null
    ): WhitelistMerkleRootUpdatedEventFilter;
  };

  estimateGas: {
    MAX_DEV_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MINT_PER_TX(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WHITELIST_MINT(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<BigNumber>;

    devTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWhitelisted(
      user: string,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    mintDev(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    mintWhitelist(
      quantity: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    saleIsActive(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setBaseURI(
      URI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setMerkleRoot(
      _merkleRoot: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrice(
      newPrice: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    togglePublicSale(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    toggleWhitelistSale(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    whitelistSaleIsActive(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_DEV_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_MINT_PER_TX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_PUBLIC_MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_SUPPLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WHITELIST_MINT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    devTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      user: string,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    mintDev(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    mintWhitelist(
      quantity: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    saleIsActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setBaseURI(
      URI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setMerkleRoot(
      _merkleRoot: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrice(
      newPrice: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    togglePublicSale(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    toggleWhitelistSale(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    whitelistSaleIsActive(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
