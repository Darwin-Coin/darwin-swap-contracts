import * as hardhat from "hardhat";
import { ethers } from "hardhat";

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  // DECLARE FACTORY
  const tokenFactory = await ethers.getContractFactory("TestERC20");
  
  const weth = await tokenFactory.deploy("Wrapped pZBC", "wpZBC", owner.address);
  await weth.deployed();
  console.log("WETH: " + weth.address);

  const usdt = await tokenFactory.deploy("Tether USD", "USDT", owner.address);
  await usdt.deployed();
  console.log("USDT: " + usdt.address);

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
