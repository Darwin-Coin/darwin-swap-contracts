import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { addr, MASTERCHEF_START, VERIFY, ZERO_ADDRESS } from "./constants";

async function main() {

  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)


  // DECLARE FACTORIES 1
  const lockerFactory = await ethers.getContractFactory("TokenLocker");
  const bundlesFactory = await ethers.getContractFactory("DarwinLiquidityBundles");

  //! [ATTACH] LOCKER
  const locker = await lockerFactory.deploy() as TokenLocker;
  await locker.deployed();
  console.log(`🔨 Deployed Token Locker at: ${locker.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] LOCKER
      await hardhat.run("verify:verify", {
        address: locker.address,
        constructorArguments: []
      });
    }
  } catch {
    console.error("Locker contract verification failed");
  }

  // DECLARE LIBRARY FACTORY
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");


  //! [DEPLOY] TOKENOMICS2
  const library = await tokenomics2LibFactory.deploy() as Tokenomics2Library;
  await library.deployed();
  console.log(`🔨 Deployed Tokenomics 2.0 Library at: ${library.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] TOKENOMICS2
      await hardhat.run("verify:verify", {
        address: library.address,
        constructorArguments: []
      });
    }
  } catch {
    console.error("Tokenomics Library verification failed");
  }

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  // DECLARE FACTORIES 2
  const darwinRouterFactory = await ethers.getContractFactory("DarwinSwapRouter", {libraries: {Tokenomics2Library: library.address}});
  const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});
  const darwinListerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});

  //! [DEPLOY] LISTER
  const lister = await darwinListerFactory.deploy() as DarwinSwapLister;
  await lister.deployed();
  console.log(`🔨 Deployed Darwin Lister at: ${lister.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] LISTER
      await hardhat.run("verify:verify", {
        address: lister.address,
        library: library.address,
        constructorArguments: []
      });
    }
  } catch {
    console.error("Lister contract verification failed");
  }

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [DEPLOY] FACTORY
  const factory = await darwinFactoryFactory.deploy(lister.address, ZERO_ADDRESS) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Deployed Darwin Factory at: ${factory.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] FACTORY
      await hardhat.run("verify:verify", {
        address: factory.address,
        library: library.address,
        constructorArguments: [lister.address, ZERO_ADDRESS]
      });
    }
  } catch {
    console.error("Factory contract verification failed");
  }

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] LISTER
  const setFactory = await lister.setFactory(factory.address);
  await setFactory.wait()
  console.log("🏁 Lister initialized");

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [ATTACH] BUNDLES
  const bundles = bundlesFactory.attach(await factory.liquidityBundles()) as DarwinLiquidityBundles;
  await bundles.deployed();
  console.log(`🔨 Deployed Liquidity Bundles at: ${bundles.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] BUNDLES
      await hardhat.run("verify:verify", {
        address: bundles.address,
        constructorArguments: []
      });
    }
  } catch {
    console.error("Bundles contract verification failed");
  }

  //! [DEPLOY] ROUTER
  const router = await darwinRouterFactory.deploy(factory.address, addr.weth) as DarwinSwapRouter;
  await router.deployed();
  console.log(`🔨 Deployed Darwin Router at: ${router.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] ROUTER
      await hardhat.run("verify:verify", {
        address: router.address,
        library: library.address,
        constructorArguments: [factory.address, addr.weth]
      });
    }
  } catch {
    console.error("Router contract verification failed");
  }

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)


  //* [INIT] FACTORY
  const setRouter = await factory.setRouter(router.address);
  await setRouter.wait();
  const setFeeTo = await factory.setFeeTo(addr.feeTo);
  await setFeeTo.wait();
  console.log("🏁 Factory initialized");

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  console.log("✅ SWAP CONTRACTS DEPLOYMENT COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
