import mongoose from "mongoose";

const otpVerificationSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    hashedOtp:{
        type:String,
        required:true
    },
    expiresAt: {
    type: Date,
    required: true,
    expires: 0
}

},{timestamps:true})

const otpVerification = mongoose.model("otpVerification", otpVerificationSchema)

export default otpVerification