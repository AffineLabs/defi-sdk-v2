/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniPositionValue,
  IUniPositionValueInterface,
} from "../IUniPositionValue";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "positionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "fees",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "positionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
    ],
    name: "principal",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "positionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
    ],
    name: "total",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IUniPositionValue__factory {
  static readonly abi = _abi;
  static createInterface(): IUniPositionValueInterface {
    return new utils.Interface(_abi) as IUniPositionValueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniPositionValue {
    return new Contract(address, _abi, signerOrProvider) as IUniPositionValue;
  }
}
