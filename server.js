const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.status(200).send({message: "Hello! This is a test message."})
})

app.listen(3001, ()=> {
    console.log("Api rodando na porta 3001!");
})