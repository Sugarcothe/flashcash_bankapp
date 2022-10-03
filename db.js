const { Client } = require('pg')
const dotenv = require('dotenv')

// Connection to the database
const client = new Client({
    host : process.env.host,
    user: process.env.user,
    password: process.env.password + "",
    database: process.env.database,
    post: process.env.post
})

// return to the console state of database
client.connect((err, db) => {
    if (err) {
        console.log(`🔴 Connection error ${err}`) 
        return
    } 
    console.log(`🟢 Connected to database`)
})

// const createNewAccount = () => {
//     client.query(`insert into account values ( 1, 'abc', 100 )`, (err, res) => {
//         if(err) console.log(`🔴 User cannot be created`)
//         else console.log(`🟢 User created`)
//     })
// }

// createNewAccount()

// const withdraw = () => {

// }
// const deposit = () => {

// }
// const transfer = () => {

// }