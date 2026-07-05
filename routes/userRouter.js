const express = require("express");

const userRouter = express.Router();
const userController = require("../controllers/userController")


userRouter.get("/",userController.getIndexPage);

userRouter.get("/home",userController.getHomePage);

userRouter.get("/home/:id",userController.getHomeDetails);

module.exports = userRouter;