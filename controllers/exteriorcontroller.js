const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Exterior = require("../schemas/exteriorschema");

//fetch all exteriors
const getExteriors = asyncHandler(async (req, res) => {
  const exteriors = await Exterior.find({});
  res.json(exteriors);
});

const postExterior = asyncHandler(async (req, res) => {
    const exterior = new Exterior({
        exteriorMake: req.body.exteriorMake,
        exteriorReplacementDate: req.body.exteriorReplacementDate,
        exteriorOverallSummary: req.body.exteriorOverallSummary,
        attachedImages: req.body.attachedImages,
    });
    const createdExterior = await exterior.save();
    res.status(201).json(createdExterior);
    }
);

module.exports = { getExteriors, postExterior };