import express from "express";
import { doctorAppointment, doctorSignUp } from "../controler/doctor.mjs";
const router = express.Router();

router.post("/signUp", doctorSignUp);
router.get("/doctor_appointment", doctorAppointment);
export default router;
