const express = require("express")

const router = express.Router();

const {createTask} = require("../controllers/createControllers")

router.post("/create",createTask)

module.exports = router