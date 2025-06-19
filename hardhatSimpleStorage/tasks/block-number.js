const { task } = require("hardhat/config");

task("block-number", "print the current block number").setAction(
  async (taskArgs, hre) => {
    // hre is hardhat runtime environment
    // similar to require('hardhat');

    const blockNumber = await hre.ethers.provider.getBlockNumber();

    console.log("current block number on live chain", blockNumber);
  }
);
