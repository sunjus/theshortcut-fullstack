//import packages
const Event = require("../models/Event");
const User = require("../models/User");

//get all event properties needed for event creation
//get user ID from where request is made. Usually found in reduest headers
//get the filename of thumbnail
module.exports = {
  async createEvent(req, res) {
    //console.log(req.body);
    const { title, description, price, category, date } = req.body;
    const { user_id } = req.headers;
    const { filename } = req.file;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    //define event
    //create event based on Event model

    const event = await Event.create({
      title,
      description,
      category,
      price: parseFloat(price),
      user: user_id,
      thumbnail: filename,
      date,
    });

    return res.json(event);
  },

  async delete(req, res) {
    const { eventId } = req.params;
    try {
      await Event.findByIdAndDelete(eventId);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({
        message: "We do not have any event with the ID",
      });
    }
  },
};
