const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(express.static("dist"));
app.use(cors({ origin: "https://sarvesh-portfolio-o3yb.onrender.com", credentials: true }))
app.use("/api/form", require("./routes/form.route"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, console.log("Server Sunning"))

})