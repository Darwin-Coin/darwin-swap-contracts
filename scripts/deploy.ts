import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { ADDRESSES } from "./constants";


async function main() {
  const VERIFY=false
  const WETH=ADDRESSES.weth
  const FEETO=ADDRESSES.feeTo

  const [owner, ...others] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  // DECLARE LOCKER FACTORY
  const lockerFactory = await ethers.getContractFactory("TokenLocker");

  //! [DEPLOY] LOCKER
  const locker = await lockerFactory.deploy() as TokenLocker;
  await locker.deployed();
  console.log(`🔨 Deployed Token Locker at: ${locker.address}`);

  if (VERIFY) {
    //? [VERIFY] LOCKER
    await hardhat.run("verify:verify", {
      address: locker.address,
      constructorArguments: []
    });
  }

  // DECLARE LIBRARY FACTORY
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");

  //! [DEPLOY] TOKENOMICS2
  const library = await tokenomics2LibFactory.deploy() as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Deployed Tokenomics 2.0 Library at: ${library.address}`);

  if (VERIFY) {
    //? [VERIFY] TOKENOMICS2
    await hardhat.run("verify:verify", {
      address: library.address,
      constructorArguments: []
    });
  }

  // DECLARE FACTORIES
  const darwinRouterFactory = await ethers.getContractFactory("DarwinSwapRouter", {libraries: {Tokenomics2Library: library.address}});
  const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});
  const darwinListerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});

  //! [DEPLOY] LISTER
  const lister = await darwinListerFactory.deploy() as DarwinSwapLister;
  await lister.deployed();
  console.log(`🔨 Deployed Darwin Lister at: ${lister.address}`);

  if (VERIFY) {
    //? [VERIFY] LISTER
    await hardhat.run("verify:verify", {
      address: lister.address,
      constructorArguments: []
    });
  }

  //! [DEPLOY] FACTORY
  const factory = await darwinFactoryFactory.deploy(lister.address) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Deployed Darwin Factory at: ${factory.address}`);

  if (VERIFY) {
    //? [VERIFY] FACTORY
    await hardhat.run("verify:verify", {
      address: factory.address,
      constructorArguments: [lister.address]
    });
  }

  //* [INIT] LISTER
  const setFactory = await lister.setFactory(factory.address);
  await setFactory.wait()
  console.log("🏁 Lister initialized");

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

  //* [INIT] FACTORY
  const setRouter = await factory.setRouter(router.address);
  await setRouter.wait();
  const setFeeTo = await factory.setFeeTo(FEETO);
  await setFeeTo.wait();
  console.log("🏁 Factory initialized");

  console.log("✅ DEPLOYMENT COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
