const mongoose = require("mongoose");

const engineSchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        required: true
    },
    rustedEngine:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    dentedEngine:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    damagedEngine:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    engineOilCondition:{
        type: String,
        required: true,
        enum: ['Good', 'Bad']
    },
    engineOilColor:{
        type: String,
        required: true,
        enum: ['Clean', 'Brown', 'Black']
    },
    brakeFluidCondition:{
        type: String,
        required: true,
        enum: ['Good', 'Bad']
    },
    brakeFluidColor:{
        type: String,
        required: true,
        enum: ['Clean', 'Brown', 'Black']
    },
    oilLeakInEngine:{
        type: String,
        required: true,
        enum: ['Y', 'N']
    },
    engineOverallSummary:{
        type: String,
        required: true
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});
    
const Engine = mongoose.model("Engine", engineSchema);
module.exports = Engine;