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

exports.getTask = async(req,res)=>{
   TodoModel.find()
   .then(result => res.json(result))
   .catch(err => res.json(err))
    
}

exports.updateTask = async(req,res)=>{
    const {id}  = req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result => res.json(result))
    .catch(err => res.json(err.message))

}

exports.deleteTask = (req,res)=>{
    const {id} = req.params
    TodoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err.message))

}