const {Home} = require("../models/homeModel")
const fs = require("fs").promises;
const path = require("path");
const rootDir = require("../utils/path");
const { json } = require("stream/consumers");

exports.getIndexPage = (req,res)=>{
    res.render("user/index");
};

exports.getHomePage = (req,res)=>{
    Home.fetchAll((allHomes)=>{
        res.render("user/home",{allHomes});
    });
    
    
};

exports.getHomeDetails = async function(req,res){
    const homeId = req.params.id;
    console.log(homeId);
    const filepath = path.join(rootDir,"data","homes.json");
    let allhomes;
    let hometoshow;
    try{
        let data =  await fs.readFile(filepath);
        allhomes = JSON.parse(data);

        hometoshow = allhomes.find((home)=>{
            return homeId === home.id;
        })
    
    }
    catch(err){
        console.log("error reading file : ",err);
    }
    
    res.render("user/homeDetails", { hometoshow });

};