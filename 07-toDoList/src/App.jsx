import { useState } from 'react'
import './App.css'
import './index.css'
import { ToDoProvider } from './contexts';
function App() {

  const [todos, setTodos] = useState([]);//---> todos is an array with multiple todo

  const addToDo=(todo)=>{
    // setTodos(todo)----> all delete only this will be there
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((
      prevToDo.id===id ? todo : prevToDo
    )))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    // whose id matches that will not come ,else ithers will come
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevToDo)=>
    prevToDo.id===id?{...prevToDo,completed:!prevToDo.completed}:prevToDo))
  }

  return (
    <ToDoProvider value={{todos,addToDo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
    </div>
    </ToDoProvider>
  )
}

export default App
