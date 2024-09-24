import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import multer from "multer";
// import "../config.mjs";
// import { response } from "express";
// import { error } from "console";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET_KEY,
// });
// console.log(process.env.CLOUDINARY_API_KEY);

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     console.log(localFilePath);
//     if (!localFilePath) return error;
//     // Upload file on cloudinary //
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });

//     // file has been uploaded successfull  //
//     console.log("file is uploaded on cloudinary", response.url);
//     return response;
//   } catch (error) {
//     fs.unlinkSync;
//     localFilePath; //remove the locally saved temporary file as the upload
//     return null;
//   }
// };

async function uploadOnCloudinary(req, res) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
  const r = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "uploads");
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  }).single("image");
  r(req, res, (err) => {
    console.log(req.file);
    if (err) {
      console.log(err);
      return;
    }
    cloudinary.uploader.upload(
      req.file.path,
      {
        resource_type: "auto",
        public_id: req.file.originalname,
        folder: "dop",
        originalname: req.file.originalname,
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        if (result) {
          fs.unlinkSync(req.file.path);
        }
        res.send(result);
      }
    );
  });
}
function getFile(req, res) {
  console.log(req.body);
  res.send("Get File");
}

export { uploadOnCloudinary, getFile };
