const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const app = express()
const connectToDb = require("./db/db")
const captainRoutes = require("./routes/captain.routes")
const userRoutes = require("./routes/user.routes")
const cookieParser = require("cookie-parser")
connectToDb()

app.use(cors());
app.use(express.json());
app.use(cookieParser())



app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use("/user",userRoutes)
app.use("/captain",captainRoutes)
module.exports = app;