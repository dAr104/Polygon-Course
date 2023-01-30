const { getMaticPOSClient, from } = require("../utils");

const amount = "500000000000000000"; // amount in wei
const childTokenContract = "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa"; // WETH contract address on mumbai testnet

async function execute() {
  const maticPOSClient = await getMaticPOSClient();

  let ETHBalance = await maticPOSClient.balanceOfERC20(
    from,
    childTokenContract,
    {}
  );

  console.log("WETH balance before transfer: ", ETHBalance);
  console.log("Starting deposit...");

  try {
    const tx = await maticPOSClient.depositEtherForUser(from, amount, {
      from,
      gasPrice: "10000000000",
    });

    console.log("Amount deposited...");
    console.log(tx);

    ETHBalance = await maticPOSClient.balanceOfERC20(
      from,
      childTokenContract,
      {}
    );
    console.log("WETH balance after transfer: ", ETHBalance);
  } catch (error) {
    console.log(error);
  }
}

execute().then(() => process.exit(0));
