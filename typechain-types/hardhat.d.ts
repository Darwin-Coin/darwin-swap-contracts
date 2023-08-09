/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "DarwinLiquidityBundles",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinLiquidityBundles__factory>;
    getContractFactory(
      name: "DarwinSwapERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinSwapERC20__factory>;
    getContractFactory(
      name: "DarwinSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinSwapFactory__factory>;
    getContractFactory(
      name: "DarwinSwapLister",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinSwapLister__factory>;
    getContractFactory(
      name: "DarwinSwapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinSwapPair__factory>;
    getContractFactory(
      name: "DarwinSwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinSwapRouter__factory>;
    getContractFactory(
      name: "IDarwinLiquidityBundles",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinLiquidityBundles__factory>;
    getContractFactory(
      name: "IDarwinSwapCallee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinSwapCallee__factory>;
    getContractFactory(
      name: "IDarwinSwapERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinSwapERC20__factory>;
    getContractFactory(
      name: "IDarwinSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinSwapFactory__factory>;
    getContractFactory(
      name: "IDarwinSwapLister",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinSwapLister__factory>;
    getContractFactory(
      name: "IDarwinSwapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinSwapPair__factory>;
    getContractFactory(
      name: "IDarwinSwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinSwapRouter__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ILiquidityInjector",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILiquidityInjector__factory>;
    getContractFactory(
      name: "IDarwinMasterChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinMasterChef__factory>;
    getContractFactory(
      name: "ITokenLocker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenLocker__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "Tokenomics2Library",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tokenomics2Library__factory>;
    getContractFactory(
      name: "LiquidityInjector",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityInjector__factory>;
    getContractFactory(
      name: "DarwinMasterChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinMasterChef__factory>;
    getContractFactory(
      name: "TestERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20__factory>;
    getContractFactory(
      name: "BoosterNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoosterNFT__factory>;
    getContractFactory(
      name: "Darwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Darwin__factory>;
    getContractFactory(
      name: "DarwinBurner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinBurner__factory>;
    getContractFactory(
      name: "IDarwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwin__factory>;
    getContractFactory(
      name: "DarwinCommunity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinCommunity__factory>;
    getContractFactory(
      name: "IDarwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwin__factory>;
    getContractFactory(
      name: "DarwinPresale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinPresale__factory>;
    getContractFactory(
      name: "DarwinPrivateSale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinPrivateSale__factory>;
    getContractFactory(
      name: "DarwinStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinStaking__factory>;
    getContractFactory(
      name: "DarwinVester5",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinVester5__factory>;
    getContractFactory(
      name: "DarwinVester7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DarwinVester7__factory>;
    getContractFactory(
      name: "EvoturesNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EvoturesNFT__factory>;
    getContractFactory(
      name: "IVRFv2Consumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVRFv2Consumer__factory>;
    getContractFactory(
      name: "IBoosterNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBoosterNFT__factory>;
    getContractFactory(
      name: "IDarwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwin__factory>;
    getContractFactory(
      name: "IDarwinCommunity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinCommunity__factory>;
    getContractFactory(
      name: "IDarwinPresale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinPresale__factory>;
    getContractFactory(
      name: "IDarwinStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinStaking__factory>;
    getContractFactory(
      name: "IDarwinVester",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwinVester__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IEvoturesNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEvoturesNFT__factory>;
    getContractFactory(
      name: "ILootboxTicket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILootboxTicket__factory>;
    getContractFactory(
      name: "IMultiplierNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMultiplierNFT__factory>;
    getContractFactory(
      name: "IOldVester",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOldVester__factory>;
    getContractFactory(
      name: "IStakedDarwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakedDarwin__factory>;
    getContractFactory(
      name: "LootboxTicket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LootboxTicket__factory>;
    getContractFactory(
      name: "MainnetNFTCounter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MainnetNFTCounter__factory>;
    getContractFactory(
      name: "MultiplierNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiplierNFT__factory>;
    getContractFactory(
      name: "OldVester",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OldVester__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "StakedDarwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakedDarwin__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface__factory>;
    getContractFactory(
      name: "VRFv2Consumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFv2Consumer__factory>;
    getContractFactory(
      name: "TokenLocker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenLocker__factory>;
    getContractFactory(
      name: "IDarwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDarwin__factory>;
    getContractFactory(
      name: "IStakedDarwin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakedDarwin__factory>;

    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "DarwinLiquidityBundles",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinLiquidityBundles>;
    getContractAt(
      name: "DarwinSwapERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinSwapERC20>;
    getContractAt(
      name: "DarwinSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinSwapFactory>;
    getContractAt(
      name: "DarwinSwapLister",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinSwapLister>;
    getContractAt(
      name: "DarwinSwapPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinSwapPair>;
    getContractAt(
      name: "DarwinSwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinSwapRouter>;
    getContractAt(
      name: "IDarwinLiquidityBundles",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinLiquidityBundles>;
    getContractAt(
      name: "IDarwinSwapCallee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinSwapCallee>;
    getContractAt(
      name: "IDarwinSwapERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinSwapERC20>;
    getContractAt(
      name: "IDarwinSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinSwapFactory>;
    getContractAt(
      name: "IDarwinSwapLister",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinSwapLister>;
    getContractAt(
      name: "IDarwinSwapPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinSwapPair>;
    getContractAt(
      name: "IDarwinSwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinSwapRouter>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ILiquidityInjector",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILiquidityInjector>;
    getContractAt(
      name: "IDarwinMasterChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinMasterChef>;
    getContractAt(
      name: "ITokenLocker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenLocker>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "Tokenomics2Library",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Tokenomics2Library>;
    getContractAt(
      name: "LiquidityInjector",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityInjector>;
    getContractAt(
      name: "DarwinMasterChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinMasterChef>;
    getContractAt(
      name: "TestERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20>;
    getContractAt(
      name: "BoosterNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoosterNFT>;
    getContractAt(
      name: "Darwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Darwin>;
    getContractAt(
      name: "DarwinBurner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinBurner>;
    getContractAt(
      name: "IDarwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwin>;
    getContractAt(
      name: "DarwinCommunity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinCommunity>;
    getContractAt(
      name: "IDarwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwin>;
    getContractAt(
      name: "DarwinPresale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinPresale>;
    getContractAt(
      name: "DarwinPrivateSale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinPrivateSale>;
    getContractAt(
      name: "DarwinStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinStaking>;
    getContractAt(
      name: "DarwinVester5",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinVester5>;
    getContractAt(
      name: "DarwinVester7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DarwinVester7>;
    getContractAt(
      name: "EvoturesNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EvoturesNFT>;
    getContractAt(
      name: "IVRFv2Consumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVRFv2Consumer>;
    getContractAt(
      name: "IBoosterNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBoosterNFT>;
    getContractAt(
      name: "IDarwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwin>;
    getContractAt(
      name: "IDarwinCommunity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinCommunity>;
    getContractAt(
      name: "IDarwinPresale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinPresale>;
    getContractAt(
      name: "IDarwinStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinStaking>;
    getContractAt(
      name: "IDarwinVester",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwinVester>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IEvoturesNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEvoturesNFT>;
    getContractAt(
      name: "ILootboxTicket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILootboxTicket>;
    getContractAt(
      name: "IMultiplierNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMultiplierNFT>;
    getContractAt(
      name: "IOldVester",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOldVester>;
    getContractAt(
      name: "IStakedDarwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakedDarwin>;
    getContractAt(
      name: "LootboxTicket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LootboxTicket>;
    getContractAt(
      name: "MainnetNFTCounter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MainnetNFTCounter>;
    getContractAt(
      name: "MultiplierNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiplierNFT>;
    getContractAt(
      name: "OldVester",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OldVester>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "StakedDarwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakedDarwin>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "VRFConsumerBaseV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2>;
    getContractAt(
      name: "VRFCoordinatorV2Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    getContractAt(
      name: "VRFv2Consumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFv2Consumer>;
    getContractAt(
      name: "TokenLocker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenLocker>;
    getContractAt(
      name: "IDarwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDarwin>;
    getContractAt(
      name: "IStakedDarwin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakedDarwin>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
