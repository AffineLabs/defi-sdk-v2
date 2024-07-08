/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3PoolOwnerActions,
  IUniswapV3PoolOwnerActionsInterface,
} from "../IUniswapV3PoolOwnerActions";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount0Requested",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1Requested",
        type: "uint128",
      },
    ],
    name: "collectProtocol",
    outputs: [
      {
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "feeProtocol0",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "feeProtocol1",
        type: "uint8",
      },
    ],
    name: "setFeeProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUniswapV3PoolOwnerActions__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3PoolOwnerActionsInterface {
    return new utils.Interface(_abi) as IUniswapV3PoolOwnerActionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3PoolOwnerActions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapV3PoolOwnerActions;
  }
}
