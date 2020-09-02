const User = require("../models/User");

module.exports = {
  async store(req, res) {
    try {
      //console.log(req.body);
      const { email, firstName, lastName, password } = req.body;
    } catch (err) {}
  },
};
