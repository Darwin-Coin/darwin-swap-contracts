import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinSwapFactory, Tokenomics2Library } from "../../typechain-types";
import { ZERO_ADDRESS, addr } from "../constants";

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  const FEETO = ZERO_ADDRESS;

  // DECLARE LIBRARY FACTORY
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");

  //! [ATTACH] TOKENOMICS2
  const library = tokenomics2LibFactory.attach(addr.tokenomics2Library) as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Attached Tokenomics 2.0 Library at: ${library.address}`);

  // DECLARE FACTORIES 1
  const factoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});

  //! [ATTACH] FACTORY
  const factory = factoryFactory.attach(addr.factory) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Attached Darwin Factory at: ${factory.address}`);

  await factory.setFeeTo(FEETO);

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
