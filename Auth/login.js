const ApiError = require("../errorhandling");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const signJWT = require("../utils/signJWT");
const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) throw new ApiError("user not exist please signUp", 400);
    let matchpassword = await bcrypt.compare(password, user.password);
    if (!matchpassword) throw new ApiError("password wrong", 400);
    let token = signJWT(user._id);
    res.status(200).json({
      status: true,
      message: "user login sucessful",
      data: { token, user },
    });
  } catch (error) {
    console.log("error in login", error.message);
  }
};
module.exports = login;
