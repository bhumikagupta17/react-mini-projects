import { createContext,useContext } from "react";

export const ToDoContext=createContext({
    todos:[
        {
            // array of objects
            id:1,
            todo:" to do msg",
            completed:false
        },
    ],
    addToDo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useToDo=()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider=ToDoContext.Provider