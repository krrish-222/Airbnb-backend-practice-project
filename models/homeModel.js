const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const filePath = path.join(rootDir,"data","homes.json")

exports.Home = class Home{
    constructor(houseName,email,price,location,rating,imageUrl){
        this.houseName = houseName;
        this.email = email;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    save() {
        this.id = Math.random().toString();
        Home.fetchAll((allHomes)=>{
            allHomes.push(this);
            fs.writeFile(filePath,JSON.stringify(allHomes),(err)=>{
            if(err){
                console.log("Error writing to file : ",err);
                return;
            }
        });
        })
        
    }
    static fetchAll(callback){
        fs.readFile(filePath,(err,data)=>{
            if(err){
                console.log("Error reading file ");
                callback([]);
            }
            else{
                callback(JSON.parse(data));
            } 
        });
    }

}
