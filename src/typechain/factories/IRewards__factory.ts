/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRewards, IRewardsInterface } from "../IRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "bool",
        name: "shouldAccrue",
        type: "bool",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "comet",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRewardOwed",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "owed",
            type: "uint256",
          },
        ],
        internalType: "struct CometStructs.RewardOwed",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRewards__factory {
  static readonly abi = _abi;
  static createInterface(): IRewardsInterface {
    return new utils.Interface(_abi) as IRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRewards {
    return new Contract(address, _abi, signerOrProvider) as IRewards;
  }
}
