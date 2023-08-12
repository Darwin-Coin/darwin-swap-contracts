import * as hardhat from "hardhat";
import { ethers, upgrades } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { DarwinBurner, DarwinCommunity, LootboxTicket, DarwinStaking } from "../darwin-token-contracts/typechain-types";
import { Darwin, DarwinVester, StakedDarwin } from "../darwin-token-contracts/typechain-types/contracts";
import { addr, MASTERCHEF_START, VERIFY } from "./constants";

async function main() {

  const users = [
    "0x5Baa5b0eCB4d81DEbb15be26cc967E01a4c6b3e0",
    "0x20d7E17644980497c895F36B20520345BC7da15d",
    "0xf5A51C639d7163a5c10FDd6764d4f38E5938567A",
    "0x75409BeAd3AcD3df40B9B1434DafE76B1C2c61eD",
    "0x0Dd936acE5DF9Dc03891F9CD8a9bac74BF835407",
    "0x24DB2a0eb2469B0053c40d1232e64e86B9772319",
    "0x51E77d2969C837E10617Ab1F686e9BDBDbdEB3a3",
    "0xC8af4a1bd54EB710541C8E58467969D301eAbD06",
    "0xB53d1a93718fD1E9C0DEb2878b5eD197B0Da27b8",
    "0x86291db0001648de1c4beddf0e44ceecc887d6b1",
    "0xff61EAF3C3fb27163444543277347e4D629E2a28"
  ];

  const valuesAtLaunch = [
    ethers.utils.parseEther("3000000"),
    ethers.utils.parseEther("6000000"),
    ethers.utils.parseEther("36871.09"),
    ethers.utils.parseEther("367792.81"),
    ethers.utils.parseEther("1761526.64"),
    ethers.utils.parseEther("105679.92"),
    ethers.utils.parseEther("22122.65"),
    ethers.utils.parseEther("516195.26"),
    ethers.utils.parseEther("402101.36"),
    ethers.utils.parseEther("544361.08"),
    ethers.utils.parseEther("243349.19")
  ];

  const valuesDue = [
    ethers.utils.parseEther("12000000"),
    ethers.utils.parseEther("24000000"),
    ethers.utils.parseEther("147484.36"),
    ethers.utils.parseEther("1471171.23"),
    ethers.utils.parseEther("7046106.56"),
    ethers.utils.parseEther("422719.67"),
    ethers.utils.parseEther("88490.62"),
    ethers.utils.parseEther("2064781.03"),
    ethers.utils.parseEther("1608405.43"),
    ethers.utils.parseEther("2177444.33"),
    ethers.utils.parseEther("973396.77"),
  ];

  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)


  // DECLARE ARBITRUM FACTORIES
  const darwinVesterFactory = await ethers.getContractFactory("DarwinVester");
  const darwinCommunityFactory = await ethers.getContractFactory("DarwinCommunity");
  const darwinFactory = await ethers.getContractFactory("Darwin");
  const stakedDarwinFactory = await ethers.getContractFactory("StakedDarwin");
  const darwinBurnerFactory = await ethers.getContractFactory("DarwinBurner");
  const stakingFactory = await ethers.getContractFactory("DarwinStaking");
  const ticketFactory = await ethers.getContractFactory("LootboxTicket");

  //! [DEPLOY] VESTER
  const vester = await darwinVesterFactory.deploy(users, valuesAtLaunch, valuesDue, [addr.evotures]) as DarwinVester;
  await vester.deployed();
  console.log(`🔨 Deployed Vester5 at: ${vester.address}`);

  //? [VERIFY] VESTER
  try {
    if (VERIFY) {
      await hardhat.run("verify:verify", {
        address: vester.address,
        constructorArguments: [users, valuesAtLaunch, valuesDue, [addr.evotures]]
      });
    }
  } catch {
    console.error("Vester contract verification failed");
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [DEPLOY] COMMUNITY
  const community = await darwinCommunityFactory.deploy(addr.kieran) as DarwinCommunity;
  await community.deployed();
  console.log(`🔨 Deployed Darwin Community at: ${community.address}`);

  //? [VERIFY] COMMUNITY
  try {
    if (VERIFY) {
      await hardhat.run("verify:verify", {
        address: community.address,
        constructorArguments: [addr.kieran]
      });
    }
  } catch {
    console.error("Community contract verification failed");
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [DEPLOY] DARWIN PROTOCOL
  const darwin = await upgrades.deployProxy(
    darwinFactory,
    [
      community.address,
      vester.address,
      addr.wallet1,
      addr.charity,
      addr.giveaway,
      addr.bounties,
      addr.drop,
    ],
    {
      initializer: "initialize"
    }
  ) as Darwin;
  await darwin.deployed();
  console.log(`🔨 Deployed Darwin Protocol at: ${darwin.address}`);

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [ATTACH] STAKED DARWIN
  const stakedDarwin = stakedDarwinFactory.attach(await darwin.stakedDarwin()) as StakedDarwin;
  await stakedDarwin.deployed();
  console.log(`🔨 Deployed Staked Darwin at: ${stakedDarwin.address}`);

  //? [VERIFY] DARWIN PROTOCOL
  try {
    if (VERIFY) {
      await hardhat.run("verify:verify", {
        address: darwin.address,
        constructorArguments: []
      });
    }
  } catch {
    console.error("Darwin contract verification failed");
  }

  //? [VERIFY] STAKED DARWIN
  try {
    if (VERIFY) {
      await hardhat.run("verify:verify", {
        address: stakedDarwin.address,
        constructorArguments: []
      });
    }
  } catch {
    console.error("Staked Darwin contract verification failed");
  }

  
  //! [DEPLOY] TICKET
  const ticket = await ticketFactory.deploy(darwin.address) as LootboxTicket;
  await ticket.deployed();
  console.log(`🔨 Deployed Lootbox Ticket at: ${ticket.address}`);

  //? [VERIFY] TICKET
  try {
    if (VERIFY) {
      await hardhat.run("verify:verify", {
        address: ticket.address,
        constructorArguments: [darwin.address]
      });
    }
  } catch {
    console.error("Lootbox Ticket contract verification failed");
  }


  //! [DEPLOY] STAKING
  const staking = await stakingFactory.deploy(darwin.address, stakedDarwin.address, [addr.evotures]) as DarwinStaking;
  await staking.deployed();
  console.log(`🔨 Deployed Darwin Staking at: ${staking.address}`);

  //? [VERIFY] STAKING
  try {
    if (VERIFY) {
      await hardhat.run("verify:verify", {
        address: staking.address,
        constructorArguments: [darwin.address, stakedDarwin.address, [addr.evotures]]
      });
    }
  } catch {
    console.error("Staking contract verification failed");
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] DARWIN WITH STAKING
  const setStaking = await darwin.setDarwinStaking(staking.address);
  await setStaking.wait();
  console.log(`🏁 Staking address set for Darwin and Staked Darwin`);

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)


  //! [DEPLOY] DARWIN BURNER
  const burner = await darwinBurnerFactory.deploy(darwin.address) as DarwinBurner;
  console.log(`🔨 Deployed Darwin Burner at: ${burner.address}`);
  await burner.deployed();

  //? [VERIFY] DARWIN BURNER
  try {
    if (VERIFY) {
      await hardhat.run("verify:verify", {
        address: burner.address,
        constructorArguments: [darwin.address]
      });
    }
  } catch {
    console.error("Burner contract verification failed");
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] VESTER5
  const ve5Init = await vester.init(darwin.address);
  await ve5Init.wait();
  console.log(`🏁 Private-Sale setted with Darwin Address`);

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  console.log("✅ DARWIN PROTOCOL ARBITRUM LAUNCH COMPLETED");

















  // DECLARE FACTORIES 1
  const masterChefFactory = await ethers.getContractFactory("DarwinMasterChef");
  const lockerFactory = await ethers.getContractFactory("TokenLocker");
  const bundlesFactory = await ethers.getContractFactory("DarwinLiquidityBundles");

  //! [DEPLOY] MASTERCHEF
  const masterChef = await masterChefFactory.deploy(darwin.address, addr.masterChefFeeTo, MASTERCHEF_START) as DarwinMasterChef;
  await masterChef.deployed();
  console.log(`🔨 Deployed Darwin MasterChef at: ${masterChef.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] MASTERCHEF
      await hardhat.run("verify:verify", {
        address: masterChef.address,
        constructorArguments: [darwin.address, addr.masterChefFeeTo, MASTERCHEF_START]
      });
    }
  } catch {
    console.error("MasterChef contract verification failed");
  }

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] DARWIN WITH MASTERCHEF
  const setMasterChef = await darwin.setMasterChef(masterChef.address);
  await setMasterChef.wait();
  console.log(`🏁 MasterChef address set for Darwin`);

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [ATTACH] LOCKER
  const locker = lockerFactory.attach(await masterChef.locker()) as TokenLocker;
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
  const factory = await darwinFactoryFactory.deploy(lister.address, masterChef.address) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Deployed Darwin Factory at: ${factory.address}`);

  try {
    if (VERIFY) {
      //? [VERIFY] FACTORY
      await hardhat.run("verify:verify", {
        address: factory.address,
        library: library.address,
        constructorArguments: [lister.address, masterChef.address]
      });
    }
  } catch {
    console.error("Factory contract verification failed");
  }

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] DARWIN WITH FACTORY
  const dSetFactory = await darwin.setDarwinSwapFactory(factory.address);
  await dSetFactory.wait();
  console.log(`🏁 Factory address set for Darwin`);

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

  //! [CONST] FUND ADDRESSES
  const fundAddress: string[] = [
    addr.wallet1,
    addr.wallet1,
    addr.wallet1,
    addr.charity,
    addr.eggHunt,
    addr.giveaway,
    addr.bounties,
    burner.address,
    addr.rewardsWallet,
    community.address,
    bundles.address,
    ticket.address,
    addr.treasury
  ];

  //! [CONST] FUND PROPOSALS
  const initialFundProposalStrings: string[] = [
    "Marketing",
    "Product development",
    "Operations",
    "Charity",
    "Egg hunt",
    "Giveaways",
    "Bounties",
    "Burn",
    "Reflections",
    "Save to Next Week",
    "Liquidity Bundles",
    "Loot Box",
    "Treasury"
  ];

  //! [CONST] RESTRICTED SIGNATURES
  const restrictedProposalSignatures: string[] = [
    "upgradeTo(address)",
    "upgradeToAndCall(address,bytes)",
    "setMinter(address,bool)",
    "setMaintenance(address,bool)",
    "setSecurity(address,bool)",
    "setUpgrader(address,bool)",
    "setReceiveRewards(address,bool)",
    "communityPause()"
  ];

  //* [INIT] COMMUNITY
  const comInit = await community.init(darwin.address, fundAddress, initialFundProposalStrings, restrictedProposalSignatures);
  await comInit.wait();
  console.log(`🏁 Community initialized`);

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

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
