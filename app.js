const express = require('express');
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const errorRouter = require("./routes/errorRouter");
const { default: mongoose } = require('mongoose');
const authRouter = require('./routes/authRouter');


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
require("dotenv").config();


app.use(userRouter);
app.use(hostRouter);
app.use(authRouter);
app.use(errorRouter);


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to mongoDB successfully");
        app.listen(3000, () => {
            console.log(`Server running on localhost:3000`);
        });
    }
    ).catch(err=>{
        console.log("Error connecting to mongoDb", err);
    });
