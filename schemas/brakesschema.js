const mongoose = require("mongoose");

const brakesSchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        
    },
    brakeFluidLevel:{
        type: String,
        

    },
    brakeConditionFront:{
        type: String,
        

    },
    brakeConditionRear:{
        type: String,
        

    },
    emergencyBrake:{
        type: String,
        

    },
    brakeOverallSummary:{
        type: String,
        
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});

const Brakes = mongoose.model("Brakes", brakesSchema);
module.exports = Brakes;