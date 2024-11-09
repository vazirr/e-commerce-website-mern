const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "du191cx1r",
  api_key: "174736573792771",
  api_secret: "WB6-UxmZWEeFMNPnZ9wOvNyV9ds",
});

const storage = new multer.memoryStorage();

async function imageUploadUtils(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });
module.exports = { upload, imageUploadUtils };
