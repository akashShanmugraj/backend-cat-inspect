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
        tireMake: req.body.tireMake,
        tireModel: req.body.tireModel,
        tireSerialNumber: req.body.tireSerialNumber,
        tireReplacementDate: req.body.tireReplacementDate,
        tireOverallSummary: req.body.tireOverallSummary,
        attachedImages: req.body.attachedImages,
    });
    const createdTire = await tire.save();
    res.status(201).json(createdTire);
    }
);

module.exports = { getTires, postTire };