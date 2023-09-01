const mongoose = require("mongoose");
const rateng = mongoose.Schema({
  technicianid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tecnician",
  },
  rate: {
    type: Number,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usersignUp",
  },
});
const rating = new mongoose.model("rating", rateng);
module.exports = rating;
