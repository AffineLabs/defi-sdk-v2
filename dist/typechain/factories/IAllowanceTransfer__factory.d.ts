import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAllowanceTransfer, IAllowanceTransferInterface } from "../IAllowanceTransfer";
export declare class IAllowanceTransfer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "AllowanceExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExcessiveInvalidation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "Lockdown";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "newNonce";
            readonly type: "uint48";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "oldNonce";
            readonly type: "uint48";
        }];
        readonly name: "NonceInvalidation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "nonce";
            readonly type: "uint48";
        }];
        readonly name: "Permit";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "nonce";
            readonly type: "uint48";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint48";
            readonly name: "newNonce";
            readonly type: "uint48";
        }];
        readonly name: "invalidateNonces";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly internalType: "struct IAllowanceTransfer.TokenSpenderPair[]";
            readonly name: "approvals";
            readonly type: "tuple[]";
        }];
        readonly name: "lockdown";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint160";
                    readonly name: "amount";
                    readonly type: "uint160";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "expiration";
                    readonly type: "uint48";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "nonce";
                    readonly type: "uint48";
                }];
                readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
                readonly name: "details";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "sigDeadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitBatch";
            readonly name: "permitBatch";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint160";
                    readonly name: "amount";
                    readonly type: "uint160";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "expiration";
                    readonly type: "uint48";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "nonce";
                    readonly type: "uint48";
                }];
                readonly internalType: "struct IAllowanceTransfer.PermitDetails";
                readonly name: "details";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "sigDeadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitSingle";
            readonly name: "permitSingle";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }];
            readonly internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]";
            readonly name: "transferDetails";
            readonly type: "tuple[]";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IAllowanceTransferInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAllowanceTransfer;
}
