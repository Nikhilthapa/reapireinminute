const Jwt = require("jsonwebtoken");
const signJWT = (id) => {
  try {
    let token = Jwt.sign({ id }, process.env.JWT_SECRET_KEY);
    return token;
  } catch (error) {
    console.log("error in signing", error.message);
  }
};
module.exports = signJWT;
