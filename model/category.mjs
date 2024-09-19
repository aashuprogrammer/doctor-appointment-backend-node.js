import mongoose from "mongoose";
import { Schema } from "mongoose";

const CategorySchema = new Schema({
  category_name: { type: String, unique: true, required: true },
  create_at: { type: Date, default: Date.now() },
});

const Category = mongoose.model("category", CategorySchema);
export default Category;
