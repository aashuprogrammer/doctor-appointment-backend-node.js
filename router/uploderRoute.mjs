// import express from "express";
// import upload from "../multer.mjs";
// import uploadOnCloudinary from "../util/imageUpload.mjs";
// const router = express.Router();

// router.post("/upload", upload.single("image"), uploadOnCloudinary);

// export default router;

import { uploadOnCloudinary, getFile } from "../util/imageUpload.mjs";
import express from "express";
const router = express.Router();

router.post("/upload", uploadOnCloudinary);
router.get("/get", getFile);

export default router;
