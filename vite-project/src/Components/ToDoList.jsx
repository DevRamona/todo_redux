import { Import } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'

import {addTodo, setTodoList, sortTodo, updateTodo, toggleCompleted} from "../TodoSlice"
import {TiPencil} from "react-icons/ti"
import {BsTrash} from "react-icons/bs"
import { current } from '@reduxjs/toolkit'

const ToDoList = () => {
    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todo.todoList)
    const sortCriteria = useSelector((state) => state.todo.sortCriteria)
    const [currentToDo, setCurrentToDo] = useState(null)
    const [newTask, setNewTask] = useState("")
    const handleAddToDo = () => { 
      if (newTask.trim() !== "") {
        if(currentToDo) {
          dispatch(updateTodo({id : currentToDo.id, task : newTask}));
          setCurrentToDo(null)
        } else {
          dispatch(addTodo({task : newTask, id: Date.now()}))
        }
        setNewTask("")
      }
       
    }

    const handleUpdate = (todo) => {
      setCurrentToDo(todo)
      setNewTask(todo.task)
    }

    const handleToggleComplete = (id) => {
      dispatch(toggleCompleted({id}))
    }
    const handleDeleteToDo = (id) => {
      dispatch(deleteToDo({id}))
    }

    
  return (
    <div>
        <div className='flex justify-between'>
        <input type='text' value={newTask} placeholder={currentToDo ? "Update your tasks" : "Enter your task"}/>

        </div>
        <div>
          {currentToDo ? (
            <>
            <button onClick={handleAddToDo} className='bg-green-500 text-white px-4 py-2 rounded mr-2'>Save</button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded mr-2'>Cancel</button> 
            </>
          ) : (
            <> <button className='bg-black border px-4 py-1 text-white '>Cancel</button>
            <button className='bg-orange-700 border px-4 py-1 text-white'>Add</button> </>
          )}
        </div>   
        <button className='bg-orange-600 text-center text-white rounded-md px-10 py-3 mt-7'>Add task</button>
      
    </div>
  )
}

export default ToDoList
