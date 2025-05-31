const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use("/api/form", require("./routes/form.route"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found !" })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, console.log("Server Sunning"))

})