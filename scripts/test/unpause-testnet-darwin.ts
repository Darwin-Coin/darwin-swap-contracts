import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { Darwin } from "../../darwin-token-contracts/typechain-types";

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  // DECLARE DARWIN FACTORY
  const darwinFactory = await ethers.getContractFactory("Darwin");
  const DARWIN = "0xB25406f5135eB6274c648B9B69A9218284904cFb";

  //! [ATTACH] DARWIN
  const darwin = darwinFactory.attach(DARWIN) as Darwin;
  await darwin.deployed();
  console.log(`🔨 Attached Darwin at: ${darwin.address}`);

  await darwin.emergencyUnPause();

  console.log("✅ COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
