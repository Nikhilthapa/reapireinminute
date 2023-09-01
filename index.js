require("dotenv").config();
const express = require("express");
const connectToDb = require("./db");
const app = express();
app.use(express.json());
app.use("/", require("./routers/index"));
const start = async () => {
  try {
    await connectToDb();
    app.listen(3001, () => {
      console.log("srever running in the port 3001");
    });
  } catch (error) {
    console.log("error", error.message);
  }
};
start();
