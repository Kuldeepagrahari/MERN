import express from "express";
const router = express.Router()
// using controllers
import authControllers from "../controllers/auth-controllers.js"
// router.get(("/"), (req, res) => {
//     res.status(200).send("home sam")
// })
router.route("/").get(authControllers.home)
// router.route("/login").get((req, res) => {
//     res.status(200).send("loggin sam")
// })
router.route("/login").get(authControllers.login)
export default router