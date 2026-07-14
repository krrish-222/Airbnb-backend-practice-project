const mongodb = require("mongodb");
require("dotenv").config();

const mongoClient = mongodb.MongoClient;
let _db;

const mongoconnect = (callback)=>{
    mongoClient.connect(process.env.MONGO_URL)
    .then((client)=>{
        _db = client.db("airbnb");
        callback();
    }).catch((err)=>{
        console.log("Error connecting to mongoDb: ",err);
    })
}

const getDB = ()=>{
    if(!_db){
        console.log("Db not connected");
    }
    else{
        return _db;
    }
}

exports.mongoconnect = mongoconnect;
exports.getDB = getDB;
