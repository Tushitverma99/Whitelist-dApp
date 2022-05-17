const {ethers}  = require("hardhat");

async function main(){

    const whitelistContract = await ethers.getContractFactory("Whitelist");

    const deployedWhitelistContracts = await whitelistContract.deploy(10);

    await deployedWhitelistContracts.deployed();

    console.log(
        "White List Contrcat Address", deployedWhitelistContracts.address
    );

}

main()
.then(() => process.exit(0))
.catch((error) =>{
    console.error(error);
    process.exit(1);
});