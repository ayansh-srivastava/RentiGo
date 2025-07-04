import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import dummyData from '../../assets/dummydata'
const Navbar = () => {
    const user=dummyData.users.find((user) => user._id === 1) || {};
  return (
    <nav className="bg-white shadow-md px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            <Link to="/">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="RentyGo" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold text-blue-600">RentyGo</span>
              </div>
            </Link>
            <h1 className='text-2xl font-bold'>Welcome {user.name || "Owner"}</h1>
          </div>
    </nav>
  )
}

export default Navbar