import express from "express";

import {
  emailLogin,
  emailSignup,
  phoneLogin,
  phoneSignup,
} from "../controllers/authUser.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login/email", emailLogin);
router.post("/signup/email", emailSignup);
router.post("/login/phone", phoneLogin);
router.post("/signup/phone", phoneSignup);

export default router;
