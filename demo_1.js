import { ethers } from "ethers";
const provider = ethers.getDefaultProvider("https://rpc.ankr.com/eth_goerli");
const main = async () => {
  const balance = await provider.getBalance(`vitalik.eth`);
  console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
};
main();
