const { getMaticPOSClient, from, rootTokenContract } = require("../utils");

const amount = 10;

async function execute() {
  console.log("started...");
  const maticPOSClient = await getMaticPOSClient();
  const approval = await maticPOSClient.approveERC20TokensForDeposit(
    rootTokenContract,
    amount,
    { from }
  );

  console.log("Approved...");
  console.log(approval);
}

execute().then((res) => process.exit(0));
