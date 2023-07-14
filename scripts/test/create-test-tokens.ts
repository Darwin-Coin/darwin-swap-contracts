import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, Tokenomics2Library } from "../../typechain-types";
import { addr } from "../constants";

const ZERO = "0x0000000000000000000000000000000000000000";

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
      tokenA2TaxOnBuy: 250,
      tokenB2TaxOnBuy: 250,
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
    feeReceiver: "0x6d2E09bECCeED18FBd21F22d0A9D7967BCe208ef",
    purpose: "Test Purpose"
  }

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  const HOW_MANY = 5;
  const WETH = "0xB25406f5135eB6274c648B9B69A9218284904cFb"
  const LISTER = "0xBcB50160947767852493491062AbA4b3a716f0c9";
  const TO = "0x63a0704e005776B153248A500Dfd950873AFB186";

  // DECLARE LIBRARY FACTORY
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");

  //! [ATTACH] TOKENOMICS2
  const library = tokenomics2LibFactory.attach("0xE13B894f0b079c2F0B071AEaD77926E26108C1F8") as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Attached Tokenomics 2.0 Library at: ${library.address}`);

  // DECLARE FACTORY
  const listerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});
  const tokenFactory = await ethers.getContractFactory("TestERC20");

  //! [ATTACH] MASTERCHEF
  const lister = listerFactory.attach(LISTER) as DarwinSwapLister;
  await lister.deployed();
  console.log(`🔨 Attached Lister at: ${lister.address}`);

  const listOfficial = await lister.listOfficialToken(WETH);
  await listOfficial.wait();

  for (let i = 0; i < HOW_MANY; i ++) {

    //* ADD POOL
    try {
      const token = await tokenFactory.deploy("Test Token " + i, "TEST" + i, TO);
      await token.deployed();
      if (i < HOW_MANY/2) {
        const list = await lister.listToken(token.address, PROPOSAL);
        await list.wait();
      }
      const transferOwnership = await token.transferOwnership(TO);
      await transferOwnership.wait();
      if (i < HOW_MANY/2) {
        console.log(`Deployed ${await token.symbol()} at ${token.address} (with taxes)`);
      } else {
        console.log(`Deployed ${await token.symbol()} at ${token.address}`);
      }
    } catch {
      console.log("ERROR DEPLOYING TOKEN!")
    }
  }

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
