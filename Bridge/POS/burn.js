const { getMaticPOSClient, from, childTokenContract } = require("../utils");

// burn token on polygon to unlock token on goerli via POS bridge

const amount = 10;

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
