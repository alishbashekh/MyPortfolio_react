import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skill from './pages/Skill'
import Contact from './pages/Contact'


const App = () => {
  const[dark,setdark]=useState(true)
  useEffect(()=>{
   Aos.init({
    duration:1000,
    once:false,
    offset:100
   });
   document.documentElement.classList.add('dark');
  },[]);

  const toggledark=()=>{
    const newmode= !dark;
    setdark(newmode);
    document.documentElement.classList.toggle('dark');

  }
  return (
   <BrowserRouter>
      <div
        className={`min-h-screen ${
          dark ? "bg-[#020617]" : "bg-[#f8fafc]"
        }`}
      >
        <Navbar dark={dark} toggledark={toggledark} />

        <Routes>
          <Route path="/" element={<Home dark={dark}/>} />
          <Route path="/about" element={<About dark={dark}/>} />
          <Route path='/project' element={<Projects dark={dark} />} />
          <Route path='/skill' element={<Skill dark={dark} />} />
          <Route path='/contact' element={<Contact dark={dark} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
