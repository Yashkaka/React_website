const express = require('express');
const app = express();
const mongoose=require('mongoose');
const User = require('./models/userschema');
app.use(express.json());

let cors = require("cors");
app.use(cors());

require('./models/db/conn');

app.use(require('./router/auth'));


const middleware=(req, res, next) =>{
    console.log("hello my miidleware");
    next();
}


app.get('/login',middleware,(req,res) =>{
    res.send("connected to register")
})

console.log("hello");

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})



// {
//     "name":"yash",
//     "email":"ahsabab@gmail.com",
//     "phone":83998293,
//     "work":"web dev",
//     "password":"yash"
//   }