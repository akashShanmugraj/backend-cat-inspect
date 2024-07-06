const imageService = require('../services/imageService');

const uploadImage = async (req, res) => {
  const { image } = req.body;

  if (!image) {
    return res.status(400).send('No image provided');
  }

  try {
    // Option 1: Save image directly to MongoDB
    // const savedImage = await imageService.saveImageToDB(image);

    // Option 2: Save image as a file and store the path in MongoDB
    const imagePath = await imageService.saveImageToFile(image);
    const savedImage = await imageService.saveImagePathToDB(imagePath);

    res.status(200).send('Image saved successfully');
  } catch (error) {
    res.status(500).send('Failed to save image');
  }
};

module.exports = {
  uploadImage,
};