const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company_name: {
	type: String,
	required: true
  },
  avatar: {
	type: String,
	required: true
  },
  cat_customer_id: {
	type: Number,
	required: true
  },
  id: {
	type: String,
	required: true
  },
  alsoid: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('customer', customerSchema);