import * as hardhat from "hardhat";
import { ethers } from "hardhat";
import { Darwin } from "../../darwin-token-contracts/typechain-types";

async function main() {
  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  // DECLARE DARWIN FACTORY
  const darwinFactory = await ethers.getContractFactory("Darwin");
  const DARWIN = "0x616D9d4a8191f147b354A59558b6aa529498F1BA";

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
