"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEthAddress = exports.RouterAddress = exports.SymbioticEscrow = exports.SymbioticVault = exports.EscrowAddress = exports.WStEthAddress = exports.StETHAddress = exports.UltraLRTAddress = exports.EigenDelegatorAddress = exports.EigenStETHStrategy = void 0;
let _EigenStETHStrategy = "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3";
let _EigenDelegatorAddress = "0xA44151489861Fe9e3055d95adC98FbD462B948e7";
let _UltraLRTAddress = "0x3b07A1A5de80f9b22DE0EC6C44C6E59DDc1C5f41";
let _StETHAddress = "0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034";
let _WStEthAddress = "0x8d09a4502Cc8Cf1547aD300E066060D043f6982D";
let _EscrowAddress = "0x84eF1F1A7f14A237c4b1DA8d13548123879FC3A9";
let _SymbioticVault = "0x9666aB93452dC300C6b7412936D114bF1F737B1B";
let _SymbioticEscrow = "0xe1A274343d23BCb148e838256665baFb250c4937";
let _RouterAddress = "0xB56aC485418304f20F21e8169db757c2261532e2"; // TODO deploy
let _WEthAddress = "0x94373a4919B3240D86eA41593D5eBa789FEF3848"; // holeksy
if (process.env.NEXT_PUBLIC_NETWORK_TYPE === "mainnet") {
    _EigenStETHStrategy = "0x93c4b944D05dfe6df7645A86cd2206016c51564D";
    _EigenDelegatorAddress = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
    _UltraLRTAddress = "0x5cfD50De188a36d2089927c5a14E143DC65Af780";
    _StETHAddress = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
    _WStEthAddress = "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0";
    _EscrowAddress = "0x9c3756d38a0eAbeA8594F4CE039fbb536d8d47eb";
    _SymbioticVault = "0x33795E56250d50065a20E923707fD7396cd938C9";
    _SymbioticEscrow = "0x35F06781C871038Fffe6F7515d8dE6915051815C";
    _RouterAddress = "0x379a56089623AE0c22F56417AB28319AD8DCF1Cc";
    _WEthAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
}
exports.EigenStETHStrategy = _EigenStETHStrategy;
exports.EigenDelegatorAddress = _EigenDelegatorAddress;
exports.UltraLRTAddress = _UltraLRTAddress;
exports.StETHAddress = _StETHAddress;
exports.WStEthAddress = _WStEthAddress;
exports.EscrowAddress = _EscrowAddress;
exports.SymbioticVault = _SymbioticVault;
exports.SymbioticEscrow = _SymbioticEscrow;
exports.RouterAddress = _RouterAddress;
exports.WEthAddress = _WEthAddress;
