const main = async() => {

    //Compilation
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    //Deployment
    const gameContract = await gameContractFactory.deploy(
        ['Toshiro Hitsugaya', 'Hisoka Morrow', 'Itachi Uchiha'], //Names
        ['https://lh3.googleusercontent.com/proxy/Ua1TN6BJUTbdZS6mGBhOS5zGFZpyBkN5KvLmhCQm1j_SDf52g4NDJpA5hqS-3e4BmRUwTo6fmDm9CLRl9vDmRTeB-2weRMST6XVxmcDPvZ2ucw', 'https://www.enwallpaper.com/wp-content/uploads/157a16d4b80aaad06056d0c7af2e68fd.jpg', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kolpaper.com%2F29856%2Fitachi-uchiha-wallpaper%2F&psig=AOvVaw1SPXzjyWp2GMQ1_OeTbtEK&ust=1635102038821000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODR7feb4fMCFQAAAAAdAAAAABAD'], //Images
        [750, 1000, 500], //Hp values
        [800, 650, 1000], //Attack damage values
    );

    //Mining
    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Finished minting NFT #1");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Finished minting NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Finished minting NFT #3");

    console.log("Finished minting and deploying");
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