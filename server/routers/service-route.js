import express from "express"
const SerRouter = express.Router()
import serviceController from "../controllers/service-controller.js"

SerRouter.route("/services").get(serviceController)

export default SerRouter