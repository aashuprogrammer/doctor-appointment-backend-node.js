import express from "express";
import {
  createAppointment,
  deleteAppointment,
  getAllAppointment,
  myAppointment,
  seeUserAllAppointment,
} from "../controler/appointment.mjs";

const router = express.Router();

router.post("/create_appointment", createAppointment);
router.get("/get_all_appointment", getAllAppointment);
router.get("/my_appointment", myAppointment);
router.delete("/delete_my_appointment/:id", deleteAppointment);
router.get("/see_user_id_appointment", seeUserAllAppointment);
export default router;
