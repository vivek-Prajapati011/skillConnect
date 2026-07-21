import { completeProfile } from "../services/professionals.service.js"

export const completeProfileController = async (req, res, next) => {
  try {
    // 1. userId
    const userId = req.user._id
    // 2. profileData
    const profileData = req.body
    // 3. service call
    const updatedProfessional = await completeProfile(userId, profileData)
    // 4. response
   return
    res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: updatedProfessional,
})
  } catch (error) {
    next(error)
  }
}
