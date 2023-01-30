const {
  getMaticPOSClient,
  from,
  rootTokenContract,
  childTokenContract,
} = require("../utils");

const amount = 10; // equal at approve.js

async function execute() {
  console.log("Starting deposit...");
  const maticPOSClient = getMaticPOSClient();

  let balanceOfToken = await maticPOSClient.balanceOfERC20(
    from,
    childTokenContract,
    {}
  );

  console.log("Balance of token before deposit: ", balanceOfToken);

  const tx = await maticPOSClient.depositERC20ForUser(
    rootTokenContract,
    from,
    amount,
    {
      from,
      gasPrice: "10000000000",
    }
  );

  console.log("Amount deposited...");
  console.log(tx);

  balanceOfToken = await maticPOSClient.balanceOfERC20(
    from,
    childTokenContract,
    {}
  );

  console.log("Balance of token after deposit: ", balanceOfToken);
}

execute().then((_) => process.exit(0));
