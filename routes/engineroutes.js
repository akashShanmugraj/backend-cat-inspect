const express = require("express");

const engineController = require("../controllers/enginecontroller.js");

const {
    getEngines,
    postEngine
} = engineController;

const router = express.Router();
router.get("/get", getEngines);
router.post("/post", postEngine);

module.exports = router;