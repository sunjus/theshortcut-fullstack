const User = require("../models/User");

module.exports = {
  async store(req, res) {
    try {
      //console.log(req.body);
      const { email, firstName, lastName, password } = req.body;

      const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      return res.json(user);
    } catch (err) {
      throw Error(`Error while registering new user: $(err)`);
    }
  },
};
