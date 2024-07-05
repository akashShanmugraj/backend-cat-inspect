const express = require("express");

const { uploadFile } = require("../controllers/cloudstoragecontroller.js");

const router = express.Router();

router.post("/", uploadFile);
router.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = router;