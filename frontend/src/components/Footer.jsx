import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Logo + Name + Description */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="RentyGo Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold">RentyGo</h2>
          </div>
          <p className="text-gray-400 max-w-sm">
            Your trusted platform to rent and list premium cars with ease, transparency, and safety across India.
          </p>
        </div>

        {/* Right: List Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Home</li>
              <li>Browse Cars</li>
              <li>List your car</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Resources</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Insurance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <ul className="space-y-1 text-gray-400">
              <li>BHL Gandhi Road</li>
              <li>Delhi 110234</li>
              <li>+91 8604846038</li>
              <li>rentigo@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {year} RentyGo. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
