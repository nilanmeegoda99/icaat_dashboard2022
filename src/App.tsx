import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  return (
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
  </Routes>
  )
}

export default App
