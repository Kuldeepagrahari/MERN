import express from "express"
import bcrypt from "bcrypt"
import User from "../models/userModel.js"
async function home (req, res){
    await res.status(200).send("auth sam home")
}
async function login (req , res) {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({msg:"user not found"})
        else{
             const isPasswordCorrect = await user.isPasswordCorrect(password)
             
             if ( !isPasswordCorrect ){
                return res.status(400).json({msg:"invalid credentials"})
             }else{
                return res.status(200).json({msg:"login successfully!", token:await user.generateToken()})
             }
        }
        // await res.status(200).send("login controller sam")
    }catch(err){
        console.error(err)
    }
  
}
const register = async(req, res) => {
    try{
        const {username, email, phone, password, isAdmin } = req.body
        const userExist = await User.findOne({email:email})
        if ( userExist ){
            return res.status(400).json({msg:"user already exist"})
        }
        // const saltRound = 10
        // const hashed_password = await bcrypt.hash(password, saltRound)

        // -------- password is hashing... in pre methods in the models ------
        const UserCreated = await User.create(
            {
                username:username , 
                email:email, 
                phone:phone,
                password:password,
                isAdmin:isAdmin
            }
            )
        console.log(UserCreated)
        await res.status(200).json({msg:UserCreated, token:await UserCreated.generateToken()})

    }catch(err){
      await res.status(500).json({message:"internal server error"})
    }
   
}
export default {home, login, register}