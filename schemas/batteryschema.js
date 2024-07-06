const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        
    },
    batteryMake:{
        type: String,
        
    },
    batteryReplacementDate:{
        type: Date,
        
    },
    batteryVoltage:{
        type: Number,
        
    },
    batteryWaterLevel:{
        type: String,
        

    },
    conditionOfBattery:{
        type: String,
        

    },
    anyRustInBattery:{
        type: String,
        

    },
    anyLeakInBattery:{
        type: String,
        

    },
    batteryOverallSummary:{
        type: String,
        
    },
    attachedImages:[{
        type: String,
        required: false
    }],
    
    });

const Battery = mongoose.model("Battery", batterySchema);
module.exports = Battery;