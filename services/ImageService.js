const Image = require('../schemas/ImageModel');
const fs = require('fs');
const path = require('path');

const saveImageToDB = async (imageData) => {
  const newImage = new Image({ imageData });
  await newImage.save();
  return newImage;
};

const saveImageToFile = (imageData) => {
  const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, '');
  const imagePath = path.join(__dirname, '..', 'uploads', `image-${Date.now()}.jpeg`);

  return new Promise((resolve, reject) => {
    fs.writeFile(imagePath, base64Data, 'base64', (err) => {
      if (err) return reject(err);
      resolve(imagePath);
    });
  });
};

const saveImagePathToDB = async (imagePath) => {
  const newImage = new Image({ imageData: imagePath });
  await newImage.save();
  return newImage;
};

module.exports = {
  saveImageToDB,
  saveImageToFile,
  saveImagePathToDB,
};