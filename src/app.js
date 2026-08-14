import express from "express"
import publicRoutes from "../src/routes/public.routes.js"
import connectDB from "./db/db.js"
import 'dotenv/config'
const app = express()
import cors from "cors"
connectDB()



app.use(cors({
  origin: "https://sharenearby.vercel.app"
}))

app.set("trust proxy", 1);


app.use(express.json())
app.use("/api/public", publicRoutes)


export default app
