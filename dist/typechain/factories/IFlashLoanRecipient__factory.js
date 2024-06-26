"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFlashLoanRecipient__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ERC20[]",
                name: "tokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "feeAmounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "receiveFlashLoan",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IFlashLoanRecipient__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IFlashLoanRecipient__factory = IFlashLoanRecipient__factory;
