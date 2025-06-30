import React from 'react';
import logo from '../assets/logo.png';
import { Link,useNavigate } from 'react-router-dom';
import menu from '../assets/menu.png';
import close from '../assets/cross.png';

const Navbar = ({ setShowLogin }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link to="/">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="RentyGo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-blue-600">RentyGo</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-600"><Link to="/cars">Cars</Link></li>
          <li className="hover:text-blue-600"><Link to="/my-bookings">MyBookings</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition" onClick={() => navigate('/owner')}>
            Dashboard
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <img src={open ? close : menu} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col space-y-2 text-gray-700 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/my-bookings">MyBookings</Link></li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition" onClick={() => {
              navigate('/owner');
            }}>
              Dashboard
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={() => {
              setShowLogin(true)
              console.log("Login button clicked");}}>
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
