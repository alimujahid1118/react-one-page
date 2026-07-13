import mongoose from "mongoose"

export async function database() {
    try {
        await mongoose.connect("mongodb+srv://alimujahid1118_db_user:Ali12345@mern.0jdsgzw.mongodb.net/mern_learning?retryWrites=true&w=majority&appName=MERN")
        console.log("Connected to MongoDB cloud database..")
    } catch (err) {
        console.log(err)
    }
}