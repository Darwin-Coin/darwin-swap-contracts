import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, Tokenomics2Library } from "../../typechain-types";
import { addr } from "../constants";

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  // DECLARE LIBRARY FACTORY
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");

  //! [ATTACH] TOKENOMICS2
  const library = tokenomics2LibFactory.attach(addr.tokenomics2Library) as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Attached Tokenomics 2.0 Library at: ${library.address}`);

  const OFFICIAL = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";
  const LISTER = "0xB2e8299Dc021b350Fe0d97b7114f3504Ea15b560"

  // DECLARE FACTORIES 1
  const listerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});

  //! [ATTACH] LISTER
  const lister = listerFactory.attach(LISTER) as DarwinSwapLister;
  await lister.deployed();
  console.log(`🔨 Attached Darwin Lister at: ${lister.address}`);

  await lister.listOfficialToken(OFFICIAL);

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
