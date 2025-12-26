import { useState } from 'react'
import React from 'react'
import HeroSection from './Components/landingpage.jsx'

import './App.css'


function App() {
  

  return (
    <>
     <div className="bg-black min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black text-white fixed w-full z-50 shadow-md">
        <div className="text-lg font-bold">Portfolio</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
        <div className="md:hidden">
          {/* Mobile menu icon can be added here */}
          <button className="text-white">&#9776;</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <HeroSection />
      </main>
    </div>
      
      
    </>
  )
}

export default App
