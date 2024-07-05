const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Tire = require("../schemas/tireschema");

//fetch all tires
const getTires = asyncHandler(async (req, res) => {
  const tires = await Tire.find({});
  res.json(tires);
});

const postTire = asyncHandler(async (req, res) => {
    const tire = new Tire({
      inspectionId: req.body.inspectionId,
      tirePressureLeftFront: req.body.tirePressureLeftFront,
      tirePressureRightFront: req.body.tirePressureRightFront,
      tireConditionLeftFront: req.body.tireConditionLeftFront,
      tireConditionRightFront: req.body.tireConditionRightFront,
      tirePressureLeftRear: req.body.tirePressureLeftRear,
      tirePressureRightRear: req.body.tirePressureRightRear,
      tireConditionLeftRear: req.body.tireConditionLeftRear,
      tireConditionRightRear: req.body.tireConditionRightRear,
      tireOverallSummary: req.body.tireOverallSummary,
      attachedImages: req.body.attachedImages
    });
    const createdTire = await tire.save();
    res.status(201).json(createdTire);
    }
);

module.exports = { getTires, postTire };