import express from "express";
const router = express.Router();
import {
  deleteUser,
  getUserById,
  updateUser,
  userLogin,
  userSignUp,
} from "../controler/user.mjs";

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/get_user_by_id/:id", getUserById);
router.delete("/delete_user_by_id/:id", deleteUser);
router.patch("/user_update/:id", updateUser);

export default router;
