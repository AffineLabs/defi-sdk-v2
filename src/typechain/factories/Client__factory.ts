/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Client, ClientInterface } from "../Client";

const _abi = [
  {
    inputs: [],
    name: "EVM_EXTRA_ARGS_V1_TAG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Client__factory {
  static readonly abi = _abi;
  static createInterface(): ClientInterface {
    return new utils.Interface(_abi) as ClientInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Client {
    return new Contract(address, _abi, signerOrProvider) as Client;
  }
}
