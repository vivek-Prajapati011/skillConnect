import jwt from "jsonwebtoken"
import config from "../config/env.js"
import Professional from "../model/professional.model.js"

export const authMiddleware = async (req, res, next) => {
  try {
    // 1. Read Authorization Header
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw new Error("Authorization header is missing")
    }

    // 2. Extract Token
    const token = authHeader.split(" ")[1]

    if (!token) {
      throw new Error("Token is missing")
    }

    // 3. Verify JWT
    const decoded = jwt.verify(token, config.jwtSecret)

    // 4. Find Professional
    const professional = await Professional.findById(decoded.id)

    if (!professional) {
      throw new Error("Professional not found")
    }

    // 5. Attach user to request
    req.user = professional

    // 6. Go to next middleware/controller
    next()
  } catch (error) {
    next(error)
  }
}