import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/owner/Navbar'
import Sidebar from '../../components/owner/Sidebar'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Layout