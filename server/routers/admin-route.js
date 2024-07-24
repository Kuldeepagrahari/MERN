import express from "express"
import adminController from "../controllers/admin-controller.js"
const adminRouter = express.Router()
import userAuthMiddleware from "../middlewares/userMiddleware.js"
import adminMiddleware from "../middlewares/admin-middleware.js"

adminRouter.route("/users").get(userAuthMiddleware,adminMiddleware, adminController.fetchingUserData)

adminRouter.route("/contacts").get(userAuthMiddleware, adminMiddleware, adminController.fetchingContData)

adminRouter.route("/users/delete/:id").delete(userAuthMiddleware, adminMiddleware, adminController.deleteUser)

adminRouter.route("/contacts/delete/:id").delete(userAuthMiddleware, adminMiddleware, adminController.deleteContact)

export default adminRouter