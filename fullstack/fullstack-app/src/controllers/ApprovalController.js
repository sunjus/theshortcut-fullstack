const Registration = require("../models/Registration");

module.exports = {
  async approval(req, res) {
    //pass registration ID as req parameter
    const { registrationId } = req.params;

    try {
      //find registration by ID for the passed param
      //change approved status value
      //save()
      //send res
      //return res as JSON
      const registration = await Registration.findById(registrationId);

      registration.approved = true;

      await registration.save();

      return res.json(registration);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
