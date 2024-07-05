const express = require("express");

const headerController = require("../controllers/headercontroller.js");

const {
    getHeaders,
    postHeader
} = headerController;

const router = express.Router();
router.get("/get", getHeaders);
router.post("/post", postHeader);

module.exports = router;