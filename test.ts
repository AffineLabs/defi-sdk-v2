import { AffineRestakingSDK } from "./index";
import { ethers } from "ethers";
import { StETHAddress, UltraLRTAddress } from "./constants";
import dotenv from "dotenv";
dotenv.config();

describe("AffineRestakingSDK", () => {
  let sdk: AffineRestakingSDK;
  let provider: ethers.providers.JsonRpcProvider;
  let signer: ethers.Signer;

  beforeEach(() => {
    const privateKey = process.env.PK;
    if (!privateKey) {
      throw new Error("Private key is not set in the environment variables");
    }
    const rpcUrl = "https://ethereum-holesky-rpc.publicnode.com";

    const wallet = new ethers.Wallet(privateKey);
    provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    signer = wallet.connect(provider);

    sdk = new AffineRestakingSDK(provider, signer);
  });

  it("should return the correct balance", async () => {
    const contractAddress = UltraLRTAddress;
    const address = await signer.getAddress();
    // const expectedBalance = '1000';

    // Mock the balanceOf function in the contract
    // const mockBalanceOf = jest.fn();
    // mockBalanceOf.mockReturnValue(expectedBalance);
    // sdk.getBalance = mockBalanceOf;

    const balance = await sdk.getBalance(contractAddress, address);
    console.log("balance: ", balance);

    // expect(mockBalanceOf).toHaveBeenCalledWith(contractAddress, address);
    // expect(balance).toEqual(expectedBalance);
  });

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
