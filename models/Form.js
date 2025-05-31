const mongoose = require("mongoose")


module.exports = mongoose.model("form", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    desc: { type: String, required: true },
}))