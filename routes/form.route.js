const router = require("express").Router()
const form = require("./../controllers/form.controller")
router
    .post("/submit", form.formControl)

module.exports = router