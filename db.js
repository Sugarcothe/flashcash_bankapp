const { Client } = require('pg')
const dotenv = require('dotenv')

// Connection to the database
const client = new Client({
    host : 'localhost',
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

const createNewAccount = () => {
    client.query(`insert into account values ( 1, 'abc', 100 )`, (err, res) => {
        if(err) console.log(`🔴 User cannot be created ${err}`)
        else console.log(`🟢 User created`)
    })
}

createNewAccount()

// const withdraw = () => {

// }
// const deposit = () => {

// }
// const transfer = () => {

// }