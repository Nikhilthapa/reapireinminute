const mongoose = require("mongoose");
const technician = mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  service: {
    type: String,
  },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "servicelists",
    },
  ],
  address: {
    type: Object,
  },
  Pimage: {
    type: String,
  },
  adharimage: {
    type: String,
  },
  password: {
    type: String,
  },
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rating",
  },
});

const tecnicianform = new mongoose.model("tecnician", technician);
module.exports = tecnicianform;
