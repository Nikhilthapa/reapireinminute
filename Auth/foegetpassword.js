const bcrypt = require("bcrypt");
const User = require("../model/user");
const forgetpassword = async (req, res) => {
  try {
    let { email, password } = req.body;
    let salt = await bcrypt.genSalt(10);
    let newpassword = await bcrypt.hash(password, salt);
    let findemail = await User.findOneAndUpdate(
      { email },
      { password: newpassword },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "password changed sucessfully",
      data: { newpassword, findemail },
    });
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = forgetpassword;
