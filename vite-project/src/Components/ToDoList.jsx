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
  return (
    <div>
        <div>
        <input type='text' placeholder={currentToDo ? "Update your tasks" : "Enter your task"}/>

        </div>
        <button className='bg-orange-600 text-center text-white rounded-md px-10 py-3 mt-7'>Add task</button>
      
    </div>
  )
}

export default ToDoList
