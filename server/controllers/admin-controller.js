import User from "../models/userModel.js"
import Contact from "../models/contactModel.js"
import Service from "../models/serviceModel.js"
const fetchingUserData = async (req, res) => {
   try{
    const allUserdata = await User.find().select({password:0})

    if(!allUserdata || allUserdata.length === 0 ){
      res.status(404).json("Users Does not found")
    }else{
        res.status(201).json(allUserdata)
    }
    
   }catch(err){
    console.log(err)
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

const deleteUser = async (req, res) => {
  try{
     const id = req.params.id
     console.log(id)
     await User.deleteOne({_id:id})
     res.status(200).json("document deleted successfully")
  }catch(err){
    console.log(err)
  }
}
const deleteContact = async (req, res) => {
  try{
     const id = req.params.id
    //  const idd = JSON.stringify(id)
     console.log("contact id : " + id)
     await Contact.deleteOne({_id:id})
     res.status(200).json("document deleted successfully")
  }catch(err){
    console.log(err)
  }
}
const deleteService = async (req, res) => {
  try{
     const id = req.params.id
    
     await Service.deleteOne({_id:id})
     res.status(200).json("document deleted successfully")
  }catch(err){
    console.log(err)
  }
}

const addService = async (req,res) => {
  try{
       const {image, topic, desc, cost, link} = req.body
       console.log(image + topic + cost + link)
       const response = await Service.create({
        image: image,
        topic: topic,
        desc: desc,
        cost: cost,
        link: link
       })
       console.log(response)
       if(response){
        res.status(200).json(response)
       }else {
        res.status(400).json({message:"Error in adding service"})
       }
  }catch(err){
     console.log(err)
  }
}
export default {fetchingUserData,fetchingContData, deleteUser, deleteContact, addService, deleteService}