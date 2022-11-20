const express = require('express');
const router = express.Router();
router.get("/api",(req,res)=>{
res.send("hello manish from  churu ");

})

module.exports=router;