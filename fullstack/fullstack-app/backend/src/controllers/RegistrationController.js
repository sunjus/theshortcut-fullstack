//need the model properties
//will request and get user_id from header
//will passs event ID as request params

const Registration = require("../models/Registration");

module.exports = {
  async createRegistration(req, res) {
    const { date } = req.body;
    const { user_id } = req.headers;
    const { eventId } = req.params;

    const registration = await Registration.create({
      user: user_id,
      event: eventId,
      date,
    });

    await registration
      .populate("event")
      .populate("user", "-password")
      .execPopulate();

    return res.json(registration);
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
