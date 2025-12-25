import React, { useState } from 'react'
import Login from './components/login/Login'
import Products from './components/product/Products'
import Users from './components/user/Users'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  
  return (

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/user" element={<Users />}></Route>
      </Routes>

  )
}

export default App;