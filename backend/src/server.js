import app from "./app.js"
dotenv.config()


const PORT = 3000

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`)
});