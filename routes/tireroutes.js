const express = require("express");

const tireController = require("../controllers/tirecontroller.js");

const {
    getTires,
    postTire
} = tireController;

const router = express.Router();
router.get("/get", getTires);
router.post("/post", postTire);

module.exports = router;