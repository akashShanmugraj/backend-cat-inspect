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
        inspectionId: req.body.inspectionId,
        inspectorName: req.body.inspectorName,
        inspectionEmployeeId: req.body.inspectionEmployeeId,
        inspectionDate: req.body.inspectionDate,
        inspectionTime: req.body.inspectionTime,
        inspectionLocation: req.body.inspectionLocation,
        inspectionGeocoordinates: req.body.inspectionGeocoordinates,
        truckSerialNumber: req.body.truckSerialNumber,
        truckModel: req.body.truckModel,
        serviceMeterHours: req.body.serviceMeterHours,
        inspectorSignature: req.body.inspectorSignature,
        companyName: req.body.companyName,
        catCustomerId: req.body.catCustomerId,

    });
    const createdHeader = await header.save();
    res.status(201).json(createdHeader);
    }
);

module.exports = { getHeaders, postHeader };