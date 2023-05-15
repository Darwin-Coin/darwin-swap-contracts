import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { Darwin, Darwin__factory } from "../darwin-token-contracts/typechain-types";
import { addr, MASTERCHEF_START, VERIFY } from "./constants";


async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  const MASTERCHEF = "0x4893285370e36c60e0621ed4e8c99251b42619FF"
  const LP = "0x6de5CF5F5e1c1F4d34A4F75D9695A3C9b8E3c9f7"; // (CAKE-WBNB)

  // DECLARE FACTORIES 1
  const masterChefFactory = await ethers.getContractFactory("DarwinMasterChef");

  //! [ATTACH] MASTERCHEF
  const masterChef = masterChefFactory.attach(MASTERCHEF) as DarwinMasterChef;
  await masterChef.deployed();
  console.log(`🔨 Attached Darwin MasterChef at: ${masterChef.address}`);

  //* ADD POOL
  const addPool = await masterChef.addPool(100, LP, 250, 150, 0, true);
  await addPool.wait();
  console.log(`🏁 Pool added`);

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
