import { Form } from "../models/formModel.js"

export async function formController(req, res) {
    try {
        const form = await Form.create(req.body)
        res.status(201).json({ "message": `Form ${req.body.name} created.` })
    } catch (err) {
        res.status(400).json({ "message": `Unable to create form data for ${req.body.name}` })
    }

}

export async function getFormController(req, res) {
    try {
        const forms = await Form.find()
        res.status(200).json(forms)
    } catch (err) {
        console.log(err)
    }

}