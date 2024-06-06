"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./dist/index");
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
describe("AffineRestakingSDK", () => {
  let sdk;
  let provider;
  let signer;
  beforeEach(() => {
    const privateKey = process.env.PK;
    if (!privateKey) {
      throw new Error("Private key is not set in the environment variables");
    }
    const rpcUrl = "https://ethereum-holesky-rpc.publicnode.com";
    const wallet = new ethers_1.ethers.Wallet(privateKey);
    provider = new ethers_1.ethers.providers.JsonRpcProvider(rpcUrl);
    signer = wallet.connect(provider);
    sdk = new index_1.AffineRestakingSDK(provider, signer);
  });
  it("should return the correct balance", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const contractAddress = constants_1.UltraLRTAddress;
      const address = yield signer.getAddress();
      // const expectedBalance = '1000';
      // Mock the balanceOf function in the contract
      // const mockBalanceOf = jest.fn();
      // mockBalanceOf.mockReturnValue(expectedBalance);
      // sdk.getBalance = mockBalanceOf;
      const balance = yield sdk.getBalance(contractAddress, address);
      console.log("balance: ", balance);
      // expect(mockBalanceOf).toHaveBeenCalledWith(contractAddress, address);
      // expect(balance).toEqual(expectedBalance);
    }));
  //   it('should deposit the correct amount', async () => {
  //     const contractAddress = StETHAddress;
  //     const address = await signer.getAddress();
  //     const amount = '1000';
  //     // Mock the deposit function in the contract
  //     const mockDeposit = jest.fn();
  //     sdk.deposit = mockDeposit;
  //     await sdk.deposit(amount, address);
  //     expect(mockDeposit).toHaveBeenCalledWith(amount, address);
  //   });
  // Write your tests here
});
