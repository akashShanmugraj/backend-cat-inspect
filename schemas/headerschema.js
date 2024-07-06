const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
    truckSerialNumber:{
        type: String,
        
    },
    truckModel:{
        type: String,
        
    },
    inspectionId:{
        type: String,
        
    },
    inspectorName:{
        type: String,
        
    },
    inspectionEmployeeId:{
        type: String,
        
    },
    inspectionDate:{
        type: String,
        
    },
    inspectionTime:{
        type: String,
        
    },
    inspectionLocation:{
        type: String,
        
    },
    inspectionGeocoordinates:{
        type: [String],
        
    },
    serviceMeterHours:{
        type: Number,
        
    },
    inspectorSignature:{
        type: String,
        
    },
    companyName:{
        type: String,
        
    },
    catCustomerId:{
        type: String,
        
    },
});

const Header = mongoose.model("Header", headerSchema);
module.exports = Header;