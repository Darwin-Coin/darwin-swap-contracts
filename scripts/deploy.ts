import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinSwapFactory, DarwinSwapRouter } from "../typechain-types";
import { ADDRESSES } from "./constants";


async function main() {
  const TEST=true
  const VERIFY=false
  const WETH=ADDRESSES.weth
  const DARWIN=ADDRESSES.darwin
  const COMMUNITY=ADDRESSES.community

  const [owner, ...others] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);


  // DECLARE FACTORIES
  const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory");
  const darwinRouterFactory = await ethers.getContractFactory("DarwinSwapRouter");


  //! [DEPLOY] FACTORY
  const factory = await darwinFactoryFactory.deploy(owner.address) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Deployed Darwin Factory at: ${factory.address}`);

  if (VERIFY) {
    //? [VERIFY] FACTORY
    await hardhat.run("verify:verify", {
      address: factory.address,
      constructorArguments: [owner.address]
    });
  }

  //! [DEPLOY] ROUTER
  const router = await darwinRouterFactory.deploy(factory.address, WETH) as DarwinSwapRouter;
  await router.deployed();
  console.log(`🔨 Deployed Darwin Router at: ${router.address}`);

  if (VERIFY) {
    //? [VERIFY] ROUTER
    await hardhat.run("verify:verify", {
      address: router.address,
      constructorArguments: [factory.address, WETH]
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
