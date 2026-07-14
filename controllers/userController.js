const {Home} = require("../models/homeModel")
const {favourite} = require("../models/favouriteModel");



exports.getIndexPage = (req,res)=>{
    res.render("user/index");
};

exports.getHomePage = (req,res)=>{
    Home.fetchAll().then((allHomes)=>{
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
    
    Home.fetchAll().then((allHomes)=>{
        favourite.getFavourites((allFavourites)=>{
           const favouriteHomes = allFavourites.map((homeId)=>{
                return allHomes.find((home)=> home._id === homeId )
           });
           res.render("user/favourites",{allHomes:favouriteHomes});
        })
    }).catch(err=>{
        console.log("Error in fetching homes : ",err);
        res.end();
    });
    
};

exports.postToFavourites = (req, res) => {
    favourite.addToFavourite(req.body.id);
    res.redirect("/favourites");
};

exports.removeFavourite = (req, res) => {

    favourite.remove(req.params.id);
    res.redirect("/favourites");
};
