import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'

function App() {
  

  return (
    <>
      <Header/>
      <ToDoList/>
    </>
  )
}

export default App
