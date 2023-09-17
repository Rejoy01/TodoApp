import React, { useEffect, useState } from 'react'
import Create from '../Create/Create'
import axios from 'axios'
import { BsFillCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

import './Home.css'

const Home = () => {
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/api/get')
        .then(res=> setTodos(res.data))
        .catch(err => console.log(err.message))
    },[])

const handleDelete =(id)=>{
    axios.delete('http://localhost:4000/api/delete/'+id)
        .then(res=> {
            location.reload()
        })
        .catch(err => console.log(err.message))
}

const handleEdit= (id)=>{
    axios.put('http://localhost:4000/api/update/'+id)
        .then(res=> {
            location.reload()
        })
        .catch(err => console.log(err.message))
}

  return (
    <div className='home' >
        <h2>Todo List</h2>
        <Create />
        {
    todos.length === 0 ? (
        <div><h2>No Record</h2></div>
    ) : (
        <div >
            {todos.map(todo => (
                <div className='task' key={todo._id}>
                    <div className='checkbox' onClick={()=>handleEdit(todo._id)}> 
                        {todo.done ? <BsFillCheckCircleFill className='icon'/> : 
                            <BsFillCircleFill className='icon'/> 
                        }
                        
                        <p className={todo.done ? "line-through":""}>{todo.task}</p>
                    </div>
                    <span><BsFillTrashFill className='icon'onClick={()=>handleDelete(todo._id)}/></span>
                </div>
            ))}
        </div>
    )
}

    </div>
  )
}

export default Home
