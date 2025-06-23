import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("TimeLockedWallet", function () {
  async function deployTimeLockedWalletFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    // Set unlock time 1 hour (3600 seconds) in the future
    const unlockTime = (await time.latest()) + 3600;

    const lockedAmount = ethers.parseEther("1"); // 1 ETH

    const TimeLockedWallet = await ethers.getContractFactory("TimeLockedWallet");
    const wallet = await TimeLockedWallet.deploy(unlockTime, owner.address, {
      value: lockedAmount,
    });

    return { wallet, unlockTime, owner, otherAccount, lockedAmount };
  }

  describe("Deployment", function () {
    it("should store the correct owner and unlockTime", async function () {
      const { wallet, owner, unlockTime } = await loadFixture(deployTimeLockedWalletFixture);

      expect(await wallet.owner()).to.equal(owner.address);
      expect(await wallet.unlockTime()).to.equal(unlockTime);
    });
  });
});
