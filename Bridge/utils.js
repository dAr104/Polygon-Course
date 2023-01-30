const HDWalletProvider = require("@truffle/hdwallet-provider");
const maticClient = require("@maticnetwork/maticjs");
require("dotenv").config();

const rootTokenContract =
  "Here goes the address of the token contract deployed on the root chain";
const childTokenContract =
  "Here goes the address of the token contract deployed on the child chain";

const from = "Here goes the address of the account that will send the tokens";
const privatKey = process.env["MNEMONIC_1"];

const infuraProjectId = process.env["INFURA_API_KEY"];

const parentProvider = new HDWalletProvider(
  privatKey,
  `https://goerli.infura.io/v3/${infuraProjectId}`
);
const maticProvider = new HDWalletProvider(
  privatKey,
  `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`
);

function getMaticPOSClient() {
  return new maticClient.MaticPOSClient({
    network: "testnet",
    version: "mumbai",
    parentProvider: parentProvider,
    maticProvider: maticProvider,
  });
}

module.exports = {
  getMaticPOSClient,
  childTokenContract,
  rootTokenContract,
  from,
};
