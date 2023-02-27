// DarwinSwap Factory test.

import { expect } from "chai";
import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import * as hardhat from "hardhat";
import { ethers, upgrades } from "hardhat";
import { DarwinSwapFactory, DarwinSwapLister, DarwinSwapPair, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { TestERC20 } from "../typechain-types/test";
import { BigNumber } from "ethers";

const ZERO = "0x0000000000000000000000000000000000000000";
const ZEROT = "0x0000000000000000000000000000000000000003";

enum TokenStatus {
  UNLISTED,
  PROPOSED,
  LISTED,
  BANNED
}

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
    tokenA2TaxOnBuy: 0,
    tokenB2TaxOnBuy: 0
  },
  status: TokenStatus.UNLISTED,
  refundOwnToks1: false,
  validator: ZERO,
  valid: false,
  official: false,
  owner: ZERO,
  feeReceiver: ZEROT,
  antiDumpTriggerPrice: eth("0"),
  purpose: "not empty"
}

function eth(num: string): BigNumber {
  return ethers.utils.parseEther(num);
}

describe("Test Suite", function () {




  let fixtureProp: any;
  function proposal() {
    PROPOSAL.addedToks.tokenA1TaxOnSell = 0;
    PROPOSAL.addedToks.tokenB1TaxOnSell = 0;
    PROPOSAL.addedToks.tokenA1TaxOnBuy = 0;
    PROPOSAL.addedToks.tokenB1TaxOnBuy = 0;
    PROPOSAL.addedToks.tokenA2TaxOnSell = 0;
    PROPOSAL.addedToks.tokenB2TaxOnSell = 0;
    PROPOSAL.addedToks.tokenA2TaxOnBuy = 0;
    PROPOSAL.addedToks.tokenB2TaxOnBuy = 0;
    PROPOSAL.purpose = "not empty";
    PROPOSAL.feeReceiver = ZEROT;
    return PROPOSAL;
  }



  async function deployFixture() {
    const [owner, addr1, addr2] = await hardhat.ethers.getSigners();
    const erc20Factory = await ethers.getContractFactory("TestERC20");
    const weth = await erc20Factory.deploy("Wrapped BNB", "WBNB") as TestERC20;
    const token = await erc20Factory.deploy("Token", "TKN") as TestERC20;
    const token1 = await erc20Factory.deploy("Token1", "TKN1") as TestERC20;
    const busd = await erc20Factory.deploy("Binance USD", "BUSD") as TestERC20;
    const lockerFactory = await ethers.getContractFactory("TokenLocker");
    const locker = await lockerFactory.deploy() as TokenLocker;
    const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");
    const library = await tokenomics2LibFactory.deploy() as Tokenomics2Library;
    const darwinRouterFactory = await ethers.getContractFactory("DarwinSwapRouter", {libraries: {Tokenomics2Library: library.address}});
    const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});
    const darwinListerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});
    const pairFactory = await ethers.getContractFactory("DarwinSwapPair", {libraries: {Tokenomics2Library: library.address}});
    const lister = await darwinListerFactory.deploy() as DarwinSwapLister;
    const factory = await darwinFactoryFactory.deploy(lister.address, busd.address) as DarwinSwapFactory;
    await lister.setFactory(factory.address);
    const router = await darwinRouterFactory.deploy(factory.address, weth.address) as DarwinSwapRouter;
    await factory.setRouter(router.address);
    await factory.setFeeTo(owner.address);
    return {owner, addr1, addr2, weth, token, token1, locker, library, lister, factory, router, busd, erc20Factory, pairFactory};
  }






  async function pairFixture() {
    const { busd, lister, weth, token, router, owner, addr1, addr2, factory, pairFactory } = await loadFixture(deployFixture);
    await lister.proposeToken(token.address, fixtureProp);
    await lister.validateToken(token.address, TokenStatus.LISTED, true);
    await lister.listOfficialToken(weth.address);
    await lister.listOfficialToken(busd.address);
    await token.approve(router.address, eth("10000000000"));
    await weth.approve(router.address, eth("10000000000"));
    await busd.approve(router.address, eth("10000000000"));
    await router.addLiquidity(token.address, weth.address, eth("1000"), eth("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600);
    await router.addLiquidity(busd.address, weth.address, eth("10000"), eth("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600);
    const pairAddress = await factory.getPair(token.address, weth.address);
    const pair = pairFactory.attach(pairAddress) as DarwinSwapPair;
    const addedToks = (await lister.tokenInfo(token.address)).addedToks;
    return { lister, weth, token, router, owner, addr1, addr2, pair, addedToks };
  }






  async function unofficialPairFixture() {
    const { lister, weth, token, router, owner, addr1, addr2, factory, pairFactory } = await loadFixture(deployFixture);
    await lister.proposeToken(token.address, fixtureProp);
    await lister.validateToken(token.address, TokenStatus.LISTED, true);
    await lister.proposeToken(weth.address, proposal());
    await lister.validateToken(weth.address, TokenStatus.LISTED, true);
    await token.approve(router.address, eth("10000000000"));
    await weth.approve(router.address, eth("10000000000"))
    await router.addLiquidity(token.address, weth.address, eth("1000"), eth("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600);
    const pairAddress = await factory.getPair(token.address, weth.address);
    const pair = pairFactory.attach(pairAddress) as DarwinSwapPair;
    const addedToks = (await lister.tokenInfo(token.address)).addedToks;
    return { lister, weth, token, router, owner, addr1, addr2, pair, addedToks };
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
    // LISTER - SECURITY
    describe("Security", function () {
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

    // LISTER - TOKEN LISTING
    describe("Token Listing", function () {
      it("Tokens can set Tokenomics 1.0 when listing a token on buys or sells, and on coins or tokens, up to 20% per buy or sell", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.addedToks.tokenA1TaxOnSell = 2000;
        await expect(await lister.proposeToken(token.address, PROPOSAL)).to.not.be.reverted;
        prop.addedToks.tokenA1TaxOnSell = 2001;
        await expect(lister.proposeToken(token1.address, PROPOSAL)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
      });

      it("Tokenomics 1.0 takes tokens from the user", async function () {
        const SWAPAMOUNT = "1";
        fixtureProp = proposal();
        fixtureProp.addedToks.tokenA1TaxOnSell = 1000;
        const { owner, router, token, weth, pair, addedToks } = await loadFixture(pairFixture);
        const arrivedAmount = eth(SWAPAMOUNT).sub(eth(SWAPAMOUNT).mul(addedToks.tokenA1TaxOnSell).div(10000));
        const reserves = await pair.getReserves()
        const amountOut = await router.getAmountOut(arrivedAmount, reserves.reserve1, reserves.reserve0);
        await expect(await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(eth(SWAPAMOUNT), [token.address, weth.address], owner.address, Math.floor(Date.now() / 1000) + 600)).to.
          changeTokenBalances(token, [owner.address, pair.address], [eth("-" + SWAPAMOUNT), arrivedAmount]).
          changeTokenBalances(weth, [owner.address, pair.address], [amountOut, "-" + amountOut.toString()]);
      });

      it("Tokens can set Tokenomics 2.0 when listing a token on buys or sells, and on coins or tokens, up to 10% per buy or sell", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.addedToks.tokenA2TaxOnSell = 1000;
        await expect(await lister.proposeToken(token.address, prop)).to.not.be.reverted;
        prop.addedToks.tokenA2TaxOnSell = 1001;
        await expect(lister.proposeToken(token1.address, prop)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
      });

      it("Tokenomics 2.0 takes tokens from the liquidity pool", async function () {
        const SWAPAMOUNT = "1";
        fixtureProp = proposal();
        fixtureProp.addedToks.tokenA2TaxOnSell = 1000;
        const { owner, router, token, weth, pair, addedToks } = await loadFixture(pairFixture);
        const arrivedAmount = eth(SWAPAMOUNT).sub(eth(SWAPAMOUNT).mul(addedToks.tokenA2TaxOnSell).div(10000));
        const reserves = await pair.getReserves()
        const amountOut = await router.getAmountOut(eth(SWAPAMOUNT), reserves.reserve1, reserves.reserve0);
        await expect(await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(eth(SWAPAMOUNT), [token.address, weth.address], owner.address, Math.floor(Date.now() / 1000) + 600)).to.
          changeTokenBalances(token, [owner.address, pair.address], [eth("-" + SWAPAMOUNT), arrivedAmount]).
          changeTokenBalances(weth, [owner.address, pair.address], [amountOut, "-" + amountOut.toString()]);
      });

      it("Tokens can set Tokenomics 1.0 and Tokenomics 2.0 when listing a token up to X% per buy or sell", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.addedToks.tokenA2TaxOnSell = 1000;
        prop.addedToks.tokenA1TaxOnSell = 2000;
        await expect(await lister.proposeToken(token.address, prop)).to.not.be.reverted;
        prop.addedToks.tokenA2TaxOnSell = 1001;
        await expect(lister.proposeToken(token1.address, prop)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
        prop.addedToks.tokenA2TaxOnSell = 1000;
        prop.addedToks.tokenA1TaxOnSell = 2001;
        await expect(lister.proposeToken(token1.address, prop)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
      });

      it("When they set Tokenomics on a contract they must list where they want the tokens to go, and what the purpose of sending them there is", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.purpose = "";
        await expect(lister.proposeToken(token.address, prop)).to.be.revertedWith("DarwinSwap: EMPTY_PURPOSE");
        prop.purpose = "not empty";
        prop.feeReceiver = ZERO;
        await expect(lister.proposeToken(token1.address, prop)).to.be.revertedWith("DarwinSwap: ZERO_ADDRESS");
      });

      it("Tokenomics only work when the 'other' token is 'official'", async function () {
        const SWAPAMOUNT = "1";
        fixtureProp = proposal();
        fixtureProp.addedToks.tokenA1TaxOnSell = 1000;
        const { token, weth, pair, router, owner } = await loadFixture(unofficialPairFixture);
        await expect(await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(eth(SWAPAMOUNT), [token.address, weth.address], owner.address, Math.floor(Date.now() / 1000) + 600)).to.
          changeTokenBalances(token, [owner.address, pair.address], [eth("-" + SWAPAMOUNT), eth(SWAPAMOUNT)]);
      });
    });
  });
});