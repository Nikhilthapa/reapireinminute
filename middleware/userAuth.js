const ApiError = require("../errorhandling");
const User = require("../model/user");
const { verifyJWT } = require("../utils");

const userAuth = async (req, res, next) => {
  try {
    let header = await req.header("Authorization");
    if (!header) throw new ApiError("header not present", 400);
    let token = await header.split(" ")[1];
    if (!token || token == "undefined")
      throw new ApiError("token not found", 400);
    let verifytoken = await verifyJWT(token);
    let user = await User.findById(verifytoken);
    if (!user) throw ApiError("user not found", 400);
    req.user = user;
    next();
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = userAuth;
