const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nikhilnfrnd:repairinminute@cluster0.a9qi6hx.mongodb.net/"
    );
    console.log("Db connected");
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = connectToDb;
