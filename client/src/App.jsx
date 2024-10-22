import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import NewCollection from './components/NewCollection'
import Contact from './components/Contact'
import Search from './components/Search'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/NewCollection" element={<NewCollection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App