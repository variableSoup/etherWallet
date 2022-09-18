const main = async () => {
    const walletContractFactory = await hre.ethers.getContractFactory('Wallet');
    const walletContract = await walletContractFactory.deploy();
    await walletContract.deployed();
    console.log("Contract deployed to:", walletContract.address);

    const bal = await walletContract.getBalance();
    console.log(bal);

    const tx = await walletContract.send('0x1aaa529FD9D6f14bC2E81BED5962D68C1B2C44f1');
    tx.wait();
    console.log(tx);
}

const runMain = async () => {
    try { 
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};

runMain();
