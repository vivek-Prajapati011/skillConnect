import dotenv from "dotenv"

dotenv.config()


const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongooseUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
}

export default config