const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Customer = require("../schemas/customerschema");
const Inspector = require("../schemas/inspectorschema");
const Truck = require("../schemas/truckschema");
const Header = require("../schemas/headerschema");

// get company name give cat-customer-id
const getCompanyName = asyncHandler(async (req, res) => {
  console.log(req.query.customer_id)
  const customer = await Customer.findOne({'cat-customer-id': Number(req.query.customer_id)});
  // const customer = await Customer.findOne({'cat-customer-id': 96517});
  if (customer) {
    res.status(200).json(customer);
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
});

// get name of the inspector given inspector id
const getInspectorName = asyncHandler(async (req, res) => {
  const inspector = await Inspector.findOne({ "inspectorid": req.query.inspector_id });
  if (inspector) {
    res.status(200).json({ name: inspector.name });
  } else {
    res.status(404);
    throw new Error("Inspector not found");
  }
});

// get truck model given truck id
const getTruckModel = asyncHandler(async (req, res) => {
  console.log(req.query.truck_id)
  const truck = await Truck.findOne({"truck-serial-number": req.query.truck_id});
  if (truck) {
    res.status(200).json(truck);
  } else {
    res.status(404);
    throw new Error("Truck not found");
  }
});

const checkinspectionid = asyncHandler(async (req, res) => {
  const header = await Header.findOne({ "inspectionId" : req.query.inspection_id });
  if (header) {
    res.status(200).json({ "exists": "true" });
  } else {
    res.status(200).json({ "exists": "false" });
  }
});

module.exports = { getCompanyName, getInspectorName, getTruckModel, checkinspectionid };