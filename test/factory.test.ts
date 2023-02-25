// DarwinSwap Factory test.

import { expect } from "chai";
import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import * as hardhat from "hardhat";
import { ethers, upgrades } from "hardhat";
import { DarwinSwapFactory, DarwinSwapLister, DarwinSwapPair, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { TestERC20 } from "../typechain-types/test";

const ZERO = "0x0000000000000000000000000000000000000000";
const ZEROT = "0x0000000000000000000000000000000000000003";

const PROPOSAL = {
  ownToks: {
    tokenTaxOnSell: 0,
    tokenTaxOnBuy: 0
  },
  addedToks: {
    tokenA1TaxOnSell: 0,
    tokenB1TaxOnSell: 0,
    tokenA1TaxOnBuy: 0,
    tokenB1TaxOnBuy: 0,
    tokenA2TaxOnSell: 0,
    tokenB2TaxOnSell: 0,
    tokenA2TaxOnBuy: 250,
    tokenB2TaxOnBuy: 250
  },
  status: 0,
  refundOwnToks1: false,
  validator: ZERO,
  valid: false,
  official: false,
  owner: ZERO,
  feeReceiver: ZEROT,
  antiDumpTriggerPrice: ethers.utils.parseEther("1")
}

describe("Test Suite", function () {






  async function deployFixture() {
    const [owner, addr1, addr2] = await hardhat.ethers.getSigners();
    const erc20Factory = await ethers.getContractFactory("TestERC20");
    const weth = await erc20Factory.deploy("Wrapped BNB", "WBNB") as TestERC20;
    const token = await erc20Factory.deploy("Token", "TKN") as TestERC20;
    const lockerFactory = await ethers.getContractFactory("TokenLocker");
    const locker = await lockerFactory.deploy() as TokenLocker;
    const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");
    const library = await tokenomics2LibFactory.deploy() as Tokenomics2Library;
    const darwinRouterFactory = await ethers.getContractFactory("DarwinSwapRouter", {libraries: {Tokenomics2Library: library.address}});
    const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});
    const darwinListerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});
    const pairFactory = await ethers.getContractFactory("DarwinSwapPair", {libraries: {Tokenomics2Library: library.address}});
    const lister = await darwinListerFactory.deploy() as DarwinSwapLister;
    const factory = await darwinFactoryFactory.deploy(lister.address) as DarwinSwapFactory;
    await lister.setFactory(factory.address);
    const router = await darwinRouterFactory.deploy(factory.address, weth.address) as DarwinSwapRouter;
    await factory.setRouter(router.address);
    await factory.setFeeTo(owner.address);
    return {owner, addr1, addr2, weth, token, locker, library, lister, factory, router, erc20Factory, pairFactory};
  }






  // FACTORY
  describe("Factory", function () {
    it("The function `getPair(address,address)` returns `address(0)` if the pair does not exist", async function () {
      const { factory, weth, token } = await loadFixture(deployFixture);
      expect(await factory.getPair(weth.address, token.address)).to.be.equal(ZERO);
    });

    it("When a pair is created, its `token0()` and `token1()` equal to the addresses used to create it", async function () {
      const { lister, weth, token, pairFactory } = await loadFixture(deployFixture);
      const pairAddress = await lister.callStatic.createPair(weth.address, token.address);
      expect(await lister.createPair(weth.address, token.address)).to.not.be.equal(ZERO);
      const pair = pairFactory.attach(pairAddress) as DarwinSwapPair;
      const [tokenA, tokenB] = weth.address > token.address ? [token.address, weth.address] : [weth.address, token.address];
      expect(await pair.token0()).to.be.equal(tokenA);
      expect(await pair.token1()).to.be.equal(tokenB);
    });

    it("The function `allPairsLength()` correctly keeps track of all the created pairs", async function () {
      const { factory, lister, weth, token } = await loadFixture(deployFixture);
      expect(await factory.allPairsLength()).to.be.equal(0);
      await lister.createPair(weth.address, token.address);
      expect(await factory.allPairsLength()).to.be.equal(1);
    });
  });

  // LISTER
  describe("Lister", function () {
    it("Anyone can create a pair", async function () {
      const { lister, addr1, weth, token } = await loadFixture(deployFixture);
      expect(await lister.connect(addr1).createPair(weth.address, token.address)).to.not.be.reverted;
    });

    it("When a pair is created, if `createPair(address,address)` is called again with the same tokens, it reverts", async function () {
      const { lister, weth, token } = await loadFixture(deployFixture);
      await lister.createPair(weth.address, token.address);
      await expect(lister.createPair(weth.address, token.address)).to.be.revertedWith("DarwinSwap: PAIR_EXISTS");
    });

    it("Tokenomics proposal can only be made either by the token owner or by the dev address", async function () {
      const { lister, addr1, addr2, erc20Factory } = await loadFixture(deployFixture);
      const token1 = await erc20Factory.connect(addr1).deploy("Test Token 1", "TTKN1") as TestERC20;
      await expect(await lister.connect(addr1).proposeToken(token1.address, PROPOSAL)).to.not.be.reverted;
      const token2 = await erc20Factory.connect(addr1).deploy("Test Token 2", "TTKN2") as TestERC20;
      await expect(lister.connect(addr2).proposeToken(token2.address, PROPOSAL)).to.be.reverted;
      await expect(await lister.proposeToken(token2.address, PROPOSAL)).to.not.be.reverted;
    });
  });
});