import React, { useState } from 'react';
import toggleOn from '../../assets/toggle1.png';
import toggleOff from '../../assets/toggle2.png';
import deleteIcon from '../../assets/delete.png';

const CarDetails = ({ car, onDelete, onToggle }) => {
  const [available, setAvailable] = useState(car.isAvailable);

  const handleToggle = () => {
    setAvailable(prev => !prev);
    onToggle?.(car._id); // optional callback
  };

  const handleDelete = () => {
    onDelete?.(car._id); // optional callback
  };

  return (
    <div className="flex items-center bg-white p-4 border-b border-gray-200 w-full max-w-6xl mx-auto text-sm">
      
      {/* Car Image */}
      <div className="w-28 h-20 shrink-0">
        <img src={car.images?.[0]} alt="car" className="w-full h-full object-cover rounded-md" />
      </div>

      {/* Car Name and Year */}
      <div className="w-64 px-4">
        <p className="font-semibold text-gray-800 text-base">{car.brand} {car.name} {car.model}</p>
        <p className="text-sm text-gray-500">Year: {car.year}</p>
      </div>

      {/* Plate Number */}
      <div className="w-40 text-gray-700">
        {car.plateNumber}
      </div>

      {/* Price */}
      <div className="w-32 text-gray-800 font-medium">
        ₹{car.pricePerDay}
      </div>

      {/* Availability Toggle */}
      <div className="w-32 flex items-center gap-2">
        <img
          src={available ? toggleOn : toggleOff}
          alt="toggle availability"
          className="w-6 h-6 cursor-pointer"
          onClick={handleToggle}
        />
        <span className={`text-sm font-medium ${available ? 'text-green-600' : 'text-red-500'}`}>
          {available ? 'Available' : 'Not Available'}
        </span>
      </div>

      {/* Delete Action */}
      <div className="w-24 flex justify-center">
        <img
          src={deleteIcon}
          alt="delete"
          className="w-5 h-5 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default CarDetails;
