const express = require("express");
const hostController = require("../controllers/hostController");
const hostRouter = express.Router();

hostRouter.get("/host/add-home",hostController.getAddHome);
hostRouter.post("/host/add-home",hostController.postAddHome);

hostRouter.get("/host/hosted-homes",hostController.getHostedHomes);

hostRouter.get("/host/edit/:id",hostController.editDetailsForm);
hostRouter.post("/host/edit/:id",hostController.postEditDetails);

hostRouter.post("/host/delete/:id",hostController.deleteHome);

module.exports = hostRouter;