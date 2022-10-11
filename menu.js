const readline = require("readline");
const {
  createNewAccount,
  withdraw,
  deposit,
  transfer,
  updateBalance,
} = require("./db");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Bailme banking");
console.log("n 1. Welcome to Bailme banking");
console.log("n 2. Deposit Money");
console.log("n 3. Withdraw Money");
console.log("n 4. Check Balance");
console.log("n 5. Transfer Money");
console.log("n 6. Exit");

const ip = (msg) => new Promise((resolve, reject) => {
    rl.question(`${msg} : `, (ch) => {
        resolve(ch)
    })
})

const start = async () => {
  while (true) {
    const choice = await ip(`Enter Your choice`);

    if (choice == 1) {
      console.log(`🟢 Create account`);
      const acId = parseInt(await ip(`Enter Account Id`));
      const acNm = await ip(`Enter account Name`);
      const balance = 0;
      createNewAccount({ acId, acNm, balance });

    } else if (choice == 2) {
      console.log(` 🟢 Deposit Money`);
      const acId = parseInt(await ip(`Enter Account Id`));
      const amount = parseFloat(await ip(`Enter Amount`));

      deposit({ acId, amount });

    } else if (choice == 3) {
      console.log(`🟢 Withdraw Money`);

      const acId = parseInt(await ip(`Enter Account Id`));
      const amount = parseFloat(await ip(`Enter Amount`));

      withdraw({ acId, amount });

    } else if (choice == 4) {
      console.log(`🟢 Check Balance`);

      const acId = parseInt(await ip(`Enter Accont Id`));
      balance(acId);

    } else if (choice == 5) {
      console.log(`🟢 Transfer Money`);

      const srcId = parseInt(await ip(`Enter Source Account Id`));
      const destId = parseInt(await ip(`Enter Destination Account Id`));
      const amount = parseFloat(await ip(`Enter Amount`));

      transfer({ srcId, destId, amount });

    } else {
      console.log(`🟢 Thanks for banking with us`);
      process.exit();
    }
  }
};

start();