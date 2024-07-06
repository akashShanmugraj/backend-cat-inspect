const mongoose = require("mongoose");

const tireSchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        
    },
    tirePressureLeftFront:{
        type: Number,
        
    },
    tirePressureRightFront:{
        type: Number,
        
    },
    tireConditionLeftFront:{
        type: String,
        

    },
    tireConditionRightFront:{
        type: String,
        

    },
    tirePressureLeftRear:{
        type: Number,
        
    },
    tirePressureRightRear:{
        type: Number,
        
    },
    tireConditionLeftRear:{
        type: String,
        

    },
    tireConditionRightRear:{
        type: String,
        

    },
    tireOverallSummary:{
        type: String,
        
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});

const Tire = mongoose.model("Tire", tireSchema);
module.exports = Tire;