const {
  getMaticPOSClient,
  from,
  childTokenContract,
  rootTokenContract,
} = require("..utils");

const amount = "1000000000000000000"; // amount in wei

async function execute() {
  console.log("Starting deposit...");
  const maticPOSClient = await getMaticPOSClient();

  try {
    let balanceOfToken = await maticPOSClient.balanceOfERC20(
      from,
      childTokenContract,
      {}
    );

    console.log("Balance of token before deposit: ", balanceOfToken);

    const approvalTx = await maticPOSClient.approveERC20TokensForDeposit(
      rootTokenContract,
      amount,
      { from }
    );

    console.log("Deposit Approved");
    console.log(approvalTx);

    const depositTx = await maticPOSClient.depositERC20ForUser(
      rootTokenContract,
      from,
      amount,
      {
        from,
        gasPrice: "10000000000",
      }
    );

    console.log("Amount deposited...");
    console.log(depositTx);

    balanceOfToken = await maticPOSClient.balanceOfERC20(
      from,
      childTokenContract,
      {}
    );

    console.log("Balance of token after deposit: ", balanceOfToken);
  } catch (error) {
    console.log(error);
  }
}

execute().then((_) => process.exit(0));
