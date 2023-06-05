import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { DarwinLiquidityBundles } from "../../typechain-types";
import { addr, VERIFY } from "../constants";


async function main() {
  const bundlesFactory = await ethers.getContractFactory("DarwinLiquidityBundles");

  // DECLARE FACTORIES 2
  const darwinFactoryFactory = await ethers.getContractFactory("DarwinSwapFactory", {libraries: {Tokenomics2Library: addr.tokenomics2Library}});
  const factory = darwinFactoryFactory.attach(addr.factory);

  //! [ATTACH] BUNDLES
  const bundles = bundlesFactory.attach(await factory.liquidityBundles()) as DarwinLiquidityBundles;
  await bundles.deployed();
  console.log(`🔨 Attached Liquidity Bundles at: ${bundles.address}`);

  if (VERIFY) {
    //? [VERIFY] BUNDLES
    await hardhat.run("verify:verify", {
      address: bundles.address,
      constructorArguments: []
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
