import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    select: false,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
    select: false,
  },
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
    default: "male",
  },
  age: { type: String, required: true },
  date: { type: String, required: true },
  address: { type: String, required: true },
});

const Appointment = mongoose.model("appointment", AppointmentSchema);
export default Appointment;
