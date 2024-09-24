import express from "express";
import {
  doctorAppointment,
  doctorLogin,
  doctorSignUp,
} from "../controler/doctor.mjs";
const router = express.Router();

router.post("/signUp", doctorSignUp);
router.post("/login", doctorLogin);
router.get("/doctor_appointment", doctorAppointment);

export default router;
