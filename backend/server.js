import express from "express"
import { database } from "./config/database.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"

const app = express()
const port = 8000

database()

app.use(express.json())

app.use(cors())

app.use('/api', userRoutes)

app.listen(port, console.log(`App running on port ${port}`))