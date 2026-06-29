const express = require("express");

const homeRouter = express.Router();
const {allHomes} = require("./addHome")



homeRouter.get("/",(req,res)=>{
    res.render("home",{allHomes});
});



module.exports = homeRouter;