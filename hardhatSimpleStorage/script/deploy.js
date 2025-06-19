const { ethers, run } = require("hardhat");
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying Contract");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();
  const contractAddress = simpleStorage.runner.address;
  console.log("contractAddress", contractAddress);

  // for network details
  // console.log(network.config);
  const chainId = network.config;
  if (chainId === 11155111 && process.env.Ether_Scan_API_KEY) {
    await simpleStorage.deploymentTransaction().wait(6);
    await verify(contractAddress, []);
  }
  const currentValue = await simpleStorage.retrieve();
  console.log("currentValue", currentValue);
  const txResponse = await simpleStorage.store(3434);
  await txResponse.wait(1);
  const updateValue = await simpleStorage.retrieve();
  console.log("updateVAlue", updateValue);
}

async function verify(contractAddress, args) {
  console.log("verifyContract");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("alreadyVerified");
    } else {
      console.log(e);
    }
  }
}
main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
