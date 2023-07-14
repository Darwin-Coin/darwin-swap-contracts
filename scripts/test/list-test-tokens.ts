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

  const WETH = "0xB25406f5135eB6274c648B9B69A9218284904cFb"
  const LISTER = "0xBcB50160947767852493491062AbA4b3a716f0c9";

  // DECLARE LIBRARY FACTORY
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");

  //! [ATTACH] TOKENOMICS2
  const library = tokenomics2LibFactory.attach("0xE13B894f0b079c2F0B071AEaD77926E26108C1F8") as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Attached Tokenomics 2.0 Library at: ${library.address}`);

  // DECLARE FACTORY
  const listerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});

  //! [ATTACH] LISTER
  const lister = listerFactory.attach(LISTER) as DarwinSwapLister;
  await lister.deployed();
  console.log(`🔨 Attached Lister at: ${lister.address}`);

  const listOfficial = await lister.listOfficialToken(WETH);
  await listOfficial.wait();

  const tokens = ["0x86f2A0ecad9869CE53E54650dce863cF28362247",
      "0x4c4Ed61355Ca1604DCa7D7b5e32ac034aAA9Ef0d",
      "0x63a34cbD0C3801E82CAfD6d113594956C2a81Cb2",
      "0xDeB8c6CcfC7E54015a7017311DAb2350F2238432",
      "0x90f9D305118D44BB67fF3cc624160Fd073415a02"]

  for (let i = 0; i < tokens.length; i ++) {

    //* LIST
    try {
      const list = await lister.listToken(tokens[i], PROPOSAL);
      await list.wait();
      console.log(`Done listing of ${tokens[i]}!`);
    } catch (err: any) {
      console.log(err.reason)
    }
  }

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
