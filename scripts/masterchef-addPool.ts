import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { Darwin, Darwin__factory } from "../darwin-token-contracts/typechain-types";
import { addr, MASTERCHEF_START, VERIFY } from "./constants";


async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  const MASTERCHEF = "0x096e53d9DDEfA826d16187102A5976b534B8204C"
  const LP = "0x2eB2351308eB5f95aE163423F2C240aDc4FCC189"; // (CAKE-WBNB)

  // DECLARE FACTORIES 1
  const masterChefFactory = await ethers.getContractFactory("DarwinMasterChef");

  //! [ATTACH] MASTERCHEF
  const masterChef = masterChefFactory.attach(MASTERCHEF) as DarwinMasterChef;
  await masterChef.deployed();
  console.log(`🔨 Attached Darwin MasterChef at: ${masterChef.address}`);

  //* ADD POOL
  const addPool = await masterChef.addPool(100, LP, 250, 150, 0, false);
  await addPool.wait();
  console.log(`🏁 Pool added`);

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
