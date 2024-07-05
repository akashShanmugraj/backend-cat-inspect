const mongoose = require("mongoose");

const tireSchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        required: true
    },
    tirePressureLeftFront:{
        type: Number,
        required: true
    },
    tirePressureRightFront:{
        type: Number,
        required: true
    },
    tireConditionLeftFront:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Needs Replacement']
    },
    tireConditionRightFront:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Needs Replacement']
    },
    tirePressureLeftRear:{
        type: Number,
        required: true
    },
    tirePressureRightRear:{
        type: Number,
        required: true
    },
    tireConditionLeftRear:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Needs Replacement']
    },
    tireConditionRightRear:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Needs Replacement']
    },
    tireOverallSummary:{
        type: String,
        required: true
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});

const Tire = mongoose.model("Tire", tireSchema);
module.exports = Tire;