const express = require("express");
const app = express()
const cors = require("cors")

const DatabaseConnection = require("./config/DatabaseConnection.js")

const create = require("./routes/create.js")

const getTask = require("./routes/create.js")

const updateTask = require("./routes/create.js")

const deleteTask = require("./routes/create.js")

const dotenv = require("dotenv");



dotenv.config({path:`./config/.env`})

DatabaseConnection()





app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/add/',create)

app.use('/api/',getTask)

app.use('/api/',updateTask)

app.use('/api/',deleteTask)

app.listen(process.env.PORT,()=>{
    console.log(`Port is running on ${process.env.PORT}`);
})

