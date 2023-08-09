import * as hardhat from "hardhat";
import { ethers } from "hardhat";

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
    tokenB1SellToLI: 0,
    tokenB1BuyToLI: 0,
    tokenB2SellToLI: 0,
    tokenB2BuyToLI: 0
  },
  status: TokenStatus.UNLISTED,
  validator: ZERO,
  valid: false,
  official: false,
  owner: ZERO,
  feeReceiver: ZEROT,
  purpose: "not empty",
  unlockTime: 0
}

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  const listerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: "0x9eaD81904642D8cD05aBe98CDA5040DD3F04f3c8"}});
  const lister = listerFactory.attach("0x1034a378643dd9b286455E2A135e2d2Bb45F3D3b");

  console.log({proposal: await lister.tokenInfo("0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd")})

  const tx = await lister.listToken("0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", PROPOSAL);

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
