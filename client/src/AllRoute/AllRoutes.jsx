import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../component/Register'
import Login from '../component/Login'
import Home from '../pages/Home'
import Home2 from "../pages/Home2"

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home2 />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AllRoutes