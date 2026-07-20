import JWT from "jsonwebtoken"
import config from "../config/env.js"


export const generateToken = (id) => {
    const token = JWT.sign(
        {id},
        config.jwtSecret,
        {expiresIn:"7d"},
    )
    return token
    
}