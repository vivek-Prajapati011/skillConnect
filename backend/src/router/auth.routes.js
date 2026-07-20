import express, { Router } from "express"
import { sendOtpController } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/send-otp", sendOtpController)
export default router
