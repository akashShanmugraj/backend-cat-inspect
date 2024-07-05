const mongoose = require('mongoose');

const inspectorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  inspectorid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('inspector', inspectorSchema);