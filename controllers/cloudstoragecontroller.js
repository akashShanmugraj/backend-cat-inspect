const asyncHandler = require("express-async-handler");
const { Storage } = require("@google-cloud/storage");
const bcrypt = require("bcrypt");

const hashingfunction = async (string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedString = await bcrypt.hash(string, salt);
    return hashedString;
}

function getFileExtension(filename) {
    if (!filename.includes('.')) {
        return ''; // Return an empty string if no period is found
    }
    // Split the filename by period and return the last element
    return filename.split('.').pop();
}

// const storage = new Storage({
//     projectId: process.env.GCLOUD_PROJECT_ID
// });

// const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_NAME)

const uploadFile = asyncHandler(async (req, res) => {
    if (!req.files || !req.files.UploadFileField) {
        return res.status(400).send('No file was uploaded.');
    }
    res.status(200).send('File uploaded!');
});

module.exports = { uploadFile };