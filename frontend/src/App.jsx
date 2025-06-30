import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/home';
const App = () => {
  const isOwner = useLocation().pathname === '/owner';
  return (
   <>
    {!isOwner && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<div>Cars Page</div>} />
      <Route path="/my-bookings" element={<div>My Bookings Page</div>} />
      <Route path="/owner" element={<div>Owner Dashboard</div>} />
    </Routes>
    {!isOwner && <Footer/>}
    
   </>
  )
}

export default App