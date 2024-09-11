import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import "./Sass/Style.sass"
import AddNavFotter from './HOC/AddNavFotter'
import Hero from './pages/Hero'
import Home from  './pages/Home'

function App() {
  


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
