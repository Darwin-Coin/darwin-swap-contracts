// DarwinSwap Factory test.

import { expect } from "chai";
import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import * as hardhat from "hardhat";
import { ethers, upgrades } from "hardhat";
import { DarwinSwapFactory, DarwinSwapLister, DarwinSwapPair, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { TestERC20 } from "../typechain-types/test";

const ZERO = "0x0000000000000000000000000000000000000000";

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

    it("When a pair is created, if `createPair(address,address)` is called again with the same tokens, it reverts", async function () {
      const { lister, weth, token } = await loadFixture(deployFixture);
      await lister.createPair(weth.address, token.address);
      await expect(lister.createPair(weth.address, token.address)).to.be.revertedWith("DarwinSwap: PAIR_EXISTS");
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
    
  });
});