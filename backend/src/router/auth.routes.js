import express, { Router } from "express"
import { sendOtpController } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { completeProfileController } from "../controllers/professionals.controller.js"

const router = express.Router()

router.post("/send-otp", sendOtpController)
router.put("/complete-profile",authMiddleware,completeProfileController  )
export default router
