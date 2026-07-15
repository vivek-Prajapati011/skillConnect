import mongoose, { connect } from "mongoose"
import config from "./env.js"


const connectDb = async () =>{
    try {
        await mongoose.connect(config.mongooseUri)
        console.log("✅ MongoDB Connected Successfully")
    } catch (error) {
        console.error("Data base is failed to connect", error)
        process.exit(1)
    }
}

export default connectDb