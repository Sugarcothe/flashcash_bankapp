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
        console.log(`🔴 Connection error`) 
        return
    } 
    console.log(`🟢 Connected to database`)
})