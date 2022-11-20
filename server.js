
const express = require('express');
require("dotenv").config();
const database = require("./DB/mongoose");
database()
const app = express();
const register= require('./router/register')
const todolist = require("./router/Todo");
var cors = require('cors')
app.use(cors()) 
app.use(express.json())

app.use('/',register);
app.use('/',todolist);
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});


