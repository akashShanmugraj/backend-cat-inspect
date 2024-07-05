const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Header = require("../schemas/headerschema");

//fetch all headers
const getHeaders = asyncHandler(async (req, res) => {
  const headers = await Header.find({});
  res.json(headers);
});

const postHeader = asyncHandler(async (req, res) => {
    const header = new Header({
        headerMake: req.body.headerMake,
        headerReplacementDate: req.body.headerReplacementDate,
        headerOverallSummary: req.body.headerOverallSummary,
        attachedImages: req.body.attachedImages,
    });
    const createdHeader = await header.save();
    res.status(201).json(createdHeader);
    }
);

module.exports = { getHeaders, postHeader };