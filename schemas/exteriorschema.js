const mongoose = require("mongoose");

const exteriorSchema = new mongoose.Schema({
    rustedExterior:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    dentedExterior:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    damagedExterior:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    oilLeakInSuspension:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    exteriorOverallSummary:{
        type: String,
        required: true
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});

const Exterior = mongoose.model("Exterior", exteriorSchema);
module.exports = Exterior;