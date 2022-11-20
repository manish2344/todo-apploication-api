
const express = require('express');
require("dotenv").config();
const database = require("./DB/mongoose");
database()
const app = express();
const register= require('./router/register')
const todolist = require("./router/Todo");
var cors = require('cors')
app.use(express.json())
app.use(cors()) 
app.use('/',register);
app.use('/',todolist);

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
});


