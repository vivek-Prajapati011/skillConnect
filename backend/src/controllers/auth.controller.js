import { sendOtp } from "../services/auth.service.js"
export const sendOtpController = async (req, res, next) => {
   try {
     const{phone} = req.body
    const result = await sendOtp(phone)
    return res.status(201).json((result))
   } catch (error) {
    
   }
        

}
