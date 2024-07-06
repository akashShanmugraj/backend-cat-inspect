const express = require("express");
const bodyParser = require("body-parser");
const imageController = require("../controllers/ImageController");

const router = express.Router();

router.use(bodyParser.json({limit: '50mb'}));

router.post("/upload", imageController.uploadImage);


module.exports = router;