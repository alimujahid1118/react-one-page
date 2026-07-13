import express from "express"
import { userController } from "../controllers/userController.js"

const userRoutes = express.Router()

userRoutes.post('/contact-us', userController)

export default userRoutes