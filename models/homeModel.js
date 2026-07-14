const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/db");
const { favourite } = require("./favouriteModel");

exports.Home = class Home{
    constructor(houseName,email,price,location,rating,imageUrl){
        this.houseName = houseName;
        this.email = email;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    save(){
        const db = getDB();
        return db.collection("homes").insertOne(this);
    }

    static fetchAll(){
        const db = getDB();
        return db.collection("homes").find().toArray();
    }

    static findById(homeId){
        const db = getDB();
        return db.collection("homes").find({_id: new ObjectId(String(homeId)) }).next();
    }

    static updateHome(homeId,updatedHome){
        const db = getDB();
        db.collection("homes").updateOne({_id: new ObjectId(String(homeId))},{$set: updatedHome});
    }

    static deleteHome(homeId){
  
    }
}
