import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dummyData from '../../assets/dummydata';
import capacity from '../../assets/capacity.png';

const Sidebar = () => {
  const location = useLocation();
  const user = dummyData.users.find((user) => user._id === 1) || {};

  const links = [
    { path: '/owner', label: 'Profile' },
    { path: '/owner/manage-cars', label: 'Manage Cars' },
    { path: '/owner/manage-bookings', label: 'Manage Bookings' },
    { path: '/owner/add-car', label: 'Add New Car' }
  ];

  const isActive = (path) => {
  if (path === '/owner') {
    return location.pathname === '/owner';
  }
  return location.pathname.startsWith(path);
};


  return (
    <div className="mt-4 px-4 py-6 bg-white shadow rounded-lg w-full md:w-64">
 
       <div className="flex flex-col items-center space-y-2 mb-6">
        <img
          src={user.img || {capacity}}
          alt="User"
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
        />
        <button className="text-sm text-blue-600 hover:underline">
          Update Photo
        </button>
        <p className="font-medium text-gray-800">{user.name || 'User Name'}</p>
      </div>

 
      <ul className="flex flex-col space-y-1">
        {links.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`block px-4 py-2 rounded-md transition 
                ${
                  isActive(path)
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
