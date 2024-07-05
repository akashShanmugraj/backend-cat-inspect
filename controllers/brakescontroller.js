const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Brakes = require("../schemas/brakesschema");

//fetch all brakes
const getBrakes = asyncHandler(async (req, res) => {
  const brakes = await Brakes.find({});
  res.json(brakes);
});

const postBrakes = asyncHandler(async (req, res) => {
    const brakes = new Brakes({
        brakeMake: req.body.brakeMake,
        brakeReplacementDate: req.body.brakeReplacementDate,
        brakePadThickness: req.body.brakePadThickness,
        brakeDiscThickness: req.body.brakeDiscThickness,
        brakeOverallSummary: req.body.brakeOverallSummary,
        attachedImages: req.body.attachedImages,
    });
    const createdBrakes = await brakes.save();
    res.status(201).json(createdBrakes);
    }
);

module.exports = { getBrakes, postBrakes};