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
  const library = tokenomics2LibFactory.attach("0x9eaD81904642D8cD05aBe98CDA5040DD3F04f3c8") as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Attached Tokenomics 2.0 Library at: ${library.address}`);

  const MASTERCHEF = "0xEF99E340457e6bb7E4b0c08836F1573E12B4Bb43";
  const FACTORY = "0x5aB16130ca720850dD6Ed4ac85137634447D25db";

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
