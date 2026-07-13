import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    website: String,
    message: String
})

export const Form = mongoose.model("Form", formSchema)