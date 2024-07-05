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
      rustedEngine: req.body.rustedEngine,
      dentedEngine: req.body.dentedEngine,
      damagedEngine: req.body.damagedEngine,
      engineOilCondition: req.body.engineOilCondition,
      engineOilColor: req.body.engineOilColor,
      brakeFluidCondition: req.body.brakeFluidCondition,
      brakeFluidColor: req.body.brakeFluidColor,
      oilLeakInEngine: req.body.oilLeakInEngine,
      engineOverallSummary: req.body.engineOverallSummary,
      attachedImages: req.body.attachedImages,
    });
    const createdEngine = await engine.save();
    res.status(201).json(createdEngine);
    }
);

module.exports = { getEngines, postEngine };