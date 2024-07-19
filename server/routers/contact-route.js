import express from 'express'
const router = express.Router()

import validate from '../middlewares/auth-validation.js'
import contactSchema from '../validator/contact-validator.js'
import contactController from '../controllers/contact-controller.js'

router.route("/contact").post(validate(contactSchema), contactController)

export default router