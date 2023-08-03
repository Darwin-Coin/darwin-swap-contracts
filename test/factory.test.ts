// DarwinSwap Factory test.

import { expect } from "chai";
import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapPair, DarwinSwapRouter, Tokenomics2Library } from "../typechain-types";
import { TestERC20 } from "../typechain-types/contracts/test/TestERC20";
import { BigNumber } from "ethers";

const ZERO = "0x0000000000000000000000000000000000000000";
const ZEROT = "0x0000000000000000000000000000000000000003";

enum TokenStatus {
  UNLISTED,
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
    tokenB2TaxOnBuy: 0,
    refundOnSell: 0,
    refundOnBuy: 0,
    tokenB1SellToADG: 0,
    tokenB1BuyToADG: 0,
    tokenB2SellToADG: 0,
    tokenB2BuyToADG: 0
  },
  status: TokenStatus.UNLISTED,
  validator: ZERO,
  valid: false,
  official: false,
  owner: ZERO,
  feeReceiver: ZEROT,
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
    PROPOSAL.addedToks.refundOnSell = 0;
    PROPOSAL.addedToks.refundOnBuy = 0;
    PROPOSAL.addedToks.tokenB1SellToADG = 0;
    PROPOSAL.addedToks.tokenB1BuyToADG = 0;
    PROPOSAL.addedToks.tokenB2SellToADG = 0;
    PROPOSAL.addedToks.tokenB2BuyToADG = 0;
    PROPOSAL.purpose = "not empty";
    PROPOSAL.feeReceiver = ZEROT;
    return PROPOSAL;
  }



  async function deployFixture() {
    const [owner, addr1, addr2, tokenomicsFeeReceiver] = await hardhat.ethers.getSigners();
    const erc20Factory = await ethers.getContractFactory("TestERC20");
    const weth = await erc20Factory.deploy("Wrapped BNB", "WBNB", owner.address) as TestERC20;
    await weth.deposit({value: eth("1000000")});
    const darwin = await erc20Factory.deploy("Darwin", "DARWIN", owner.address) as TestERC20;
    const token = await erc20Factory.deploy("Token", "TKN", owner.address) as TestERC20;
    const token1 = await erc20Factory.deploy("Token1", "TKN1", owner.address) as TestERC20;
    const busd = await erc20Factory.deploy("Binance USD", "BUSD", owner.address) as TestERC20;
    const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");
    const bundlesFactory = await ethers.getContractFactory("DarwinLiquidityBundles");
    const masterChefFactory = await ethers.getContractFactory("DarwinMasterChef");
    const masterChef = await masterChefFactory.deploy(darwin.address, addr1.address, await time.latest()) as DarwinMasterChef;
    await darwin.transferOwnership(masterChef.address);
    const library = await tokenomics2LibFactory.deploy() as Tokenomics2Library;
    const darwinRouterFactory = await ethers.getContractFactory("DarwinSwapRouter", {libraries: {Tokenomics2Library: library.address}});
    const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});
    const darwinListerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});
    const pairFactory = await ethers.getContractFactory("DarwinSwapPair", {libraries: {Tokenomics2Library: library.address}});
    const lister = await darwinListerFactory.deploy() as DarwinSwapLister;
    const factory = await darwinFactoryFactory.deploy(lister.address, masterChef.address, busd.address) as DarwinSwapFactory;
    await lister.setFactory(factory.address);
    const router = await darwinRouterFactory.deploy(factory.address, weth.address) as DarwinSwapRouter;
    await factory.setRouter(router.address);
    await factory.setFeeTo(owner.address);
      fixtureProp = proposal();
      fixtureProp.addedToks.tokenA2TaxOnBuy = 250;
      fixtureProp.status = TokenStatus.LISTED;
      fixtureProp.validator = owner.address;
      fixtureProp.valid = true;
      fixtureProp.official = true;
      fixtureProp.owner = owner.address;
      fixtureProp.feeReceiver = tokenomicsFeeReceiver.address;
      fixtureProp.addedToks.tokenB1SellToADG = 250;
    await lister.listToken(darwin.address, fixtureProp);
    const bundles = bundlesFactory.attach(await factory.liquidityBundles()) as DarwinLiquidityBundles;
    return {owner, addr1, addr2, weth, token, token1, library, lister, factory, router, masterChef, busd, erc20Factory, pairFactory, bundles, darwin};
  }




  async function pairFixture() {
    const { busd, lister, weth, token, router, owner, addr1, addr2, factory, pairFactory, darwin } = await loadFixture(deployFixture);
    await lister.listToken(token.address, fixtureProp);
    await lister.listOfficialToken(weth.address);
    await lister.listOfficialToken(busd.address);
    await token.approve(router.address, eth("10000000000"));
    await weth.approve(router.address, eth("10000000000"));
    await busd.approve(router.address, eth("10000000000"));
    await darwin.approve(router.address, eth("10000000000"));
    await router.addLiquidity(darwin.address, weth.address, eth("1000"), eth("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600);
    await router.addLiquidity(token.address, weth.address, eth("1000"), eth("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600);
    await router.addLiquidity(busd.address, weth.address, eth("10000"), eth("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600);
    const darwinPair = await factory.getPair(darwin.address, weth.address);
    const pairAddress = await factory.getPair(token.address, weth.address);
    const pair = pairFactory.attach(pairAddress) as DarwinSwapPair;
    const addedToks = (await lister.tokenInfo(token.address)).addedToks;
    return { lister, weth, token, router, owner, addr1, addr2, pair, addedToks, darwin, darwinPair, pairFactory };
  }






  async function unofficialPairFixture() {
    const { lister, weth, token, router, owner, addr1, addr2, factory, pairFactory } = await loadFixture(deployFixture);
    await lister.listToken(token.address, fixtureProp);
    await lister.listToken(weth.address, proposal());
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

  // ROUTER
  describe("Router", function () {
    it("AddLiquidityETH works", async function () {
      const { erc20Factory, router, owner } = await loadFixture(deployFixture);
      const token = await erc20Factory.deploy("Test Token 2", "TTKN2", owner.address) as TestERC20;
      await token.approve(router.address, ethers.utils.parseEther("1"));
      await expect(await router.addLiquidityETH(token.address, ethers.utils.parseEther("1"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600, {value: ethers.utils.parseEther("1")})).to.not.be.reverted;
    });

    it("AddLiquidity works", async function () {
      const { erc20Factory, router, owner } = await loadFixture(deployFixture);
      const token = await erc20Factory.deploy("Test Token 2", "TTKN2", owner.address) as TestERC20;
      const token2 = await erc20Factory.deploy("Test Token 2", "TTKN2", owner.address) as TestERC20;
      await token.approve(router.address, ethers.utils.parseEther("1"));
      await token2.approve(router.address, ethers.utils.parseEther("1"));
      await expect(await router.addLiquidity(token.address, token2.address, ethers.utils.parseEther("1"), ethers.utils.parseEther("1"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600)).to.not.be.reverted;
    });

    it("SwapETHForToken works without approving anything", async function () {
      const { erc20Factory, router, owner } = await loadFixture(deployFixture);
      const token = await erc20Factory.deploy("Test Token 2", "TTKN2", owner.address) as TestERC20;
      await token.approve(router.address, ethers.utils.parseEther("1"));
      await router.addLiquidityETH(token.address, ethers.utils.parseEther("1"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600, {value: ethers.utils.parseEther("1")});
      await expect(await router.swapExactETHForTokensSupportingFeeOnTransferTokens(ethers.utils.parseEther("0.01"), [router.WETH(), token.address], owner.address, Math.floor(Date.now() / 1000) + 600, {value: ethers.utils.parseEther("1")})).to.not.be.reverted;
    });

    it("Tokenomics Potential Exploit", async function () {
      const { router, owner, weth, darwin, darwinPair, pairFactory } = await loadFixture(pairFixture);
      const swaps = 30;
      const balanceBefore = await darwin.balanceOf(owner.address);
      const ethBalanceBefore = await owner.getBalance();
      console.log("          1️⃣  ETH Balance (before): " + ethers.utils.formatEther(ethBalanceBefore));
      console.log("          2️⃣  Darwin Balance (before): " + ethers.utils.formatEther(balanceBefore));
      console.log(`          3️⃣  Pair Balance (before): ${ethers.utils.formatEther(await darwin.balanceOf(darwinPair))} DARWIN - ${ethers.utils.formatEther(await weth.balanceOf(darwinPair))} ETH`);
      console.log("");
      await router.swapExactETHForTokensSupportingFeeOnTransferTokens(eth("0"), [weth.address, darwin.address], owner.address, await time.latest() + 1000, {value: eth("500")});
      for (let i = 0; i < swaps; i ++) {
        await router.swapExactTokensForETHSupportingFeeOnTransferTokens(eth("250"), eth("0"), [darwin.address, weth.address], owner.address, await time.latest() + 1000);
        await router.swapExactETHForTokensSupportingFeeOnTransferTokens(eth("0"), [weth.address, darwin.address], owner.address, await time.latest() + 1000, {value: eth("250")});
      };
      console.log("             DONE " + swaps + " SWAPS");
      const pairContract = pairFactory.attach(darwinPair);
      const adg = await pairContract.antiDumpGuard();
      const adgFactory = await ethers.getContractFactory("AntiDumpGuard");
      const adgContract = adgFactory.attach(adg);
      console.log("          1️⃣  ETH Balance (before inject): " + ethers.utils.formatEther(await owner.getBalance()));
      console.log("          2️⃣  Darwin Balance (before inject): " + ethers.utils.formatEther(await darwin.balanceOf(owner.address)));
      console.log(`          3️⃣  Pair Balance (before inject): ${ethers.utils.formatEther(await darwin.balanceOf(darwinPair))} DARWIN - ${ethers.utils.formatEther(await weth.balanceOf(darwinPair))} ETH`);
      console.log("          1️⃣  ETH Balance of ADG (before inject): " + ethers.utils.formatEther(await weth.balanceOf(adg)));
      console.log("          2️⃣  Darwin Balance of ADG (before inject): " + ethers.utils.formatEther(await darwin.balanceOf(adg)));
      console.log("");
      console.log("             BUYBACK AND PAIR (INJECT)");
      console.log("");
      await adgContract.buyBackAndPair(darwin.address);
      console.log("          1️⃣  ETH Balance (after inject): " + ethers.utils.formatEther(await owner.getBalance()));
      console.log("          2️⃣  Darwin Balance (after inject): " + ethers.utils.formatEther(await darwin.balanceOf(owner.address)));
      console.log(`          3️⃣  Pair Balance (after inject): ${ethers.utils.formatEther(await darwin.balanceOf(darwinPair))} DARWIN - ${ethers.utils.formatEther(await weth.balanceOf(darwinPair))} ETH`);
      console.log("          1️⃣  ETH Balance of ADG (after inject): " + ethers.utils.formatEther(await weth.balanceOf(adg)));
      console.log("          2️⃣  Darwin Balance of ADG (after inject): " + ethers.utils.formatEther(await darwin.balanceOf(adg)));
      console.log("");
      let balanceAfter = await darwin.balanceOf(owner.address);
      await router.swapExactTokensForETHSupportingFeeOnTransferTokens(balanceAfter.sub(balanceBefore), eth("0"), [darwin.address, weth.address], owner.address, await time.latest() + 1000);
      balanceAfter = await darwin.balanceOf(owner.address);
      const ethBalanceAfter = await owner.getBalance();
      console.log("          1️⃣  ETH Balance (after): " + ethers.utils.formatEther(ethBalanceAfter));
      console.log("          2️⃣  Darwin Balance (after): " + ethers.utils.formatEther(balanceAfter));
      console.log(`          3️⃣  Pair Balance (after): ${ethers.utils.formatEther(await darwin.balanceOf(darwinPair))} DARWIN - ${ethers.utils.formatEther(await weth.balanceOf(darwinPair))} ETH`);
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
        const token1 = await erc20Factory.connect(addr1).deploy("Test Token 1", "TTKN1", addr1.address) as TestERC20;
        await expect(await lister.connect(addr1).listToken(token1.address, PROPOSAL)).to.not.be.reverted;
        const token2 = await erc20Factory.connect(addr1).deploy("Test Token 2", "TTKN2", addr1.address) as TestERC20;
        await expect(lister.connect(addr2).listToken(token2.address, PROPOSAL)).to.be.reverted;
        await expect(await lister.listToken(token2.address, PROPOSAL)).to.not.be.reverted;
      });
    });

    // LISTER - TOKEN LISTING
    describe("Token Listing", function () {
      it("Tokens can set Tokenomics 1.0 when listing a token on buys or sells, and on coins or tokens, up to 20% per buy or sell", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.addedToks.tokenA1TaxOnSell = 2000;
        await expect(await lister.listToken(token.address, PROPOSAL)).to.not.be.reverted;
        prop.addedToks.tokenA1TaxOnSell = 2001;
        await expect(lister.listToken(token1.address, PROPOSAL)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
      });

      it("Tokenomics 1.0 takes tokens from the user", async function () {
        const SWAPAMOUNT = "1";
        fixtureProp = proposal();
        fixtureProp.addedToks.tokenA1TaxOnSell = 1000;
        const { owner, router, token, weth, pair, addedToks } = await loadFixture(pairFixture);
        const arrivedAmount = eth(SWAPAMOUNT).sub(eth(SWAPAMOUNT).mul(addedToks.tokenA1TaxOnSell).div(10000));
        const reserves = await pair.getReserves()
        const amountOut = await router.getAmountOut(arrivedAmount, reserves.reserve1, reserves.reserve0);
        await expect(await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(eth(SWAPAMOUNT), 0, [token.address, weth.address], owner.address, Math.floor(Date.now() / 1000) + 600)).to.
          changeTokenBalances(token, [owner.address, pair.address], [eth("-" + SWAPAMOUNT), arrivedAmount]).
          changeTokenBalances(weth, [owner.address, pair.address], [amountOut, "-" + amountOut.toString()]);
      });

      it("Tokens can set Tokenomics 2.0 when listing a token on buys or sells, and on coins or tokens, up to 10% per buy or sell", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.addedToks.tokenA2TaxOnSell = 1000;
        await expect(await lister.listToken(token.address, prop)).to.not.be.reverted;
        prop.addedToks.tokenA2TaxOnSell = 1001;
        await expect(lister.listToken(token1.address, prop)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
      });

      it("Tokenomics 2.0 takes tokens from the liquidity pool", async function () {
        const SWAPAMOUNT = "1";
        fixtureProp = proposal();
        fixtureProp.addedToks.tokenA2TaxOnSell = 1000;
        const { owner, router, token, weth, pair, addedToks } = await loadFixture(pairFixture);
        const arrivedAmount = eth(SWAPAMOUNT).sub(eth(SWAPAMOUNT).mul(addedToks.tokenA2TaxOnSell).div(10000));
        const reserves = await pair.getReserves()
        const amountOut = await router.getAmountOut(eth(SWAPAMOUNT), reserves.reserve1, reserves.reserve0);
        await expect(await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(eth(SWAPAMOUNT), 0, [token.address, weth.address], owner.address, Math.floor(Date.now() / 1000) + 600)).to.
          changeTokenBalances(token, [owner.address, pair.address], [eth("-" + SWAPAMOUNT), arrivedAmount]).
          changeTokenBalances(weth, [owner.address, pair.address], [amountOut, "-" + amountOut.toString()]);
      });

      it("Tokens can set Tokenomics 1.0 and Tokenomics 2.0 when listing a token up to X% per buy or sell", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.addedToks.tokenA2TaxOnSell = 1000;
        prop.addedToks.tokenA1TaxOnSell = 2000;
        await expect(await lister.listToken(token.address, prop)).to.not.be.reverted;
        prop.addedToks.tokenA2TaxOnSell = 1001;
        await expect(lister.listToken(token1.address, prop)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
        prop.addedToks.tokenA2TaxOnSell = 1000;
        prop.addedToks.tokenA1TaxOnSell = 2001;
        await expect(lister.listToken(token1.address, prop)).to.be.revertedWith("DarwinSwap: INVALID_REQUESTED_TOKENOMICS");
      });

      it("When they set Tokenomics on a contract they must say what the purpose of taxing is", async function () {
        const { lister, token, token1 } = await loadFixture(deployFixture);
        let prop = proposal();
        prop.purpose = "";
        await expect(lister.listToken(token.address, prop)).to.be.revertedWith("DarwinSwap: EMPTY_PURPOSE");
      });

      it("Tokenomics only work when the 'other' token is 'official'", async function () {
        const SWAPAMOUNT = "1";
        fixtureProp = proposal();
        fixtureProp.addedToks.tokenA1TaxOnSell = 1000;
        const { token, weth, pair, router, owner } = await loadFixture(unofficialPairFixture);
        await expect(await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(eth(SWAPAMOUNT), 0, [token.address, weth.address], owner.address, Math.floor(Date.now() / 1000) + 600)).to.
          changeTokenBalances(token, [owner.address, pair.address], [eth("-" + SWAPAMOUNT), eth(SWAPAMOUNT)]);
      });
    });    
  });

  describe("Bundles", function () {
    it("Enter bundle works", async function () {
      const { bundles, lister, router, weth, token, owner } = await loadFixture(deployFixture);
      const t1 = await token.approve(router.address, ethers.utils.parseEther("1000"));
      await t1.wait();
      const t2 = await router.addLiquidityETH(token.address, ethers.utils.parseEther("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600, {value: ethers.utils.parseEther("1")});
      await t2.wait();
      const t3 = await lister.listToken(token.address, PROPOSAL);
      await t3.wait();
      const t4 = await token.transfer(bundles.address, ethers.utils.parseEther("1000"));
      await t4.wait();
      expect(await bundles.enterBundle(token.address, ethers.utils.parseEther("10"), {value: ethers.utils.parseEther("1")})).to.not.be.reverted;
    });

    it("Enter bundle works with farm in masterchef", async function () {
      const { bundles, lister, router, weth, token, owner, masterChef, factory } = await loadFixture(deployFixture);
      const t1 = await token.approve(router.address, ethers.utils.parseEther("1000"));
      await t1.wait();
      const t2 = await router.addLiquidityETH(token.address, ethers.utils.parseEther("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600, {value: ethers.utils.parseEther("1")});
      await t2.wait();
      const t3 = await lister.listToken(token.address, PROPOSAL);
      await t3.wait();
      const t4 = await token.transfer(bundles.address, ethers.utils.parseEther("1000"));
      await t4.wait();
      const t5 = await masterChef.addPool(100, await factory.getPair(token.address, weth.address), 150, 150, 0, false);
      await t5.wait();
      expect(await bundles.enterBundle(token.address, ethers.utils.parseEther("10"), {value: ethers.utils.parseEther("1")})).to.not.be.reverted;
    });
  });

  describe("MasterChef", function () {
    it("Deposit works", async function () {
      const { router, weth, token, owner, masterChef, factory, pairFactory } = await loadFixture(deployFixture);
      const t1 = await token.approve(router.address, ethers.utils.parseEther("1000"));
      await t1.wait();
      const t2 = await router.addLiquidityETH(token.address, ethers.utils.parseEther("1000"), 0, 0, owner.address, Math.floor(Date.now() / 1000) + 600, {value: ethers.utils.parseEther("1")});
      await t2.wait();
      const pair = pairFactory.attach(await factory.getPair(token.address, weth.address));
      const t3 = await masterChef.addPool(100, pair.address, 250, 150, 0, false);
      await t3.wait();
      const t4 = await pair.approve(masterChef.address, await pair.balanceOf(owner.address));
      await t4.wait();
      expect(await masterChef.depositByLPToken(pair.address, await pair.balanceOf(owner.address), false, 0)).to.not.be.reverted;
    });
  });
});