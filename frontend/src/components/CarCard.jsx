import React from 'react';
import capacity from '../assets/capacity.png';
import city from '../assets/city.png';
import fuel from '../assets/fuel.png';
import transmission from '../assets/transmission.png';
import { useNavigate } from 'react-router-dom';
const CarCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" onClick={() => navigate(`/car-details/${props.id}`)}>
      <div className="relative">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs sm:text-sm px-3 py-1 font-semibold rounded-full">
          Available Now
        </div>
        <div className="absolute bottom-3 right-3 bg-black text-white text-xs sm:text-sm px-3 py-1 font-semibold rounded-full">
          {props.price} / day
        </div>
      </div>

      <div className="p-4 space-y-2 text-left">
        <div className="text-lg font-medium text-gray-700">{props.name}</div>
        <div className="text-sm text-gray-500">{props.model}</div>

        <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <img src={capacity} alt="Capacity" className="w-5 h-5" />
            <p>{props.capacity} Person</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={transmission} alt="Transmission" className="w-5 h-5" />
            <p>{props.transmission}</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={fuel} alt="Fuel" className="w-5 h-5" />
            <p>{props.fuel}</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={city} alt="City" className="w-5 h-5" />
            <p>{props.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
