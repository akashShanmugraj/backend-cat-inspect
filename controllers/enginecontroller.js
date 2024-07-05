const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Engine = require("../schemas/engineschema");

//fetch all engines
const getEngines = asyncHandler(async (req, res) => {
  const engines = await Engine.find({});
  res.json(engines);
});

const postEngine = asyncHandler(async (req, res) => {
    const engine = new Engine({
      inspectionId: req.body.inspectionId,
      engineMake: req.body.engineMake,
      engineModel: req.body.engineModel,
      engineSerialNumber: req.body.engineSerialNumber,
      engineReplacementDate: req.body.engineReplacementDate,
      engineHours: req.body.engineHours,
      engineOverallSummary: req.body.engineOverallSummary,
      attachedImages: req.body.attachedImages,
    });
    const createdEngine = await engine.save();
    res.status(201).json(createdEngine);
    }
);

module.exports = { getEngines, postEngine };