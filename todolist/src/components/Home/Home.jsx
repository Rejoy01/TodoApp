import React, { useEffect, useState } from 'react'
import Create from '../Create/Create'
import axios from 'axios'

import './Home.css'

const Home = () => {
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/get')
        .then(res=> setTodos(res))
        .catch(err => console.log(err.message))
    },[])

  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create />
        {
            todos.length ===0 ? 
            <div><h2>No Record</h2></div> 
            :
            todos.map(todo=>(
                <div>
                    {todo}
                </div>
            ))
        }
    </div>
  )
}

export default Home
