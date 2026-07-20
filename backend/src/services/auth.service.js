import bcrypt from "bcrypt";
import { generateOtp } from "../utils/generateOtp.js";
import otpVerification from "../model/otp.model.js";
import Professional from "../model/professional.model.js";

export const sendOtp = async (phone) => {
  if (!phone) {
    throw new Error("Phone number is required");
  }
  if (phone.length !== 10) {
    throw new Error("Invalid phone number");
  }

  const otp = generateOtp();
  const hashedOtp = await bcrypt.hash(String(otp), 10);
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await otpVerification.findOneAndUpdate(
    { phone },
    {
      phone,
      hashedOtp,
      expiresAt,
    },
    {
      upsert: true,
      new: true,
    },
  );
  console.log("Generated OTP:", otp)
  return {
    success: true,
    message: "OTP sent successfully",
  }
}
export const verifyOtp = async (phone, otp) => {
  // 1. Validate input
  if (!phone) {
    throw new Error("Phone number is required")
  }

  if (!otp) {
    throw new Error("OTP is required")
  }

  // 2. Find OTP document
  const otpDoc = await otpVerification.findOne({ phone })

  if (!otpDoc) {
    throw new Error("OTP not found. Please request a new OTP.")
  }

  // 3. Check expiry
  if (otpDoc.expiresAt < new Date()) {
    throw new Error("OTP has expired. Please request a new OTP.")
  }

  // 4. Compare OTP
  const isOtpValid = await bcrypt.compare(
    String(otp),
    otpDoc.hashedOtp
  );

  if (!isOtpValid) {
    throw new Error("Invalid OTP");
  }

  // 5. Delete OTP (one-time use)
  await otpVerification.deleteOne({ phone })

  // 6. Find or create Professional
  let professional = await Professional.findOne({ phone })

  if (!professional) {
    professional = await Professional.create({
      name: "",
      phone,
      aadharNumber: "" // Temporary until profile completion
    })
  }

  // 7. Generate JWT
  const token = generateToken(professional._id)

  // 8. Return response
  return {
    success: true,
    message: "OTP verified successfully",
    token,
    professional,
  }
}