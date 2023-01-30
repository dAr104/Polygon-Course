const { getMaticPOSClient, from } = require("../utils");

// aftern burn on mumbai we unlock tokens on goerli with exitERC20

const burnTxHash = "hash of burn transaction";

async function execute() {
  try {
    const maticPOSClient = await getMaticPOSClient();

    const tx = await maticPOSClient.exitERC20(burnTxHash, { from });
    console.log(tx.transactionHash);
  } catch (error) {
    console.log(error);
  }
}

execute().then(() => process.exit(0));
