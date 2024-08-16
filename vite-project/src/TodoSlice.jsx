import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
    name : "todo",
    initialState : {
        todoList : [],
        sortCriteria: "All"
    }, 
    reducers : {
        setTodoList : (state, action) => {
            state.todoList = action.payload
            
        },
        addTodo: (state,action) => {
            state.todoList.push({
                task: action.payload.task,
                id: action.payload.id,
                completed :false,
            })
        },
        sortTodo: (state, action) => {
            state.sortCriteria = action.payload
        },
        updateTodo : (state, action) => {
            const {id, task} = action.payload;
            const index = state.todoList.findIndex((todo) => todo.id === id)
            if(index !== -1) {
                state.todoList[index].task = task;
            }
            
        },

        toggleCompleted : (state, action) => {
            const {id} = action.payload;
            const index = state.todoList.findIndex((todo) => todo.id === id)
            if(index !== -1) {
                state.todoList[index].completed = !state.todoList[index].completed
            }
           
        },

        deleteToDo : (state, action) => {
            const {id} = action.payload
            state.todoList = state.todoList.filter((todo) => todo.id !== id)
        }

         
    }
})



export const {setTodoList, addTodo, sortTodo, updateTodo, toggleCompleted, deleteToDo} = ToDoSlice.actions;
export default ToDoSlice.reducer