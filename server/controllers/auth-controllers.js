import express from "express"

async function home (req, res){
    await res.status(200).send("auth sam home")
}
async function login (req , res) {
    try{
        await res.status(200).send("login controller sam")
    }catch(err){
        console.error(err)
    }
  
}
const register =  async(req, res) => {
    try{
        await res.status(200).json(req.body)

    }catch(err){
      await res.status(500).json({message:"internal server error"})
    }
   
}
export default {home, login, register}