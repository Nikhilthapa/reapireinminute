const ApiError = require("../errorhandling");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const signUp = async (req, res) => {
  try {
    let { name, email, phone, password } = req.body;
    if (!name) throw new ApiError("Name is requires", 400);
    let EmailF = await User.findOne({ email });
    if (EmailF) throw new ApiError("Email already exist", 400);
    if (!email) throw new ApiError("email required", 400);
    if (isNaN(phone)) throw new ApiError("number should be numeric", 400);
    let Phone1 = await User.findOne({ phone });
    if (Phone1) throw new ApiError("phone number already exist", 400);
    let salt = await bcrypt.genSalt(10);
    let hashpassword = await bcrypt.hash(password, salt);
    let user = await User.create({
      name,
      email,
      phone,
      password: hashpassword,
    });
    res
      .status(200)
      .json({ status: true, message: "user signup sucessful", data: user });
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = signUp;
