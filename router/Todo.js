const express = require("express");
const Createtodo = require("../modules/Createtodo");
const Deletetodo = require("../modules/Deletetodo");
const Gettodo = require("../modules/Getalldata");
const Updatetodo = require("../modules/Updatetodo");
const router = express.Router();
/////// get all data
router.get("/todo",Gettodo);


/////
////post /create data 
router.post("/todo",Createtodo);


/////update/data
router.put("/todo/:id",Updatetodo);

////delete data
router.delete("/todo/:id", Deletetodo);
module.exports= router;