import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import servicesRouter from "./routes/servicesRoute.js"
import projectRouter from "./routes/projectsRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// API endpoint
app.use("/api/services",servicesRouter)
app.use("/api/projects",projectRouter)
app.use("/images",express.static('uploads'))



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})

// mongodb+srv://Admin:<db_password>@nelson707.oszdhpg.mongodb.net/?retryWrites=true&w=majority&appName=Nelson707
