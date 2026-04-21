import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Hey! I am Bhumika</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
