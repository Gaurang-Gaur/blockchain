const { JsonRpcProvider, Wallet, ContractFactory } = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const provider = new JsonRpcProvider(process.env.RPC_URL); // Your Ganache RPC URL

  const wallet = new Wallet(
    process.env.PRIVATE_KEY, // Your private key
    provider
  );

  const abi = fs.readFileSync(
    "./build/SimpleStorage_sol_SimpleStorage.abi",
    "utf8"
  );
  const binary = fs.readFileSync(
    "./build/SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ContractFactory(abi, binary, wallet);

  console.log("Deploying the contract...");
  const contract = await contractFactory.deploy();

  console.log("Waiting for contract deployment to be confirmed...");
  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();
  console.log(`Contract deployed at address: ${contractAddress}`);

  try {
    console.log("Retrieving initial favorite number...");
    const favNumber = await contract.retrieve();
    console.log(`Initial favorite number: ${favNumber.toString()}`);

    console.log("Storing a new favorite number...");

    // --- IMPORTANT: Get the nonce immediately before sending the 'store' transaction ---
    const currentNonce = await wallet.getNonce();
    console.log("Current nonce before store transaction:", currentNonce);

    // Call store with an explicit nonce in the overrides
    const txResponse = await contract.store(343432);

    console.log(`Transaction to store sent. Hash: ${txResponse.hash}`);
    const txReceipt = await txResponse.wait(1);
    console.log("Store transaction mined:", txReceipt.hash);

    console.log("Retrieving updated favorite number...");
    const updateFavNumber = await contract.retrieve();
    console.log(`Updated favorite number: ${updateFavNumber.toString()}`);
  } catch (error) {
    console.error("Error interacting with the deployed contract:", error);
    // console.error(error); // Uncomment for more detailed error object
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("Script failed:", e);
    process.exit(1);
  });
