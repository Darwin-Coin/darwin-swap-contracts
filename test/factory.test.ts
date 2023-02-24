// DarwinSwap Factory test.

import { expect } from "chai";
import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import * as hardhat from "hardhat";
import { ethers, upgrades } from "hardhat";
import { DarwinSwapFactory, DarwinSwapLister, DarwinSwapPair, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";

const ZERO = "0x0000000000000000000000000000000000000000";

describe("Test Suite", function () {






  async function deployFixture() {
    const [owner, addr1, addr2] = await hardhat.ethers.getSigners();
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
    // TODO: SET WETH ADDRESS
    const router = await darwinRouterFactory.deploy(factory.address, addr1.address) as DarwinSwapRouter;
    await factory.setRouter(router.address);
    await factory.setFeeTo(owner.address);
    return {owner, addr1, addr2, locker, library, lister, factory, router, pairFactory};
  }






  // FACTORY
  describe("Factory", function () {
    it("The function `getPair(address,address)` returns `address(0)` if the pair does not exist", async function () {
      const { factory, addr1, addr2 } = await loadFixture(deployFixture);
      expect(await factory.getPair(addr1.address, addr2.address)).to.be.equal(ZERO);
    });

    it("When a pair is created, its `token0()` and `token1()` equal to the addresses used to create it", async function () {
      const { lister, addr1, addr2, pairFactory } = await loadFixture(deployFixture);
      const pairAddress = await lister.callStatic.createPair(addr1.address, addr2.address);
      expect(await lister.createPair(addr1.address, addr2.address)).to.not.be.equal(ZERO);
      const pair = pairFactory.attach(pairAddress) as DarwinSwapPair;
      const [tokenA, tokenB] = addr1.address > addr2.address ? [addr2.address, addr1.address] : [addr1.address, addr2.address];
      expect(await pair.token0()).to.be.equal(tokenA);
      expect(await pair.token1()).to.be.equal(tokenB);
    });

    it("The function `allPairsLength()` correctly keeps track of all the created pairs", async function () {
      const { factory, lister, addr1, addr2 } = await loadFixture(deployFixture);
      expect(await factory.allPairsLength()).to.be.equal(0);
      await lister.createPair(addr1.address, addr2.address);
      expect(await factory.allPairsLength()).to.be.equal(1);
    });
  });
});