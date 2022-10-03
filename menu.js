const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Welcome to Bailme banking')
console.log('n\ 1. Welcome to Bailme banking')
console.log('n\ 2. Deposit Money')
console.log('n\ 3. Withdraw Money')
console.log('n\ 4. Check Balance')
console.log('n\ 5. Transfer Money')
console.log('n\ 6. Exit')

const ip = () => new Promise((resolve, reject) => {
    rl.question('n\ What transaction are you performing? ', (ch) => {
        resolve(ch)
    })
})

const start = async () => {
    while(true) {
        const choice = await ip()
        if (choice == 1) {
            console.log(`🟢 Create account`)
        }
        else if (choice == 2){
            console.log(`🟢 Deposit Money`)
        }
        else if (choice == 3){
            console.log(`🟢 Withdraw Money`)
        }
        else if (choice == 4){
            console.log(`🟢 Check Balance`)
        }
        else if (choice == 5){
            console.log(`🟢 Trasnfer Money`)
        }
         else {
            console.log(`🟢 Thanks for banking with us`)
            process.exit()
         }
    }
}

start()