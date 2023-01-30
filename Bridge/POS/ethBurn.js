const { getMaticPOSClient, from } = require("../utils");

const amount = "500000000000000000"; // amount in wei
const childTokenContract = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa"; // WETH contract address on mumbai testnet

async function execute() {
  console.log("burning started");

  const maticPOSClient = await getMaticPOSClient();

  maticPOSClient
    .burnERC20(childTokenContract, amount, { from })
    .then((burnTX) => {
      console.log("\n\n", burnTX);
      console.log("\nBurning completed.... \n\n");
      console.log("Transaction Hash: ", burnTX.transactionHash);
    });
}

execute().then(() => process.exit(0));
