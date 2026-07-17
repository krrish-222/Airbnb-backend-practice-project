const Home = require("../models/homeModel");

exports.getAddHome = (req,res)=>{
    res.render("host/addHome");
}

exports.postAddHome = (req,res)=>{
    const {houseName,email,price,location,rating,imageUrl} = req.body;
    const home = new Home({houseName,email,price,location,rating,imageUrl});

    home.save().then(()=>{
        console.log("Home saved successfully");
    }).catch((err)=>{
        console.log("Error while adding home", err);
    }).finally(()=>{
         res.redirect("/host/hosted-homes");
    });

};

exports.getHostedHomes = (req,res)=>{
    Home.find().then((allHomes)=>{
        res.render("host/hostHomeList",{allHomes});
    }).catch(err=>{
        console.log("Error in fetching homes : ",err);
        res.end();
    })
};

exports.editDetailsForm = (req,res)=>{
    const homeId =req.params.id;
    Home.findById(homeId).then((home)=>{
        res.render("host/editDetailsForm",{home});
    });
        
    
}

exports.postEditDetails = (req,res)=>{
    const homeId = req.params.id;
    const {houseName,email,price,location,rating,imageUrl} = req.body;
    Home.updateOne(
        { _id:homeId },
        { $set: { houseName,email,price,location,rating,imageUrl } }      
    ).then(()=>{
        console.log("Home updated successfully")
        res.redirect("/host/hosted-homes");
    }).catch(err=>{
        console.log("Error updating the home ",err);
        res.redirect("/host/hosted-homes");
    });
    
};

exports.deleteHome = (req,res)=>{
    const homeId = req.params.id;
    Home.findByIdAndDelete(homeId).then(()=>{
        res.redirect("/host/hosted-homes");
    }).catch(err=>{
        console.log("Error in deleting home ",err)
        res.redirect("/host/hosted-homes");
    }
    );
};

