const cloudinary = require("cloudinary").v2;

const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error); // Log the full error details
    throw new Error("Cloudinary upload failed: " + error.message); // Make the error more descriptive
  }
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
