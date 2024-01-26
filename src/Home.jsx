import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from 'react-icons/bs';
import { getAllToDo, addToDo } from './components/utils/HandleApi'

function Home() {
    const [todos, setTodos]=useState ([])
    
    useEffect(()=>{
      axios.get('http://localhost:5000/get')
      .then(result=> setTodos(result.data))
      .catch(err=> console.log(err))
  
   
    }, [])
    const handelEdit = (id) => {
      axios.put(`http://localhost:5000/update/${id}`)
    .then(result=> {
      location.reload()
    })
    .catch(err=> console.log(err))

    }

    const handleDelete = (id)=>{
      axios.delete(`http://localhost:5000/delete/${id}`)
      .then(result =>{
         location.reload()
 
      })
    }
  
  

    return (
      <div className='home'>
        <h2>Todo List</h2>
        <Create onAddTodo={() => handleAddTodo()} />
  
        {todos.length === 0 ? (
          <h3>No Todos</h3>
        ) : (
          <div>
            {todos.map((todo) => (
              <div className='task' key={todo._id} onClick={() => handelEdit(todo._id)}>
                {todo.done ? (
                  <BsFillCheckCircleFill className='icon checkbox' />
                ) : (
                  <BsCircle className='icon checkbox' />
                )}
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                <BsFillTrashFill className='icon trash' onClick={()=>handleDelete(todo._id)} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

export default Home