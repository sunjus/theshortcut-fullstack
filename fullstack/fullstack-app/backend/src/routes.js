const express = require("express");
const multer = require("multer");

const verifyToken = require("./config/verifyToken");
const UserController = require("./controllers/UserController");
const EventController = require("./controllers/EventController");
const DashboardController = require("./controllers/DashboardController");
const LoginController = require("./controllers/LoginController");
const RegistrationController = require("./controllers/RegistrationController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");
const uploadConfig = require("./config/upload");

//Creating instances
//define middleware which allows us to route from different file
const routes = express.Router();
//multer instance of our upload config to use functionality
const upload = multer(uploadConfig);

//define routes using express Router method
//checking if app is running fine
routes.get("/status", (req, res) => {
  res.send({ status: 200 });
});

// Event
// Event creation end point
routes.post(
  "/event",
  verifyToken,
  upload.single("thumbnail"),
  EventController.createEvent
);
// Deleting event by ID
routes.delete("/event/:eventId", verifyToken, EventController.delete);

//User
//registering
routes.post("/user/register", UserController.createUser);
// Getting events by user ID
routes.get("/user/events", verifyToken, DashboardController.getEventsByUserId);
//getting user by ID
routes.get("/user/:userId", UserController.getUserById);

//Dashboard
//getting events with ID using function called getEventById from EventController
routes.get("/event/:eventId", verifyToken, DashboardController.getEventById);
//getting all events
routes.get("/dashboard", verifyToken, DashboardController.getAllEvents);
//getting events by category
routes.get(
  "/dashboard/:category",
  verifyToken,
  DashboardController.getAllEvents
);

//Login
routes.post("/login", LoginController.store);

//Registration
routes.post(
  "/registration/:eventId",
  verifyToken,
  RegistrationController.createRegistration
);
routes.get(
  "/registration/:registrationId",
  RegistrationController.getRegistration
);
// Approvals and Rejections
routes.post(
  "/registration/:registrationId/approvals",
  ApprovalController.approval
);
routes.post(
  "/registration/:registrationId/rejections",
  RejectionController.rejection
);

//Sep.7.20
//npx i jsonwebtoken
//Todo: add JWT token to project(v)
//return token when login(v)
//send token on request(v)
//create function to protect routes(v)
//add function / middleware to routers(v)
//modify response to decode the token(v)

//export routes
module.exports = routes;
