import express from "express";
const router = express.Router();
import { userLogin, userSignUp } from "../controler/user.mjs";

router.post("/signup", userSignUp);
router.post("/login", userLogin);

export default router;
