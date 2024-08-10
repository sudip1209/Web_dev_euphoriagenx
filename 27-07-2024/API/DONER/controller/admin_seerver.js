const express = require("express");
const adminrouter = express.Router();

// Home page route.
adminrouter.get("/", function (req, res) {
  res.send("Admin home page");
});

module.exports = adminrouter;
