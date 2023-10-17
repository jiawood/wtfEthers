import { ethers } from "ethers";
import { INFURA_ID } from "./config.js";

const provider = ethers.getDefaultProvider("https://rpc.ankr.com/eth_goerli");
const main = async () => {
  const balance = await provider.getBalance(`vitalik.eth`);
  console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
};
// main();


// const providerETH = new ethers.JsonRpcApiProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const providerGoerli = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

// 1. 查询vitalik在主网和Goerli测试网的ETH余额
console.log("1. 查询vitalik在主网和Goerli测试网的ETH余额");
// const balance = await providerETH.getBalance(`vitalik.eth`);
const balanceGoerli = await providerGoerli.getBalance(`vitalik.eth`);
// 将余额输出在console（主网）
// console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
// 输出Goerli测试网ETH余额
console.log(`Goerli ETH Balance of vitalik: ${ethers.formatEther(balanceGoerli)} ETH`);


const blockNumber = await providerGoerli.getBlockNumber();
console.log(blockNumber);

const txCount = await providerGoerli.getTransactionCount(`vitalik.eth`);
console.log(txCount);