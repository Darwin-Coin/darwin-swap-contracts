import * as hardhat from "hardhat";
import { ethers, upgrades } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../../typechain-types";
import { DarwinBurner, DarwinCommunity, DarwinStaking } from "../../darwin-token-contracts/typechain-types";
import { Darwin, DarwinPrivateSale, DarwinVester5, DarwinVester7, StakedDarwin } from "../../darwin-token-contracts/typechain-types/contracts";
import { addr, BSC_ADDRESSES, MASTERCHEF_START, VERIFY, ZERO_ADDRESS } from "../constants";
import { BigNumber } from "ethers";
import { OldVester } from "../../typechain-types/contracts/token-contracts";

type UserInfo = {
  withdrawn: BigNumber,
  vested: BigNumber,
  vestTimestamp: BigNumber,
  claimed: BigNumber,
  boost: BigNumber,
  nft: string,
  tokenId: BigNumber
}

enum TokenStatus {
  UNLISTED,
  LISTED,
  BANNED
}

const PROPOSAL = {
    ownToks: {
      tokenTaxOnSell: 0,
      tokenTaxOnBuy: 0
    },
    addedToks: {
      tokenA1TaxOnSell: 0,
      tokenB1TaxOnSell: 0,
      tokenA1TaxOnBuy: 0,
      tokenB1TaxOnBuy: 0,
      tokenA2TaxOnSell: 0,
      tokenB2TaxOnSell: 0,
      tokenA2TaxOnBuy: 250,
      tokenB2TaxOnBuy: 250,
      refundOnSell: 0,
      refundOnBuy: 0,
      tokenB1SellToADG: 0,
      tokenB1BuyToADG: 0,
      tokenB2SellToADG: 0,
      tokenB2BuyToADG: 0
    },
    status: TokenStatus.UNLISTED,
    validator: ZERO_ADDRESS,
    valid: false,
    official: false,
    owner: ZERO_ADDRESS,
    feeReceiver: "0x6d2E09bECCeED18FBd21F22d0A9D7967BCe208ef",
    purpose: "Test Purpose"
  }

