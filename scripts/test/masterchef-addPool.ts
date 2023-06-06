import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinMasterChef, DarwinSwapFactory, Tokenomics2Library } from "../../typechain-types";
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

  const MASTERCHEF = "0x295d22413730Ed9b2db24E9Cc95b0996ACb4c5FA";
  const FACTORY = "0xC1757d71A0B0b85047B7539f24C312F557dE3862";

  // DECLARE FACTORIES 1
  const masterChefFactory = await ethers.getContractFactory("DarwinMasterChef");
  const factoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});

  //! [ATTACH] MASTERCHEF
  const masterChef = masterChefFactory.attach(MASTERCHEF) as DarwinMasterChef;
  await masterChef.deployed();
  console.log(`🔨 Attached Darwin MasterChef at: ${masterChef.address}`);

  //! [ATTACH] FACTORY
  const factory = factoryFactory.attach(FACTORY) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Attached Factory at: ${factory.address}`);

  const pairsLength = Number(await factory.allPairsLength());

  for (let i = 0; i < pairsLength; i ++) {
    const pair = await factory.allPairs(i);

    //* ADD POOL
    try {
      const addPool = await masterChef.addPool(100, pair, 250, 150, 0, false);
      await addPool.wait();
      console.log(`🏁 Pool added`);
    } catch {
      console.log("Pair already exists!")
    }
  }

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
