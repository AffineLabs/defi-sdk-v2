"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConvexBooster__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "crv",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_stake",
                type: "bool",
            },
        ],
        name: "depositAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
        ],
        name: "poolInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "lptoken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "gauge",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "crvRewards",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "stash",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "shutdown",
                        type: "bool",
                    },
                ],
                internalType: "struct IConvexBooster.PoolInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "poolLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IConvexBooster__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IConvexBooster__factory = IConvexBooster__factory;
IConvexBooster__factory.abi = _abi;
