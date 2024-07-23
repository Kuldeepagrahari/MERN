import express from "express"
const projRouter = express.Router()

import projController from "../controllers/proj-controller.js"

projRouter.route("/projects").get(projController)

export default projRouter