import * as hardhat from "hardhat";
import { ethers, upgrades } from "hardhat";
import { DarwinLiquidityBundles, DarwinMasterChef, DarwinSwapFactory, DarwinSwapLister, DarwinSwapRouter, TokenLocker, Tokenomics2Library } from "../typechain-types";
import { DarwinBurner, DarwinCommunity, EvoturesNFT, LootboxTicket, DarwinStaking, DarwinPrivateSale__factory, DarwinVester7__factory, DarwinVester5__factory, DarwinCommunity__factory, Darwin__factory, StakedDarwin__factory, DarwinBurner__factory, DarwinStaking__factory, EvoturesNFT__factory, LootboxTicket__factory, MultiplierNFT__factory } from "../darwin-token-contracts/typechain-types";
import { Darwin, DarwinPrivateSale, DarwinVester5, DarwinVester7, MultiplierNFT, StakedDarwin } from "../darwin-token-contracts/typechain-types/contracts";
import { addr, BSC_ADDRESSES, MASTERCHEF_START, VERIFY, ZERO_ADDRESS } from "./constants";
import { BigNumber } from "ethers";

type UserInfo = {
  withdrawn: BigNumber,
  vested: BigNumber,
  vestTimestamp: BigNumber,
  claimed: BigNumber,
  boost: BigNumber,
  nft: string,
  tokenId: BigNumber
}

async function main() {

  const buyersInfo: UserInfo[] = [];
  let privateSoldDarwin = BigNumber.from(0);
  const MOVE_FROM_BSC = false;
  const darwinVester7Factory = DarwinVester7__factory.prototype;
  const privateSaleBuyers = BSC_ADDRESSES.privateSaleBuyers;

  const [owner] = await hardhat.ethers.getSigners();
  console.log(`💻 Deployer: ${owner.address}`);












  if (MOVE_FROM_BSC) {
    // BSC
    hardhat.changeNetwork("bsc");
    console.log(`⛓️ Chain: BSC`);

    // DECLARE BSC FACTORIES
    const darwinPrivateSaleFactory = DarwinPrivateSale__factory.prototype;
    const privateBSC = darwinPrivateSaleFactory.attach(BSC_ADDRESSES.privateSales[0]) as DarwinPrivateSale;
    const vesterBSC = darwinVester7Factory.attach(BSC_ADDRESSES.vester) as DarwinVester7;
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













  // DECLARE ARBITRUM FACTORIES
  const darwinVester5Factory = DarwinVester5__factory.prototype;
  const darwinCommunityFactory = DarwinCommunity__factory.prototype;
  const darwinFactory = Darwin__factory.prototype;
  const stakedDarwinFactory = StakedDarwin__factory.prototype;
  const darwinBurnerFactory = DarwinBurner__factory.prototype;
  const stakingFactory = DarwinStaking__factory.prototype;
  const evoturesFactory = await ethers.getContractFactory("EvoturesNFT");
  const ticketFactory = LootboxTicket__factory.prototype;
  const multiplierFactory = MultiplierNFT__factory.prototype;


  //! [DEPLOY] EVOTURES
  const evotures = await evoturesFactory.deploy() as EvoturesNFT;
  await evotures.deployed();
  console.log(`🔨 Deployed Evotures NFT at: ${evotures.address}`);

  //? [VERIFY] EVOTURES
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: evotures.address,
      constructorArguments: []
    });
  }


  //! [DEPLOY] MULTIPLIER
  const multiplier = await multiplierFactory.deploy() as MultiplierNFT;
  await multiplier.deployed();
  console.log(`🔨 Deployed Multiplier NFT at: ${multiplier.address}`);

  //? [VERIFY] MULTIPLIER
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: multiplier.address,
      constructorArguments: []
    });
  }


  //! [ATTACH] TICKET
  const ticket = ticketFactory.attach(await multiplier.ticketsContract()) as LootboxTicket;
  await ticket.deployed();
  console.log(`🔨 Deployed Lootbox Ticket at: ${ticket.address}`);

  //? [VERIFY] TICKET
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: ticket.address,
      constructorArguments: []
    });
  }


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


  //! [DEPLOY] VESTER7
  const vester7 = await darwinVester7Factory.deploy(privateSaleBuyers, buyersInfo, [evotures.address, multiplier.address]) as DarwinVester7;
  await vester7.deployed();
  console.log(`🔨 Deployed Vester7 at: ${vester7.address}`);

  //? [VERIFY] VESTER7
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: vester7.address,
      constructorArguments: [privateSaleBuyers, buyersInfo, [evotures.address, multiplier.address]]
    });
  }


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
  const staking = await stakingFactory.deploy(darwin.address, stakedDarwin.address, [evotures.address, multiplier.address]) as DarwinStaking;
  await staking.deployed();
  console.log(`🔨 Deployed Darwin Staking at: ${staking.address}`);

  //? [VERIFY] STAKING
  if (VERIFY) {
    await hardhat.run("verify:verify", {
      address: staking.address,
      constructorArguments: [darwin.address, stakedDarwin.address, [evotures.address, multiplier.address]]
    });
  }

  //* [INIT] DARWIN WITH STAKING
  const setStaking = await darwin.setDarwinStaking(staking.address);
  await setStaking.wait();
  console.log(`🏁 Staking address set for Darwin and Staked Darwin`);


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
  console.log(`🏁 Private-Sale Buyers fulfilled (25%)`);

  //* [INIT] MULTIPLIER
  await multiplier.init(darwin.address);
  console.log(`🏁 Multiplier initialized`);

  //* [INIT] VESTER5
  await vester5.init(darwin.address);
  console.log(`🏁 Private-Sale initialized`);

  //* [INIT] VESTER7
  await vester7.init(darwin.address);
  console.log(`🏁 Presale initialized`);

  //* [INIT] COMMUNITY
  await community.init(darwin.address, fundAddress, initialFundProposalStrings, restrictedProposalSignatures);
  console.log(`🏁 Community initialized`);

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

  //* [INIT] DARWIN WITH MASTERCHEF
  const setMasterChef = await darwin.setMasterChef(masterChef.address);
  await setMasterChef.wait();
  console.log(`🏁 MasterChef address set for Darwin`);

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

  //! [DEPLOY] FACTORY
  const factory = await darwinFactoryFactory.deploy(lister.address, masterChef.address, addr.busd) as DarwinSwapFactory;
  await factory.deployed();
  console.log(`🔨 Deployed Darwin Factory at: ${factory.address}`);

  if (VERIFY) {
    //? [VERIFY] FACTORY
    await hardhat.run("verify:verify", {
      address: factory.address,
      constructorArguments: [lister.address, masterChef.address, addr.busd]
    });
  }

  //* [INIT] DARWIN WITH FACTORY
  const dSetFactory = await darwin.setDarwinSwapFactory(factory.address);
  await dSetFactory.wait();
  console.log(`🏁 Factory address set for Darwin`);

  //* [INIT] LISTER
  const setFactory = await lister.setFactory(factory.address);
  await setFactory.wait()
  console.log("🏁 Lister initialized");

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

  console.log("✅ SWAP CONTRACTS DEPLOYMENT COMPLETED");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
