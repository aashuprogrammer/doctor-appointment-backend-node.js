import mongoose from "mongoose";
import { hashedPassword } from "../password/password.mjs";

// const { Schema } = mongoose;///

const UserSignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

UserSignSchema.pre("save", function () {
  this.password = hashedPassword(this.password);
});

const User = mongoose.model("user", UserSignSchema);
export default User;
