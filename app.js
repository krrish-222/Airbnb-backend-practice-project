const express = require('express');
const homeRouter = require("./routes/home");
const {hostRouter} = require("./routes/addHome");



const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/",(req,res,next)=>{
    console.log(req.url,req.method);
    next();
})
app.use(homeRouter);
app.use(hostRouter);

app.listen(3000,()=>{
    console.log("server running on port 3000");
})