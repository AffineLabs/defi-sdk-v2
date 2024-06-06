import { AffineRestakingSDK } from "./dist/index";
import { ethers } from "ethers";
import { StETHAddress, UltraLRTAddress } from "./dist/constants";
import dotenv from "dotenv";
dotenv.config();

describe("AffineRestakingSDK", () => {
  let sdk: AffineRestakingSDK;
  let provider: ethers.providers.JsonRpcProvider;
  let signer: ethers.Signer;

  beforeEach(() => {
    const privateKey = process.env.PK;
    const rpcUrl = process.env.RPC_URL;
    if (!privateKey || !rpcUrl) {
      throw new Error("Private key or RPC are not set in the environment variables");
    }


    const wallet = new ethers.Wallet(privateKey);
    provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    signer = wallet.connect(provider);

    sdk = new AffineRestakingSDK(provider, signer);
  });

  it("should return the correct balance", async () => {
    const address = await signer.getAddress();
    // const expectedBalance = '1000';

    // Mock the balanceOf function in the contract
    // const mockBalanceOf = jest.fn();
    // mockBalanceOf.mockReturnValue(expectedBalance);
    // sdk.getBalance = mockBalanceOf;

    const balance = await sdk.getUltraEthBalance(address);
    console.log("balance: ", balance);

    // expect(mockBalanceOf).toHaveBeenCalledWith(contractAddress, address);
    // expect(balance).toEqual(expectedBalance);
  });

  it("should deposit the correct amount", async () => {
    const contractAddress = StETHAddress;
    const address = await signer.getAddress();
    const amount = "0.1";
    const units = sdk._addDecimals(amount, 18);

    // approve
    const approvalTx = await sdk.approve(
      contractAddress,
      UltraLRTAddress,
      units,
    );
    await approvalTx.wait();
    console.log("approvalTx: ", approvalTx.hash);

    // deposit
    const tx = await sdk.deposit(amount, address);
    await tx.wait();
    console.log("tx: ", tx.hash);
  }, 100000);

  it("should withdraw the correct amount", async () => {
    const contractAddress = StETHAddress;
    const receiver = await signer.getAddress();
    const owner = await signer.getAddress();
    const amount = "0.1";

    // withdraw
    const tx = await sdk.withdraw(amount, receiver, owner);
    await tx.wait();
    console.log("tx: ", tx.hash);

    //   expect(mockWithdraw).toHaveBeenCalledWith(amount, receiver, owner);
  }, 100000);

  // Write your tests here
});
