import express from "express"
import authRouter from "./router/auth.routes.js"

const app = express()

app.use(express.json())
app.use("/api/v1/auth", authRouter);

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "SkillConnect Backend is running 🚀"
    })
})

export default app