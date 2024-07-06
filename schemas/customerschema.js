const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company_name: {
	type: String,
	
  },
  avatar: {
	type: String,
	
  },
  cat_customer_id: {
	type: Number,
	
  },
  id: {
	type: String,
	
  },
  alsoid: {
    type: String,
    
  }
});

module.exports = mongoose.model('customer', customerSchema);