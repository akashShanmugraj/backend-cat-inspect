const asyncHandler = require("express-async-handler");
const { Storage } = require("@google-cloud/storage");
const bcrypt = require("bcrypt");
require("dotenv").config();

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

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS
});

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_NAME)

const uploadFile = asyncHandler(async (req, res) => {
    if (!req.files || !req.files.UploadFileField) {
        return res.status(400).send('No file was uploaded.');
    }
    const hashedfilename = await hashingfunction(req.files.UploadFileField.name);
    const fileextension = getFileExtension(req.files.UploadFileField.name);
    const blob = bucket.file(`${req.body.component}/${hashedfilename}.${fileextension}`);
    const blobStream = blob.createWriteStream({
        resumable: false,
    });

    blobStream.on("error", (err) => {
        res.status(500).send(err.message); // It's better to send the error message back to the client
    });

    blobStream.on("finish", () => {
        // return public url 
        publicurl = `https://storage.googleapis.com/${process.env.GCLOUD_STORAGE_BUCKET_NAME}/${req.body.component}/${hashedfilename}.${fileextension}`;
        res.status(200).send({
            message: 'File uploaded successfully',
            publicurl: publicurl
        });
    });

    // Use the buffer from the uploaded file
    blobStream.end(req.files.UploadFileField.data);
});

module.exports = { uploadFile };