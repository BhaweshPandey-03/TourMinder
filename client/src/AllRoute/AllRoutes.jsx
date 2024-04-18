import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Register from '../component/Register'
import Login from '../component/Login'
import Home from '../pages/Home'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes