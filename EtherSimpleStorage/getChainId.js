const { JsonRpcProvider } = require("ethers");

async function getChainIdFromProvider() {
  const provider = new JsonRpcProvider("http://127.0.0.1:7545"); // Or your Infura/Alchemy URL

  try {
    const network = await provider.getNetwork();
    const chainId = network.chainId;
    const chainName = network.name; // You can also get the network name

    console.log("Chain ID (from provider):", chainId.toString()); // chainId is a BigInt in ethers v6
    console.log("Chain Name (from provider):", chainName);
    return chainId;
  } catch (error) {
    console.error("Error getting chain ID from provider:", error);
    return null;
  }
}

getChainIdFromProvider();
