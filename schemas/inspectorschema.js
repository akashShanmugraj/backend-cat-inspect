const mongoose = require('mongoose');

const inspectorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  inspectorid: {
    type: String,
    
  },
  name: {
    type: String,
    
  },
  id: {
    type: String,
    
  }
});

module.exports = mongoose.model('inspector', inspectorSchema);