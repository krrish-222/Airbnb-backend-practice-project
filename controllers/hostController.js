const {Home} = require("../models/homeModel")

exports.getAddHome = (req,res)=>{
    res.render("host/addHome");
}

exports.postAddHome = (req,res)=>{
    const home = new Home(req.body.houseName,req.body.email,req.body.price,req.body.location,req.body.rating,req.body.imageUrl);
    home.save().then(()=>{
        console.log("Home saved successfully");
    }).catch((err)=>{
        console.log("Error while adding home", err);
    }).finally(()=>{
         res.redirect("/host/hosted-homes");
    });

};

exports.getHostedHomes = (req,res)=>{
    Home.fetchAll().then((allHomes)=>{
        res.render("host/hostHomeList",{allHomes});
    }).catch(err=>{
        console.log("Error in fetching homes : ",err);
        res.end();
    })
};

exports.editDetailsForm = (req,res)=>{
    const homeId =req.params.id;
    Home.fetchAll().then((allHomes)=>{
        Home.findById(homeId).then((home)=>{
            res.render("host/editDetailsForm",{home});
        });
        
    }).catch(err=>{
        console.log("Error in fetching homes : ",err);
        res.end();
    })
}

exports.postEditDetails = (req,res)=>{
    const editedhome = new Home(req.body.houseName,req.body.email,req.body.price,req.body.location,req.body.rating,req.body.imageUrl);
    Home.updateHome(req.params.id,editedhome);
    res.redirect("/host/hosted-homes");
};

exports.deleteHome = (req,res)=>{
    Home.deleteHome(req.params.id);
    res.redirect("/host/hosted-homes");
};

