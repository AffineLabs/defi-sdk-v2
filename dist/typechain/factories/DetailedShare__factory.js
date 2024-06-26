"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailedShare__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "detailedPrice",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "num",
                        type: "uint256",
                    },
                    {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                    },
                ],
                internalType: "struct DetailedShare.Number",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "detailedTVL",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "num",
                        type: "uint256",
                    },
                    {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                    },
                ],
                internalType: "struct DetailedShare.Number",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "detailedTotalSupply",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "num",
                        type: "uint256",
                    },
                    {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                    },
                ],
                internalType: "struct DetailedShare.Number",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class DetailedShare__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DetailedShare__factory = DetailedShare__factory;
