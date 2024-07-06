const mongoose = require("mongoose");

const exteriorSchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        
    },
    rustedExterior:{
        type: String,
        

    },
    dentedExterior:{
        type: String,


    },
    damagedExterior:{
        type: String,
        

    },
    oilLeakInSuspension:{
        type: String,
        

    },
    exteriorOverallSummary:{
        type: String,
        
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});

const Exterior = mongoose.model("Exterior", exteriorSchema);
module.exports = Exterior;