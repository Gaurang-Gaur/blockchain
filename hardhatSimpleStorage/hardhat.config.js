require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config(); // Add this line at the very top
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.Ether_Scan_API_KEY;
const Coin_CAP_API_KEY = process.env.Coin_Cap_API_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_RPC_URL || "", // Fallback to empty string if not found
      accounts: [PRIVATE_KEY || ""],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts by hardhat
      chainId: 31337,
    },
  },
  solidity: "0.8.28",
  etherscan: {
    apiKey: API_KEY,
  },
  gasReporter: {
    enabled: true,
    offline: true, // <-- Add this line to suppress Etherscan API calls
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: Coin_CAP_API_KEY,
  },
};
