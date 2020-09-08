//need the model properties
//will request and get user_id from header
//will pass event ID as request params

const Registration = require("../models/Registration");
const jwt = require("jsonwebtoken");

//Todo:modify registration model for date
module.exports = {
  createRegistration(req, res) {
    jwt.verify(req.token, "secret", async (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        // const { user_id } = req.headers
        const user_id = authData.user._id;
        const { eventId } = req.params;

        const registration = await Registration.create({
          user: user_id,
          event: eventId,
        });

        await registration
          .populate("event")
          .populate("user", "-password")
          .execPopulate();
        console.log(registration.event.user);

        const ownerSocket = req.connectedUsers[registration.event.user];

        if (ownerSocket) {
          req.io.to(ownerSocket).emit("registration_request", registration);
        }

        return res.json(registration);
      }
    });
  },

  async getRegistration(req, res) {
    const { registrationId } = req.params;

    try {
      const registration = await Registration.findById(registrationId);
      await registration
        .populate("event")
        .populate("user", "-password")
        .execPopulate();

      return res.json(registration);
    } catch (error) {
      return res.status(400).json({
        message: "Registration not found",
      });
    }
  },
};
