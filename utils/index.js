const baseUrl = require("./baseUrl");
const signJWT = require("./signJWT");
const verifyJWT = require("./verifyJWT");

module.exports = {
  baseUrl: baseUrl,
  verifyJWT: verifyJWT,
  signJWT: signJWT,
};
