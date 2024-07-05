const express = require("express");

const exteriorController = require("../controllers/exteriorcontroller.js");

const {
    getExteriors,
    postExterior
} = exteriorController;

const router = express.Router();
router.get("/get", getExteriors);
router.post("/post", postExterior);

module.exports = router;
