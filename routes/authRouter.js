const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();



authRouter.get("/login",authController.getLoginPage);

module.exports = authRouter;