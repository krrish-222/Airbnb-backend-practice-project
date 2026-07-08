const {Home} = require("../models/homeModel")
const {favourite} = require("../models/favouriteModel");



exports.getIndexPage = (req,res)=>{
    res.render("user/index");
};

exports.getHomePage = (req,res)=>{
    Home.fetchAll((allHomes)=>{
        res.render("user/home",{allHomes});
    });
    
    
};

exports.getHomeDetails = (req,res)=>{
    const homeId = req.params.id;

    Home.findById(homeId, (hometoshow) => {
        if(!hometoshow){
            console.log("home not found");
            res.redirect("/home");
            res.end();
        }
        res.render("user/homeDetails", { hometoshow });
    })
};

exports.getFavourites = (req, res) => {
    
    Home.fetchAll((allHomes)=>{
        favourite.getFavourites((allFavourites)=>{
           const favouriteHomes = allFavourites.map((homeId)=>{
                return allHomes.find((home)=> home.id === homeId )
           });
           res.render("user/favourites",{allHomes:favouriteHomes});
        })
    })
    
};

exports.postToFavourites = (req, res) => {
    favourite.addToFavourite(req.body.id);
    res.redirect("/favourites");
};

exports.removeFavourite = (req, res) => {

    favourite.remove(req.params.id);
    res.redirect("/favourites");
};
