import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
    </div>
  )
}

export default App