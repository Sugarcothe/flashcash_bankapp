const express = require('express')
const {createNewAccount,
  deposit,
  withdraw,
  transfer,
  balance,} = require('./db')

const app = express()

app.post("/create", express.json(), (req, res) => {
  createNewAccount(req.body, (msg) => {
    res.json({ sts: "success", msg });
  });
});

app.put("/transfer", express.json(), (req, res) => {
  transfer(req.body, (msg) => {
    res.json({ sts: "success", msg });
  });
});

app.put("/withdraw", express.json(), (req, res) => {
  withdraw(req.body, (msg) => {
    res.json({ sts: "success", msg });
  });
});

app.put("/deposit", express.json(), (req, res) => {
  deposit(req.body, (msg) => {
    res.json({ sts: "success", msg });
  });
});

app.get("/balance/:acId", (req, res) => {
  console.log(req.params);
  const acId = req.params.acId;
  // balance(acId)
  balance(acId, (bal) => {
    res.json({ bal });
  });
});

app.listen(8800, ()=>{
    console.log('listening on 8800')
})