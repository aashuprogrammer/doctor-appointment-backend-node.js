import express from "express";
import { doctorSignUp } from "../controler/doctor.mjs";
const router = express.Router();

router.post("/signUp", doctorSignUp);

export default router;
