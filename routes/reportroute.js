const express = require("express");

const reportController = require("../controllers/reportgeneration.js");

const {
    requestreport
} = reportController;

const router = express.Router();
router.get("/request", requestreport);

module.exports = router;