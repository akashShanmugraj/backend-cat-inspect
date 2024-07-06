const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageID : String,
  imageData: String,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;