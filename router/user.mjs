import express from "express";
const router = express.Router();
import {
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
  userLogin,
  userSignUp,
} from "../controler/user.mjs";

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/get_user_by_id/:user_id", getUserById);
router.get("/get_all_user", getAllUser);
router.delete("/delete_user_by_id/:user_id", deleteUser);
router.patch("/user_update/:id", updateUser);

export default router;
