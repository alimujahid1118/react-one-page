import { User } from "../models/userModel.js"

export async function userController(req, res) {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ "message": `User ${req.body.name} created.` })
    } catch (err) {
        res.status(400).json({ "message": `Unable to create user ${req.body.name}` })
    }

}