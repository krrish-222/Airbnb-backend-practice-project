const express = require("express");

const userRouter = express.Router();
const userController = require("../controllers/userController")


userRouter.get("/",userController.getIndexPage);

userRouter.get("/home",userController.getHomePage);

userRouter.get("/home/:id",userController.getHomeDetails);

userRouter.get("/favourites",userController.getFavourites);
userRouter.post("/favourites",userController.postToFavourites);
userRouter.post("/favourites/remove/:id",userController.removeFavourite);

module.exports = userRouter;