const express = require("express");

const brakeController = require("../controllers/brakescontroller.js");

const {
    getBrakes,
    postBrakes
} = brakeController;

const router = express.Router();
router.get("/get", getBrakes);
router.post("/post", postBrakes);

module.exports = router;