const mongoose = require("mongoose");

const brakesSchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        required: true
    },
    brakeFluidLevel:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Low']
    },
    brakeConditionFront:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Needs Replacement']
    },
    brakeConditionRear:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Needs Replacement']
    },
    emergencyBrake:{
        type: String,
        required: true,
        enum: ['Good', 'Ok', 'Low']
    },
    brakeOverallSummary:{
        type: String,
        required: true
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});

const Brakes = mongoose.model("Brakes", brakesSchema);
module.exports = Brakes;