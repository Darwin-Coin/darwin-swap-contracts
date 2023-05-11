/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDarwinSwapLister,
  IDarwinSwapListerInterface,
} from "../../../contracts/interfaces/IDarwinSwapLister";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
    ],
    name: "TokenBanned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenTaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenTaxOnBuy",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.OwnTokenomicsInfo",
            name: "ownToks",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenA1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToADG",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.TokenomicsInfo",
            name: "addedToks",
            type: "tuple",
          },
          {
            internalType: "enum IDarwinSwapLister.TokenStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "validator",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeReceiver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "valid",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "official",
            type: "bool",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
          },
        ],
        indexed: true,
        internalType: "struct IDarwinSwapLister.TokenInfo",
        name: "proposalInfo",
        type: "tuple",
      },
    ],
    name: "TokenProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "TokenValidated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTok1Tax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTok2Tax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "tokenInfo",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenTaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenTaxOnBuy",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.OwnTokenomicsInfo",
            name: "ownToks",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenA1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToADG",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.TokenomicsInfo",
            name: "addedToks",
            type: "tuple",
          },
          {
            internalType: "enum IDarwinSwapLister.TokenStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "validator",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeReceiver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "valid",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "official",
            type: "bool",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
          },
        ],
        internalType: "struct IDarwinSwapLister.TokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IDarwinSwapLister__factory {
  static readonly abi = _abi;
  static createInterface(): IDarwinSwapListerInterface {
    return new utils.Interface(_abi) as IDarwinSwapListerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDarwinSwapLister {
    return new Contract(address, _abi, signerOrProvider) as IDarwinSwapLister;
  }
}
