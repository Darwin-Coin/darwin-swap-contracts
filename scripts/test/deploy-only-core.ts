import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../../typechain-types";
import { addr, VERIFY } from "../constants";


async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  // DECLARE FACTORIES 1
  const masterChefFactory = await ethers.getContractFactory("DarwinMasterChef");
  const lockerFactory = await ethers.getContractFactory("TokenLocker");
  const tokenomics2LibFactory = await ethers.getContractFactory("Tokenomics2Library");

  const DATE = Math.floor(Date.now() / 1000);

  //! [DEPLOY] MASTERCHEF
  const masterChef = await masterChefFactory.deploy(addr.darwin, owner.address, DATE) as DarwinMasterChef;
  await masterChef.deployed();
  console.log(`🔨 Deployed MasterChef at: ${masterChef.address}`);

  if (VERIFY) {
    //? [VERIFY] MASTERCHEF
    await hardhat.run("verify:verify", {
      address: masterChef.address,
      constructorArguments: [addr.darwin, owner.address, DATE]
    });
  }

  //! [ATTACH] LOCKER
  const locker = lockerFactory.attach(await masterChef.locker()) as TokenLocker;
  await locker.deployed();
  console.log(`🔨 Deployed Locker at: ${locker.address}`);

  if (VERIFY) {
    //? [VERIFY] LOCKER
    await hardhat.run("verify:verify", {
      address: locker.address,
      constructorArguments: []
    });
  }

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

  // DECLARE FACTORIES 2
  const darwinRouterFactory = await ethers.getContractFactory("DarwinSwapRouter", {libraries: {Tokenomics2Library: library.address}});
  const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: library.address}});
  const darwinListerFactory = await ethers.getContractFactory("DarwinSwapLister", {libraries: {Tokenomics2Library: library.address}});
  const darwinBundlesFactory = await ethers.getContractFactory("DarwinLiquidityBundles");

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
  const factory = await darwinFactoryFactory.deploy(lister.address, masterChef.address, addr.busd) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Deployed Darwin Factory at: ${factory.address}`);

  if (VERIFY) {
    //? [VERIFY] FACTORY
    await hardhat.run("verify:verify", {
      address: factory.address,
      constructorArguments: [lister.address, addr.busd]
    });
  }

  //! [ATTACH] BUNDLES
  const bundles = darwinBundlesFactory.attach(await factory.liquidityBundles()) as DarwinLiquidityBundles;
  await bundles.deployed();
  console.log(`🔨 Deployed Darwin Bundles at: ${bundles.address}`);

  if (VERIFY) {
    //? [VERIFY] BUNDLES
    await hardhat.run("verify:verify", {
      address: bundles.address,
      constructorArguments: []
    });
  }

  //* [INIT] LISTER
  const setFactory = await lister.setFactory(factory.address);
  await setFactory.wait()
  console.log("🏁 Lister initialized");

  //! [DEPLOY] ROUTER
  const router = await darwinRouterFactory.deploy(factory.address, addr.weth) as DarwinSwapRouter;
  await router.deployed();
  console.log(`🔨 Deployed Darwin Router at: ${router.address}`);

  if (VERIFY) {
    //? [VERIFY] ROUTER
    await hardhat.run("verify:verify", {
      address: router.address,
      constructorArguments: [factory.address, addr.weth]
    });
  }

  //* [INIT] FACTORY
  const setRouter = await factory.setRouter(router.address);
  await setRouter.wait();
  const setFeeTo = await factory.setFeeTo(addr.feeTo);
  await setFeeTo.wait();
  console.log("🏁 Factory initialized");

  console.log("✅ DEPLOYMENT COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
