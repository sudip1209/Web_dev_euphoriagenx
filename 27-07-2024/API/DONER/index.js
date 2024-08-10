// mongodb+srv://sudip:sudip123@cluster0.rflvhbl.mongodb.net/

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DATABASE_URL = "mongodb+srv://sudip:sudip123cluster0.rflvhbl.mongodb.net";

app.use(express.json());

//db configuration
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// const userrouter = require("./controller/user_seerver");
// const adminrouter = require("./controller/admin_seerver");
// const donerrouter = require("./controller/doner_seerver");

const doner_api = require("./controller/doner_api");

app.use("/doner", doner_api);

app.get("/", (req, res) => {
  res.send("This is My Blood Donation API Home Page....!!!!");
});
// app.use("/user", userrouter);
// app.use("/admin", adminrouter);
// app.use("/doner", donerrouter);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
