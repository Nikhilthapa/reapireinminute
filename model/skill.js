const mongoose = require("mongoose");

const skillList = mongoose.Schema({
  skill: {
    type: String,
  },
  skillImage: {
    type: String,
  },
});
const skills = new mongoose.model("skillist", skillList);
module.exports = skills;
