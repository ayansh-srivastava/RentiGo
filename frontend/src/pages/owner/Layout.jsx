import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/owner/navbar'
import Sidebar from '../../components/owner/sidebar'
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