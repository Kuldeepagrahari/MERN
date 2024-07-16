import express from "express"

async function home (req, res){
    await res.status(200).send("auth sam home")
}
async function login (req , res) {
    await res.status(200).send("login controller sam")
}
export default {home, login}