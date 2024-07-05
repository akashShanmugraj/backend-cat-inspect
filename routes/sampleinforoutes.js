const express = require("express");

const sampleInfoController = require("../controllers/sampleinfocontroller.js");

const {
    getCompanyName,
    getInspectorName,
    getTruckModel,
    checkinspectionid
} = sampleInfoController;

const router = express.Router();

router.route("/companyname").get(getCompanyName);
router.route("/inspectorname").get(getInspectorName);
router.route("/truckmodel").get(getTruckModel);
router.route("/checkinspectionid").get(checkinspectionid);

module.exports = router;