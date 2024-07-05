const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Customer = require("../schemas/customerschema");
const Inspector = require("../schemas/inspectorschema");
const Truck = require("../schemas/truckschema");

// get company name give cat-customer-id
const getCompanyName = asyncHandler(async (req, res) => {
  const customer = await Customer.findOne({ "cat_customer_id" : req.query.customer_id });
  if (customer) {
    res.status(200).json({ company: customer.company_name });
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
  const truck = await Truck.findOne({ "truck-serial-number" : req.query.truck_id });
  if (truck) {
    res.status(200).json({ model: truck.truck-model });
  } else {
    res.status(404);
    throw new Error("Truck not found");
  }
});

module.exports = { getCompanyName, getInspectorName, getTruckModel };