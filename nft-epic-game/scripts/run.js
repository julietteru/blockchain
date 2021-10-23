const main = async() => {

    //Compilation
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    //Deployment
    const gameContract = await gameContractFactory.deploy(
        ['Toshiro Hitsugaya', 'Hisoka Morrow', 'Itachi Uchiha'], //Names
        ['https://lh3.googleusercontent.com/proxy/Ua1TN6BJUTbdZS6mGBhOS5zGFZpyBkN5KvLmhCQm1j_SDf52g4NDJpA5hqS-3e4BmRUwTo6fmDm9CLRl9vDmRTeB-2weRMST6XVxmcDPvZ2ucw', 'https://www.enwallpaper.com/wp-content/uploads/157a16d4b80aaad06056d0c7af2e68fd.jpg', 'https://www.enjpg.com/img/2020/itachi-uchiha-4.jpg'], //Images
        [750, 1000, 500], //Hp values
        [800, 650, 1000], //Attack damage values
    );

    //Mining
    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    txn = await gameContract.mintCharacterNFT(1);
    txn = await gameContract.mintCharacterNFT(2);

    let returneTokenUri = await gameContract.tokenURI(1);
    console.log("Token uri:", returneTokenUri);
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