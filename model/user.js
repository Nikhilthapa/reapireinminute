const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
  profileimage: {
    type: String,
  },
});

const User = mongoose.model("usersignUp", userschema);
module.exports = User;
