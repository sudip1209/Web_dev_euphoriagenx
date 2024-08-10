const express = require("express");
const userrouter = express.Router();

// Home page route.
userrouter.get("/", function (req, res) {
  res.send("user home page");
});


module.exports = userrouter;
