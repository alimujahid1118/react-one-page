import express from "express"
import { formController, getFormController } from "../controllers/formController.js"

const formRoutes = express.Router()

formRoutes.post('/contact-us', formController)
formRoutes.get('/contact-us-info', getFormController)

export default formRoutes