const { ethers, upgrades } = require("hardhat");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // deploy
  const VOTING = await hre.ethers.getContractFactory("PersonGovernanceVoting");
  const voting = await VOTING.deploy("1690175243", "1695532043", "https://raw.githubusercontent.com/App-Voting/Bau-Cu-Voting/main/blockchain");
  await voting.deployed();
  console.log("voting deployed to:", voting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
