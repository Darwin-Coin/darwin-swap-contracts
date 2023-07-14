import * as hardhat from "hardhat";
import { ethers } from "hardhat";

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  console.log(`💰 Balance: ${ethers.utils.formatEther(await owner.getBalance())} ETH`);

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
