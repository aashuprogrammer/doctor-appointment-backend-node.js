import mongoose from "mongoose";

const AppointmentSchema = new Schema({
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
  name: { type: String, required },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
    default: "male",
  },
  age: { type: String, required: true },
  date: { type: String, required: true },
});

const Appointment = mongoose.model("appointment", AppointmentSchema);
export default Appointment;
