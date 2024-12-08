const factoryAddress = "0xE0BDe726D897C70B144E9698a3224c1F78576A46";
const AppName = "MemeCoinFactory";
const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coinAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "CoinCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_premintSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialPrice",
        type: "uint256",
      },
    ],
    name: "addCoin",
    outputs: [
      {
        internalType: "address",
        name: "",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_newPremintSupply",
        type: "uint256",
      },
    ],
    name: "updateCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_coinAddress",
        type: "address",
      },
      {
        internalType: "enum MemeCoin.CoinStatus",
        name: "_newStatus",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "_transferOwnership",
        type: "bool",
      },
    ],
    name: "updateStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchAll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "coinAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "premintSupply",
            type: "uint256",
          },
          {
            internalType: "enum MemeCoin.CoinStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "network",
            type: "address",
          },
        ],
        internalType: "struct MemeCoinFactory.UserCoin[]",
        name: "allCoins",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "fetchCoin",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "coinAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "premintSupply",
            type: "uint256",
          },
          {
            internalType: "enum MemeCoin.CoinStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "network",
            type: "address",
          },
        ],
        internalType: "struct MemeCoinFactory.UserCoin[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isUserExists",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userCoins",
    outputs: [
      {
        internalType: "address",
        name: "coinAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "premintSupply",
        type: "uint256",
      },
      {
        internalType: "enum MemeCoin.CoinStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "network",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userExists",
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
];

export { factoryAddress, contractABI, AppName };