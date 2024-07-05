const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema({
        batteryMake:{
            type: String,
            required: true
        },
        batteryReplacementDate:{
            type: Date,
            required: true
        },
        batteryVoltage:{
            type: Number,
            required: true
        },
        batteryWaterLevel:{
            type: String,
            required: true,
            enum: ['Good', 'Ok', 'Low']
        },
        conditionOfBattery:{
            type: String,
            required: true,
            enum: ['Y', 'N']
        },
        anyRustInBattery:{
            type: String,
            required: true,
            enum: ['Y', 'N']
        },
        anyLeakInBattery:{
            type: String,
            required: true,
            enum: ['Y', 'N']
        },
        batteryOverallSummary:{
            type: String,
            required: true
        },
        attachedImages:[{
            type: String,
            required: false
        }],
    
    });

const Battery = mongoose.model("Battery", batterySchema);
module.exports = Battery;