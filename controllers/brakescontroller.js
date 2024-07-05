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
      inspectionId: req.body.inspectionId,
      brakeFluidLevel: req.body.brakeFluidLevel,
      brakeConditionFront: req.body.brakeConditionFront,
      brakeConditionRear: req.body.brakeConditionRear,
      emergencyBrake: req.body.emergencyBrake,
      brakeOverallSummary: req.body.brakeOverallSummary,
      attachedImages: req.body.attachedImages
    });
    const createdBrakes = await brakes.save();
    res.status(201).json(createdBrakes);
    }
);

module.exports = { getBrakes, postBrakes};