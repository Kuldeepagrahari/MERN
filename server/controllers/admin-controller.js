import User from "../models/userModel.js"
import Contact from "../models/contactModel.js"
const fetchingUserData = async (req, res) => {
   try{
    const allUserdata = await User.find().select({password:0})

    if(!allUserdata || allUserdata.length === 0 ){
      res.status(404).json("Users Does not found")
    }else{
        res.status(201).json(allUserdata)
    }
    
   }catch(err){
    next(err)
   }
}

const fetchingContData = async(req, res) => {
 try{
      const allContData = await Contact.find()

      if(!allContData || allContData.length === 0 ){
        res.status(404).json("No COntacts found")
      }else{
        res.status(201).json(allContData)
      }
 }catch(err){
    // next(err)
    console.log(err)
 }
}
export default {fetchingUserData,fetchingContData}