async function main() {

  const WETH = "0x6024875E7A8DA2Ef25cc57D7925e393fE23aF299";
  const STABLE = "0x7ce89408E2c3d7e2EAda6a6519fA564A54AA46B3";
  const HOW_MANY_TEST_TOKENS = 5;

  const buyersInfo: UserInfo[] = [];
  let privateSoldDarwin = BigNumber.from(0);
  const MOVE_FROM_BSC = false;
  const darwinVester7Factory = await ethers.getContractFactory("DarwinVester7");
  const privateSaleBuyers = BSC_ADDRESSES.privateSaleBuyers;

  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);












  if (MOVE_FROM_BSC) {
    // BSC
    hardhat.changeNetwork("bsc");
    console.log(`⛓️ Chain: BSC`);

    // DECLARE BSC FACTORIES
    const darwinPrivateSaleFactory = await ethers.getContractFactory("DarwinPrivateSale");
    const oldVesterFactory = await ethers.getContractFactory("OldVester");
    const privateBSC = darwinPrivateSaleFactory.attach(BSC_ADDRESSES.privateSales[0]) as DarwinPrivateSale;
    const vesterBSC = oldVesterFactory.attach(BSC_ADDRESSES.vester) as OldVester;
    privateSoldDarwin = (await privateBSC.status()).soldAmount;

    for (let i = 0; i < privateSaleBuyers.length; i++) {
      const user = await vesterBSC.userInfo(privateSaleBuyers[i]);
      const jsUser: UserInfo = {
        withdrawn: user.withdrawn,
        vested: user.vested,
        vestTimestamp: user.vestTimestamp,
        claimed: user.claimed,
        boost: BigNumber.from(0),
        nft: ZERO_ADDRESS,
        tokenId: BigNumber.from(0)
      }
      buyersInfo.push(jsUser);
    }

    console.log(`✅ Sold Darwin and Private Buyers Info fetched from BSC`);

    // ARBITRUM
    hardhat.changeNetwork("arbitrumOne");
    console.log(`⛓️ Chain: Arbitrum`);
  }











  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)


  // DECLARE ARBITRUM FACTORIES
  const tokenFactory = await ethers.getContractFactory("TestERC20");
  const darwinVester5Factory = await ethers.getContractFactory("DarwinVester5");
  const darwinCommunityFactory = await ethers.getContractFactory("DarwinCommunity");
  const darwinFactory = await ethers.getContractFactory("Darwin");
  const stakedDarwinFactory = await ethers.getContractFactory("StakedDarwin");
  const darwinBurnerFactory = await ethers.getContractFactory("DarwinBurner");
  const stakingFactory = await ethers.getContractFactory("DarwinStaking");

  //! [DEPLOY] VESTER5
  const vester5 = await darwinVester5Factory.deploy(addr.kieran) as DarwinVester5;
  await vester5.deployed();
  console.log(`🔨 Deployed Vester5 at: ${vester5.address}`);

  //? [VERIFY] VESTER5
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: vester5.address,
      constructorArguments: [addr.kieran]
    });
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [DEPLOY] VESTER7
  const vester7 = await darwinVester7Factory.deploy(privateSaleBuyers, buyersInfo, []) as DarwinVester7;
  await vester7.deployed();
  console.log(`🔨 Deployed Vester7 at: ${vester7.address}`);

  //? [VERIFY] VESTER7
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: vester7.address,
      constructorArguments: [privateSaleBuyers, buyersInfo, []]
    });
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [DEPLOY] COMMUNITY
  const community = await darwinCommunityFactory.deploy(addr.kieran) as DarwinCommunity;
  await community.deployed();
  console.log(`🔨 Deployed Darwin Community at: ${community.address}`);

  //? [VERIFY] COMMUNITY
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: community.address,
      constructorArguments: [addr.kieran]
    });
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [DEPLOY] DARWIN PROTOCOL
  const darwin = await upgrades.deployProxy(
    darwinFactory,
    [
      community.address,
      vester5.address,
      vester7.address,
      addr.wallet1,
      addr.kieran,
      addr.charity,
      addr.giveaway,
      addr.bounties,
      addr.drop,
      privateSoldDarwin
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
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: darwin.address,
      constructorArguments: []
    });
  }

  //? [VERIFY] STAKED DARWIN
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: stakedDarwin.address,
      constructorArguments: []
    });
  }


  //! [DEPLOY] STAKING
  const staking = await stakingFactory.deploy(darwin.address, stakedDarwin.address, []) as DarwinStaking;
  await staking.deployed();
  console.log(`🔨 Deployed Darwin Staking at: ${staking.address}`);

  //? [VERIFY] STAKING
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: staking.address,
      constructorArguments: [darwin.address, stakedDarwin.address, []]
    });
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
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: burner.address,
      constructorArguments: [darwin.address]
    });
  }

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)




  //! [CONST] FUND ADDRESSES
  const fundAddress: string[] = [
    addr.wallet1,
    addr.wallet1,
    addr.wallet1,
    addr.charity,
    addr.giveaway,
    addr.giveaway,
    addr.bounties,
    burner.address,
    addr.rewardsWallet,
    community.address
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
    "Save to Next Week"
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




  //* [SEND] 25% TO BSC PRIVATESALE BUYERS (ON ARBITRUM)
  for (let i = 0; i < privateSaleBuyers.length; i++) {
    const tx = await darwin.transfer(privateSaleBuyers[i], buyersInfo[i].vested.div(3));
    await tx.wait();
  }
  console.log(`🏁 BSC Private-Sale Buyers fulfilled (25%)`);

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] VESTER5
  const ve5Init = await vester5.init(darwin.address);
  await ve5Init.wait();
  console.log(`🏁 Vester5 initialized`);

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] VESTER7
  const ve7Init = await vester7.init(darwin.address);
  await ve7Init.wait();
  console.log(`🏁 Vester7 initialized`);

  console.log(`--- Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] COMMUNITY
  const comInit = await community.init(darwin.address, fundAddress, initialFundProposalStrings, restrictedProposalSignatures);
  await comInit.wait();
  console.log(`🏁 Community initialized`);

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

  if (VERIFY) {
    //? [VERIFY] MASTERCHEF
    await hardhat.run("verify:verify", {
      address: masterChef.address,
      constructorArguments: [darwin.address, addr.masterChefFeeTo, MASTERCHEF_START]
    });
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

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  // DECLARE FACTORIES 2
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

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //! [DEPLOY] FACTORY
  const factory = await darwinFactoryFactory.deploy(lister.address, masterChef.address, STABLE) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Deployed Darwin Factory at: ${factory.address}`);

  if (VERIFY) {
    //? [VERIFY] FACTORY
    await hardhat.run("verify:verify", {
      address: factory.address,
      constructorArguments: [lister.address, masterChef.address, STABLE]
    });
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

  if (VERIFY) {
    //? [VERIFY] BUNDLES
    await hardhat.run("verify:verify", {
      address: bundles.address,
      constructorArguments: []
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

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* [INIT] FACTORY
  const setRouter = await factory.setRouter(router.address);
  await setRouter.wait();
  const setFeeTo = await factory.setFeeTo(addr.feeTo);
  await setFeeTo.wait();
  console.log("🏁 Factory initialized");

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* UNPAUSE DARWIN
  const unpause = await darwin.emergencyUnPause();
  await unpause.wait();
  console.log("🏁 Darwin Unpaused");

  console.log(`Balance: ${ethers.utils.formatEther(await owner.getBalance())}`)

  //* DEPLOY AND LIST TEST TOKENS
  const listOfficial = await lister.listOfficialToken(WETH);
  await listOfficial.wait();

  for (let i = 0; i < HOW_MANY_TEST_TOKENS; i ++) {

    //* ADD POOL
    try {
      const token = await tokenFactory.deploy("Test Token " + i, "TEST" + i, owner.address);
      await token.deployed();
      if (i < HOW_MANY_TEST_TOKENS/2) {
        const list = await lister.listToken(token.address, PROPOSAL);
        await list.wait();
      }
      const transferOwnership = await token.transferOwnership(owner.address);
      await transferOwnership.wait();
      if (i < HOW_MANY_TEST_TOKENS/2) {
        console.log(`--- Deployed ${await token.symbol()} at ${token.address} (with taxes)`);
      } else {
        console.log(`--- Deployed ${await token.symbol()} at ${token.address}`);
      }
    } catch {
      console.error("--- Error Deploying Token!")
    }
  }

  console.log("✅ SWAP CONTRACTS DEPLOYMENT COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
