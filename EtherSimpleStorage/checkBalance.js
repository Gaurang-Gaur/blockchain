const { ethers } = require("ethers");

async function checkBalances() {
  // Connect to Ganache CLI (default port is 8545)
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");

  // Get the list of accounts
  const accounts = await provider.listAccounts();

  console.log("Account Balances:");
  for (let i = 0; i < accounts.length; i++) {
    const address = accounts[i].address;
    const balanceWei = await provider.getBalance(address);
    const balanceEth = ethers.formatEther(balanceWei); // Convert Wei to Ether
    console.log(`Account ${i} (${address}): ${balanceEth} ETH`);
  }
}

checkBalances().catch(console.error);
