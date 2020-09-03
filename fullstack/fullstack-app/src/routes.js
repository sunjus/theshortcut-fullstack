const express = require("express");
const multer = require("multer");

const UserController = require("./controllers/UserController");
const EventController = require("./controllers/EventController");
const uploadConfig = require("./config/upload");

//define middleware which allows us to route from different file
const routes = express.Router();
//multer instance of our upload config to use functionality
const upload = multer(uploadConfig);

//define routes using express Router method
//checking if app is running fine
routes.get("/status", (req, res) => {
  res.send({ status: 200 });
});

//Event
//event creation and point
routes.post("/event", upload.single("thumbnail"), EventController.createEvent);

//User
//registering
routes.post("/user/register", UserController.createUser);

//getting user by ID
routes.get("/user/:userId", UserController.getUserById);

//export routes
module.exports = routes;
