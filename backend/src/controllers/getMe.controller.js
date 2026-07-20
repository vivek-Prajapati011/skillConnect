export const getMeController = async (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Profile fetched successfully",
    data: req.user,
  })
}