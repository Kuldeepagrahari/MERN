import express from "express"
import adminController from "../controllers/admin-controller.js"
const adminRouter = express.Router()

adminRouter.route("/users").get(adminController.fetchingUserData)
adminRouter.route("/contacts").get(adminController.fetchingContData)

export default adminRouter