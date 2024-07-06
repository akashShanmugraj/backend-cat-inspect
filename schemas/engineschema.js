const mongoose = require("mongoose");

const engineSchema = new mongoose.Schema({
    inspectionId:{
        type: String,
        
    },
    rustedEngine:{
        type: String,
        

    },
    dentedEngine:{
        type: String,
        

    },
    damagedEngine:{
        type: String,
        

    },
    engineOilCondition:{
        type: String,
        

    },
    engineOilColor:{
        type: String,
        

    },
    brakeFluidCondition:{
        type: String,
        

    },
    brakeFluidColor:{
        type: String,
        

    },
    oilLeakInEngine:{
        type: String,
        

    },
    engineOverallSummary:{
        type: String,
        
    },
    attachedImages:[{
        type: String,
        required: false
    }],
});
    
const Engine = mongoose.model("Engine", engineSchema);
module.exports = Engine;