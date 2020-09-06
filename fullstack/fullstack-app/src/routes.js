const express = require("express");
const multer = require("multer");

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

//Event
//event creation and point
routes.post("/event", upload.single("thumbnail"), EventController.createEvent);
//deleting event by ID
routes.delete("/event/:eventId", EventController.delete);

//User
//registering
routes.post("/user/register", UserController.createUser);
//getting user by ID
routes.get("/user/:userId", UserController.getUserById);

//Dashboard
//getting events with ID using function called getEventById from EventController
routes.get("/event/:eventId", DashboardController.getEventById);
//getting all events
routes.get("/dashboard", DashboardController.getAllEvents);
//getting events by category
routes.get("/dashboard/:category", DashboardController.getAllEvents);

//Login
routes.post("/login", LoginController.store);

//Registration
routes.post("/registration", RegistrationController.createRegistration);
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

//export routes
module.exports = routes;
