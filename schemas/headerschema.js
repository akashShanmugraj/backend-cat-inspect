const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
    truckSerialNumber:{
        type: String,
        required: true
    },
    truckModel:{
        type: String,
        required: true
    },
    inspectionId:{
        type: String,
        required: true
    },
    inspectorName:{
        type: String,
        required: true
    },
    inspectionEmployeeId:{
        type: String,
        required: true
    },
    inspectionDate:{
        type: String,
        required: true
    },
    inspectionTime:{
        type: String,
        required: true
    },
    inspectionLocation:{
        type: String,
        required: true
    },
    inspectionGeocoordinates:{
        type: [Number],
        required: true
    },
    serviceMeterHours:{
        type: Number,
        required: true
    },
    inspectorSignature:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    catCustomerId:{
        type: String,
        required: true
    },
});

const Header = mongoose.model("Header", headerSchema);
module.exports = Header;