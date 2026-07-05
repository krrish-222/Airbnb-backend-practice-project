const express = require('express');
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const errorRouter = require("./routes/errorRouter");


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(userRouter);
app.use(hostRouter);
app.use(errorRouter);

app.listen(3000,()=>{
    console.log("server running on port 3000");
})