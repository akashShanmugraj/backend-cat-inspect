const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  truck_model: {
    type: String,
    required: true
  },
  truck_serial_number: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('truck', truckSchema);