import app from "./app.js"
import connectDb from "./config/database.js";
import config from "./config/env.js"
await connectDb()

app.listen(config.port, () => {
    console.log(`🚀  Server is running on port ${config.port} in ${config.nodeEnv} mode`)
});