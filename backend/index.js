import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./utils/db.js"

import authRoutes from "./routes/auth.route.js"
import permissionRoutes from "./routes/permission.route.js"

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/permission', permissionRoutes)

connectDB()
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
