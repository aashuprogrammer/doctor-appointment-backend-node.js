import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSignSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", UserSignSchema);
export default User;
