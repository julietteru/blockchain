const main = async() => {

    //Compilation
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    //Deployment
    const gameContract = await gameContractFactory.deploy();

    //Mining
    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address);
};

const runMain = async() => {
    try {
        await main();
        process.exit(0);

    } catch (error) {

        console.log(error);
        process.exit(1);
    }
};

runMain();