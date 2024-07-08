/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {IChildERC20, IChildERC20Interface} from "../IChildERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IChildERC20__factory {
  static readonly abi = _abi;

  static createInterface(): IChildERC20Interface {
    return new utils.Interface(_abi) as IChildERC20Interface;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IChildERC20 {
    return new Contract(address, _abi, signerOrProvider) as IChildERC20;
  }
}
