import express from "express"
import { database } from "./config/database.js"
import formRoutes from "./routes/formRoutes.js"
import cors from "cors"

const app = express()
const port = 8000

database()

app.use(express.json())

app.use(cors())

app.use('/api', formRoutes)

app.listen(port, console.log(`App running on port ${port}`))