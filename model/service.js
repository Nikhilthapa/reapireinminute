const mongoose = require("mongoose");

const servicelist = new mongoose.Schema({
  servicename: {
    type: String,
  },
  serviceimage: {
    type: String,
  },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skillist",
    },
  ],
});

const service = new mongoose.model("servicelists", servicelist);
module.exports = service;
