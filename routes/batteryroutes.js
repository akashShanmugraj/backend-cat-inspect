const express = require("express");

const batteryController = require("../controllers/batterycontroller.js");

const {
    getBatteries,
    postBattery
} = batteryController;

const router = express.Router();
router.get("/get", getBatteries);
router.post("/post", postBattery);

module.exports = router;