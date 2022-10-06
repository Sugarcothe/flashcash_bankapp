const { Client } = require('pg')
const dotenv = require('dotenv')

// Connection to the database
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: "anthonyJ5",
    database: 'postgres',
    port: '5432'
})

// return to the console state of database
client.connect((err, db) => {
    if (err) {
        console.log(`🔴 Connection error ${err}`)
        return
    }
    console.log(`🟢 Connected to database`)
})

const createNewAccount = ({ acId, acNm, balance }) => {
    client.query(`insert into account values ($1, $2, $3)`, [acId, acNm, balance], (err, res) => {
        if (err) console.log(`🔴 User cannot be created, another user already has ${acId} as their ID`)
        else {
            console.log(`🟢 ${acNm}, your account is created`)
            // console.log(res)
        }
    })
}
// createNewAccount({acId: 6, acNm: 'Ify', balance: 130})

const withdraw = ({ acId, amount }) => {
    client.query(`Select balance from the account where acId = $1`, [acId], (err, res) => {
        const { balance } = parseFloat(res.rows[0].balance)
        console.log(`Your existing balance is ${balance}`)

        const newBalance = balance - amount

        client.query(`Update account set balance = $2 where acId = $2`, [newBalance, acId], (err, res) => {
            if (err) console.log(`🔴 Cannot withdraw ${amount}, because ${err}`)
            else console.log(`🟢 Successfully withdrawn ${amount}`)
        })
    })
}
withdraw({ acId: 1, amount: 0 })

// const deposit = () => {

// }
// const transfer = () => {

// }