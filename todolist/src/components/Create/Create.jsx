import React, { useState } from 'react'
import './Create.css'
import axios from "axios"

const Create = () => {

  const [task,setTask] = useState()

  const handleAdd = ()=>{
      axios.post('http://localhost:4000/add/create',{ task : task})
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div className='create'>
      <input type="text" name='' id='' placeholder='Enter task' className='create-input' onChange={(e)=>{setTask(e.target.value)}}/>
      <button type='button' className='create-button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
