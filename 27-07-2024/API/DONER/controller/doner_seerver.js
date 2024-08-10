const express = require("express");
const donerrouter = express.Router();

// Home page route.
donerrouter.get("/", function (req, res) {
  res.send("doner home page");
});

const Doner = require("../model/DonerSchema");

donerrouter.post("/register", async function (req, res) {
  const data = new Doner({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    contact: req.body.contact,
    blood_group: req.body.blood_group,
    address: req.body.address,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = donerrouter;