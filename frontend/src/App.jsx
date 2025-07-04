import React from 'react'
import Navbar from './components/navbar'
import Car_Details from './pages/Car_Details'
import Cars from './pages/Cars'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/home';
import My_Bookings from './pages/My_Bookings'
import Layout from './pages/owner/Layout'
import Profile from './pages/owner/Profile'
import ManageBookings from './pages/owner/ManageBookings'
import ManageCars from './pages/owner/ManageCars'
import AddCars from './pages/owner/AddCars'
const App = () => {
const location = useLocation();
const isOwner = location.pathname.startsWith('/owner');
console.log(isOwner)
  return (
   <>
    {!isOwner && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars/>} />
      <Route path="/my-bookings" element={<My_Bookings/>} />
      <Route path="/car-details/:id" element={<Car_Details />} />
      <Route path="/owner" element={<Layout />}>
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          <Route index element={<Profile />} />
          <Route path="add-car" element={<AddCars />} />
      </Route>
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
    {!isOwner && <Footer/>}
    
   </>
  )
}

export default App