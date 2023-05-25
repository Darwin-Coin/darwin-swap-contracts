import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinMasterChef, DarwinSwapFactory, Tokenomics2Library } from "../typechain-types";
import { addr } from "./constants";

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  // DECLARE LIBRARY FACTORY
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");

  //! [ATTACH] TOKENOMICS2
  const library = tokenomics2LibFactory.attach(addr.tokenomics2Library) as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Deployed Tokenomics 2.0 Library at: ${library.address}`);

  const MASTERCHEF = "0x096e53d9DDEfA826d16187102A5976b534B8204C";
  const FACTORY = "0x638c81Cb8bFa483263FE55118A94237402978D4c";

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
