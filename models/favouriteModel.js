const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({ 
    homeId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Home",
        required: true,
        unique: true,
    }
});



module.exports = mongoose.model("Favourite",favouriteSchema);

// const { getDB } = require("../utils/db");


// exports.favourite = class favourite{
    
//     static getFavourites(){
//         const db = getDB();
//         return db.collection("favourites").find().toArray();
//     }
//     static addToFavourite(homeId){
//         const db = getDB();
//         return favourite.getFavourites().then((allFav)=>{
//             allFav = allFav.map(home=> home.homeId);
            
//            if(allFav.includes(homeId)){
//             console.log("Home is already favourite");
//             return Promise.reject("Home already in favourites");
//            }
//            else{
//             return db.collection("favourites").insertOne({homeId: homeId});
//            }
//         })
        
//     }

//     static remove(homeId){
//         const db = getDB();
//         return db.collection("favourites").deleteOne({homeId:homeId});
//     }
// }