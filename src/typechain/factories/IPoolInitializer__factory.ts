/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPoolInitializer,
  IPoolInitializerInterface,
} from "../IPoolInitializer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "createAndInitializePoolIfNecessary",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IPoolInitializer__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolInitializerInterface {
    return new utils.Interface(_abi) as IPoolInitializerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolInitializer {
    return new Contract(address, _abi, signerOrProvider) as IPoolInitializer;
  }
}
