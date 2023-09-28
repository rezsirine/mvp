const { User } = require("../database-sequelize/index");

module.exports.signUp = async (req, res) => {
  try {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).send("Registered successfully!");
  } catch (error) {
    return res.status(500).send("Error in sign up");
  }
};

module.exports.signIn = async (req, res) => {
  try {
    // console.log("this", req.body);
    const find = await User.findOne({
      where: { email: req.params.email},
    });
    if (!find) {
      return res.json("User Not found.");
    } else {
      return res.json(find);
    }
  } catch (error) {
    return res.status(500).send("sign in error");
  }
};
