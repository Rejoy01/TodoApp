const TodoModel = require("../models/createTask")

exports.createTask = async(req,res)=>{
    try {
        
        const task = await TodoModel.create(req.body)
        if(task){
            res.status(200).json({
                success:"True",
                Message:"New Task Created",
                task
            })
        }


    } catch (err) {
        res.status(201).json({
            success:"false",
            message:`task creation failed ${err.message}`
        })
    }
}