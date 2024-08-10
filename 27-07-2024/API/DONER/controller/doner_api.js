const express = require("express");
const router = express.Router();

// home page rout
router.get("/", function (req, res) {
  res.send("Doner home page");
});

// all api for dinner like registration, login , update and delete

const Doner = require("../model/DonerSchema");

router.post("/register", async function (req, res) {
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

router.post("/register", function (req, res) {
  res.send("Doner Registration");
});
router.delete("/delete/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const data = await Doner.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Doner.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllDoners", async (req, res) => {
  try {
    const data = await Doner.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getDataId/:id", async (req, res) => {
  try {
    const data = await Doner.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
