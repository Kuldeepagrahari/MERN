
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
const userAuthMiddleware = async (req, res, next) => {
   const token = req.header("Authorization")

   if ( !token ){
    return res.status(401).json({msg:"unAuthorized token"})
   }
   
   try{

      const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY)
      if(! isVerified){
        return res.status(401).json({msg:"token does not match"})
      }
      
      const userdata = await User.findOne({email:isVerified.email}).select({password:0})
      req.user = userdata
      req.token = token
      req.userId = userdata._id
      next()
   }catch(err){
     console.log("error from user middleware")
   }
}
export default userAuthMiddleware