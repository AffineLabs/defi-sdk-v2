import { ethers, providers } from "ethers";

import {
  WithdrawalInfo,
  EscrowAddress,
  StETHAddress,
  EigenDelegatorAddress,
  EigenStETHStrategy,
  UltraLRTAddress,
} from "./constants";

// ABIs
import ERC20_ABI from "./abis/erc20.json";
import EIGENSTETH_ABI from "./abis/eigenlayerStrategy.json";
import ULTRAETH_ABI from "./abis/ultraEth.json";
import ESCROW_ABI from "./abis/withdrawalEscrow.json";
import DELEGATION_MANAGER_ABI from "./abis/delegationManager.json";

export class AffineRestakingSDK {
  private provider: providers.JsonRpcProvider;
  private signer: ethers.Signer;

  constructor(provider: providers.JsonRpcProvider, signer?: ethers.Signer) {
    this.provider = provider;
    this.signer = signer || this.provider.getSigner();
  }

  async getUltraEthBalance(): Promise<string> {
    const address = await this.signer.getAddress();
    const erc20Contract = new ethers.Contract(
      UltraLRTAddress,
      ERC20_ABI,
      this.signer,
    );
    const balance = await erc20Contract.balanceOf(address);
    return this._removeDecimals(balance, 26);
  }

  async getStEthBalance(): Promise<string> {
    const address = await this.signer.getAddress();
    const erc20Contract = new ethers.Contract(
      StETHAddress,
      ERC20_ABI,
      this.signer,
    );
    const balance = await erc20Contract.balanceOf(address);
    return this._removeDecimals(balance, 18);
  }

  async migratableAssets(address: string) {
    const eigenStETH = new ethers.Contract(
      EigenStETHStrategy,
      EIGENSTETH_ABI,
      this.signer,
    );
    const value = await eigenStETH.userUnderlyingView(address);
    return parseFloat(this._removeDecimals(value, 18));
  }

  async queueMigrationWithdrawal(address: string, assets: string) {
    console.log("queueMigrationWithdrawal");
    const eigenStETH = new ethers.Contract(
      EigenStETHStrategy,
      EIGENSTETH_ABI,
      this.signer,
    );
    const eigenDelegator = new ethers.Contract(
      EigenDelegatorAddress,
      DELEGATION_MANAGER_ABI,
      this.signer,
    );

    const assetUnits = ethers.utils.parseUnits(assets, 18);
    const shares = await eigenStETH.underlyingToShares(assetUnits);
    console.log("shares", shares.toString());

    const queuedWithdrawalParams = [
      [[[EigenStETHStrategy], [ethers.BigNumber.from(shares)], address]],
    ];

    const tx = await eigenDelegator.queueWithdrawals(queuedWithdrawalParams);
    return tx;
  }

  async completeMigrationWithdrawal(
    address: string,
    delegator: string,
    nonce: string,
    blockNumber: string,
    shares: string,
  ) {
    const eigenDelegator = new ethers.Contract(
      EigenDelegatorAddress,
      DELEGATION_MANAGER_ABI,
      this.signer,
    );

    const withdrawalInfos: WithdrawalInfo[] = [
      {
        staker: address,
        delegatedTo: delegator,
        withdrawer: address,
        nonce: ethers.BigNumber.from(nonce),
        startBlock: parseInt(blockNumber),
        strategies: [EigenStETHStrategy],
        shares: [ethers.BigNumber.from(shares)],
      },
    ];

    // Define the additional parameters
    const assetsArray: string[][] = [[StETHAddress]];
    const uint256Array: ethers.BigNumber[] = [ethers.BigNumber.from("0")];
    const boolArray: boolean[] = [true];

    const tx = await eigenDelegator.completeWithdrawals(
      withdrawalInfos,
      assetsArray,
      uint256Array,
      boolArray,
    );
    return tx;
  }

  async canWithdraw(amount: number) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer,
    );
    const value = await lrtVault.canWithdraw(
      this._addDecimals(amount.toString(), await asset.decimals()),
    );
    return value;
  }

  async deposit(amount: string, address: string) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer,
    );

    const assetUnits = this._addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.deposit(assetUnits, address);
    return tx;
  }

  async withdraw(amount: string, receiver: string, owner: string) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer,
    );

    const assetUnits = this._addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.withdraw(assetUnits, receiver, owner);
    return tx;
  }

  async withdrawableAssets(address: string) {
    const vault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer,
    );
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const withdrawalEscrowV2 = new ethers.Contract(
      EscrowAddress,
      ESCROW_ABI,
      this.signer,
    );

    const vaultDecimals = await vault.decimals();
    const assetDecimals = await asset.decimals();

    const resolvingEpoch = (
      await withdrawalEscrowV2.resolvingEpoch()
    ).toNumber();
    const currentEpoch = (await withdrawalEscrowV2.currentEpoch()).toNumber();

    let totalAmount = 0;
    const epochData = [];
    for (let i = 0; i <= currentEpoch; i++) {
      const shares = await withdrawalEscrowV2.userDebtShare(
        ethers.BigNumber.from(i),
        address,
      );
      const assets = await withdrawalEscrowV2.withdrawableAssets(address, i);

      epochData.push({
        epoch: i,
        assets: this._removeDecimals(assets, assetDecimals),
        shares: this._removeDecimals(shares, vaultDecimals),
        canWithdraw: i < resolvingEpoch && shares.gt(0),
      });
      totalAmount += parseFloat(this._removeDecimals(assets, assetDecimals));
    }
    return { totalAmount, epochData };
  }

  async canWithdrawEscrow(epoch: string) {
    const withdrawalEscrowV2 = new ethers.Contract(
      EscrowAddress,
      ESCROW_ABI,
      this.signer,
    );
    const value = await withdrawalEscrowV2.canWithdraw(epoch);
    return value;
  }

  async redeem(
    address: string,
    epoch: string,
  ): Promise<ethers.providers.TransactionResponse> {
    const withdrawalEscrowV2 = new ethers.Contract(
      EscrowAddress,
      ESCROW_ABI,
      this.signer,
    );

    const tx = await withdrawalEscrowV2.redeem(address, epoch);
    return tx;
  }

  async approve(
    contractAddress: string,
    spenderAddress: string,
    amount: number,
  ): Promise<ethers.providers.TransactionResponse> {
    const erc20Contract = new ethers.Contract(
      contractAddress,
      ERC20_ABI,
      this.signer,
    );
    const units = this._addDecimals(amount.toString(), await erc20Contract.decimals());
    const tx = await erc20Contract.approve(spenderAddress, units);
    return tx;
  }

  _removeDecimals(
    amount: ethers.BigNumber,
    decimals: ethers.BigNumberish,
  ): string {
    return ethers.utils.formatUnits(amount, decimals);
  }

  _addDecimals(amount: string, decimals: number): ethers.BigNumber {
    return ethers.utils.parseUnits(amount, decimals);
  }
}
