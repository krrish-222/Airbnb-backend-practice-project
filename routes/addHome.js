const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res)=>{
    res.render("addHome");
})
const allHomes = [];
hostRouter.post("/add-home",(req,res)=>{
    allHomes.push(req.body);
    res.render("homeAdded");
})


module.exports = {hostRouter,allHomes};