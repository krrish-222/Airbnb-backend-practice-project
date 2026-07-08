const {Home} = require("../models/homeModel")

exports.getAddHome = (req,res)=>{
    res.render("host/addHome");
}

exports.postAddHome = (req,res)=>{
    const home = new Home(req.body.houseName,req.body.email,req.body.price,req.body.location,req.body.rating,req.body.imageUrl);
    home.save();
    res.redirect("/host/hosted-homes");
};

exports.getHostedHomes = (req,res)=>{
    Home.fetchAll((allHomes)=>{
        res.render("host/hostHomeList",{allHomes});
    })
};

exports.editDetailsForm = (req,res)=>{
    const homeId =req.params.id;
    Home.fetchAll((allHomes)=>{
        const home = allHomes.find((home)=> home.id === homeId);
        res.render("host/editDetailsForm",{home});
    })
}

exports.postEditDetails = (req,res)=>{
    const home = new Home(req.body.houseName,req.body.email,req.body.price,req.body.location,req.body.rating,req.body.imageUrl);
    Home.editHome(req.params.id,home);
    res.redirect("/host/hosted-homes");
};

exports.deleteHome = (req,res)=>{
    Home.deleteHome(req.params.id);
    res.redirect("/host/hosted-homes");
};

