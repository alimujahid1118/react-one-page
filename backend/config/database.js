import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const mongo_url = process.env.DATABASE_URL

export async function database() {
    try {
        await mongoose.connect(mongo_url)
        console.log("Connected to MongoDB cloud database..")
    } catch (err) {
        console.log(err)
    }
}