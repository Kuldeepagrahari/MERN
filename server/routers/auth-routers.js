import express from "express";
const router = express.Router();
// ----------user middleware ------------------------------
import userAuthMiddleware from "../middlewares/userMiddleware.js";
// --------------- validation -----------------------------------
import { signupSchema, signInSchema } from "../validator/auth-validator.js";
import validate from "../middlewares/auth-validation.js";
// -----------------------------------------------------------------
// using controllers
import authControllers from "../controllers/auth-controllers.js";
import userController from "../controllers/user-controller.js";

// router.get(("/"), (req, res) => {
//     res.status(200).send("home sam")
// })
router.route("/").get(authControllers.home);
// router.route("/login").get((req, res) => {
//     res.status(200).send("loggin sam")
// })
router.route("/login").post(validate(signInSchema), authControllers.login);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/user").get(userAuthMiddleware, userController);

export default router;
