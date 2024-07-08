"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRootChainManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootToken",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "depositFor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "exit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IRootChainManager__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRootChainManager__factory = IRootChainManager__factory;
