const express = require("express");
const errorController = require("../controllers/errorController");
const errorRouter = express.Router();



errorRouter.use("/",errorController.pagenotfound);

module.exports = errorRouter;