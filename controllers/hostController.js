const {Home} = require("../models/homeModel")
exports.getAddHome = (req,res)=>{
    res.render("host/addHome");
}

exports.postAddHome = (req,res)=>{
    const home = new Home(req.body.houseName,req.body.email,req.body.price,req.body.location,req.body.rating,req.body.imageUrl);
    home.save();
    res.render("host/homeAdded");
};
