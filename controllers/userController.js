const Home = require("../models/homeModel")
const Favourite = require("../models/favouriteModel");



exports.getIndexPage = (req,res)=>{
    Home.find().then((allHomes)=>{
        res.render("user/index",{allHomes});
    }).catch(err=>{
        console.log("Error in fetching homes : ",err);
        res.end();
    })
    
};

exports.getHomePage = (req,res)=>{
    Home.find().then((allHomes)=>{
        res.render("user/home",{allHomes});
    }).catch(err=>{
        console.log("Error in fetching homes : ",err);
        res.end();
    })
    
};

exports.getHomeDetails = (req,res)=>{
    const homeId = req.params.id;
    Home.findById(homeId).then((hometoshow)=>{
        res.render("user/homeDetails", { hometoshow });
    }).catch((err)=>{
        console.log("home not found",err);
        res.redirect("/home");
        res.end();
    });
}

exports.getFavourites = (req, res) => {
    
    Favourite.find().populate("homeId").then((allFav)=>{
        const allFavHomes = allFav.map(fav=>fav.homeId);
        res.render("user/favourites",{allHomes:allFavHomes});
    }).catch(err=>{
        console.log("Error fetching all favourites");
        res.end();
    })
    
};

exports.postToFavourites = (req, res) => {
    const homeId = req.body.id;
    const favourite = new Favourite({homeId});

    favourite.save().then(()=>{
        console.log("Home added to favourites succesfully");
    }).catch((err)=>{
        console.log("Error adding home to favourite: ",err);
    })
    .finally(()=>{
        res.redirect("/favourites");
    });
};

exports.removeFavourite = (req, res) => {
    const homeId = req.params.id;
    Favourite.findOneAndDelete({homeId}).then(()=>{
        console.log("Home removed from favourites succesfully")
    }).catch((err)=>{
        console.log("Error removing home from favourites: ",err);
    })
    .finally(()=>{
        res.redirect("/favourites");
    });;
};
