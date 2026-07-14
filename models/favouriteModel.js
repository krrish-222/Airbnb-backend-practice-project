const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const filePath = path.join(rootDir,"data","homes.json");
const favouritePath = path.join(rootDir,"data","favourites.json");


exports.favourite = class favourite{
    
    static getFavourites(callback){
        fs.readFile(favouritePath,(err,data)=>{
            if(err){
                console.log("Error reading favourite file");
                callback([]);
            }
            else {
                callback(JSON.parse(data));
            }
        })
    }
    static addToFavourite(homeId){
        favourite.getFavourites((allFavourites)=>{
            if(allFavourites.includes(homeId)){
                console.log("Home is already in your favourites");
            }
            else{
                allFavourites.push(homeId);
                fs.writeFile(favouritePath,JSON.stringify(allFavourites),(err)=>{
                    if(err){
                        console.log("Error writing to favourite file");
                    }
                });
            }
        })
    }

    static remove(homeId){
        favourite.getFavourites((allFav)=>{
            const newFavourites = allFav.filter((fav)=> fav !== homeId )
            fs.writeFile(favouritePath,JSON.stringify(newFavourites),(err)=>{
                if(err){
                    console.log("error removing favourite");
                    return;
                }            
            });
        })
    }
}