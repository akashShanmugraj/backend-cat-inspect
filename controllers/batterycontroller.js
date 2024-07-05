const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Battery = require("../schemas/batteryschema");

//fetch all batteries
const getBatteries = asyncHandler(async (req, res) => {
  const batteries = await Battery.find({});
  res.json(batteries);
});

const postBattery = asyncHandler(async (req, res) => {
  const battery = new Battery({
    inspectionId: req.body.inspectionId,
    batteryMake: req.body.batteryMake,
    batteryReplacementDate: req.body.batteryReplacementDate,
    batteryVoltage: req.body.batteryVoltage,
    batteryWaterLevel: req.body.batteryWaterLevel,
    conditionOfBattery: req.body.conditionOfBattery,
    anyRustInBattery: req.body.anyRustInBattery,
    anyLeakInBattery: req.body.anyLeakInBattery,
    batteryOverallSummary: req.body.batteryOverallSummary,
    attachedImages: req.body.attachedImages,
  });
  const createdBattery = await battery.save();
  res.status(201).json(createdBattery);
});

module.exports = { getBatteries, postBattery};