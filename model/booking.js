const mongoose = require("mongoose");
const adminpanel = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usersignUp",
  },
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "servicelists",
  },
  skillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "skillist",
  },
});
const adMin = mongoose.model("Admin", adminpanel);
module.exports = adMin;
