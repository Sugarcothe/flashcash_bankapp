const { Client } = require('pg')

// Connection to the database
const client = new Client({
    host : 'localhost',
    user: 'postgres',
    password: 'anthonyJ5',
    database: 'postgres',
    post: 5432
})

// return to the console state of database
client.connect((err, db) => {
    if (err) {
        console.log(`🔴 Connection error`) 
        return
    } 
    console.log(`🟢 Connected to database`)
})