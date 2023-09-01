const Jwt = require("jsonwebtoken");

const verifyJWT = (token) => {
  try {
    let verify = Jwt.verify(token, process.env.JWT_SECRET_KEY);
    return verify;
  } catch (error) {
    console.log("error in verification", error.message);
  }
};
module.exports = verifyJWT;
