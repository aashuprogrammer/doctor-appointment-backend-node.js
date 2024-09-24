import express from "express";
import {
  categoryName,
  getAllCategory,
  getCategoryById,
} from "../controler/category.mjs";
const router = express.Router();

router.post("/create_category", categoryName);
router.get("/get_category_id/:category_id", getCategoryById);
router.get("/get_all_category", getAllCategory);

export default router;
