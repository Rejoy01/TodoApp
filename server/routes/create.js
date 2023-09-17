const express = require("express")

const router = express.Router();

const {createTask,getTask,updateTask,deleteTask} = require("../controllers/createControllers")

router.post("/create",createTask)

router.get("/get",getTask)

router.put('/update/:id',updateTask)

router.delete('/delete/:id',deleteTask)

module.exports = router