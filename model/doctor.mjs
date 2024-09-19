import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    select: false,
  },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
    default: "male",
  },
  dob: { type: String, required: true },
  img: { type: String },
  shedule: { type: String, required: true },
  degree: { type: String, required: true },
  address: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const Doctor = mongoose.model("doctor", DoctorSchema);
export default Doctor;
