const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  truck_model: {
    type: String,
    
  },
  truck_serial_number: {
    type: String,
    
  },
  id: {
    type: String,
    
  }
});

module.exports = mongoose.model('truck', truckSchema);