import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    website: String,
    message: String
})

export const User = mongoose.model("User", userSchema)