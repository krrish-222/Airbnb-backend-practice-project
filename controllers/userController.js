const Home = require("../models/homeModel")
const favourite = require("../models/favouriteModel");



exports.getIndexPage = (req,res)=>{
    res.render("user/index");
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
    
    Home.find().then((allHomes)=>{
        favourite.getFavourites().then((allFavourites)=>{
            allFavourites = allFavourites.map((fav)=> fav.homeId);
           const favouriteHomes = allFavourites.map((homeId)=>{
                return allHomes.find((home)=> home._id.toString() === homeId )
           });
           res.render("user/favourites",{allHomes:favouriteHomes});
        }).catch(err=>{
            console.log("Error in fetching favourites");
            res.end();
        })
    }).catch(err=>{
        console.log("Error in fetching homes : ",err);
        res.end();
    });
    
};

exports.postToFavourites = (req, res) => {
    favourite.addToFavourite(req.body.id).then(()=>{
        console.log("Home added to favourites succesfully");
    }).catch((err)=>{
        console.log("Error adding home to favourite: ",err);
    })
    .finally(()=>{
        res.redirect("/favourites");
    });
};

exports.removeFavourite = (req, res) => {

    favourite.remove(req.params.id).then(()=>{
        console.log("Home removed from favourites succesfully")
    }).catch((err)=>{
        console.log("Error removing home from favourites: ",err);
    })
    .finally(()=>{
        res.redirect("/favourites");
    });;
};
