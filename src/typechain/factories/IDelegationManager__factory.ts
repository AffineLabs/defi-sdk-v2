/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDelegationManager,
  IDelegationManagerInterface,
} from "../IDelegationManager";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "staker",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegatedTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "withdrawer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "startBlock",
            type: "uint32",
          },
          {
            internalType: "address[]",
            name: "strategies",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]",
          },
        ],
        internalType: "struct WithdrawalInfo[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "address[][]",
        name: "",
        type: "address[][]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
    ],
    name: "completeQueuedWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
        ],
        internalType: "struct ApproverSignatureAndExpiryParams",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "delegateTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "strategies",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct QueuedWithdrawalParams[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "queueWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDelegationManager__factory {
  static readonly abi = _abi;

  static createInterface(): IDelegationManagerInterface {
    return new utils.Interface(_abi) as IDelegationManagerInterface;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IDelegationManager {
    return new Contract(address, _abi, signerOrProvider) as IDelegationManager;
  }
}
