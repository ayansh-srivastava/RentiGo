import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dummyData from '../assets/dummydata';
import back from '../assets/back.png';
import capacityIcon from '../assets/capacity.png';
import fuelIcon from '../assets/fuel.png';
import transmissionIcon from '../assets/transmission.png';
import cityIcon from '../assets/city.png';
import tick from '../assets/tick.png';
const Car_Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  const maxDate = sixMonthsLater.toISOString().split('T')[0];
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 1);
  


  const car = dummyData.cars.find(car => car._id === parseInt(id));

  if (!car) return <p className="text-center text-red-600">Car not found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <button onClick={() => navigate('/cars')} className="flex items-center text-blue-600 mb-6">
        <img src={back} alt="Back" className="w-5 h-5 mr-2" />
        Back to all cars
      </button>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Side */}
        <div className="md:col-span-2">
          {/* Image Gallery */}
          <div className="flex gap-4 overflow-x-auto mb-6">
            {car.images?.length > 0 ? (
              car.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={car.name}
                  className="h-64 w-auto rounded-lg object-cover"
                />
              ))
            ) : (
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
          </div>

          <div className="space-y-1 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{car.name}</h1>
            <p className="text-gray-500 text-sm">Model: {car.model}</p>
            <p className="text-gray-500 text-sm">Make: {car.brand} &bull; {car.year}</p>
            <p className="text-blue-600 text-xl font-semibold mt-6">₹{car.price}/day</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6 mt-10">
            <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow-sm">
              <img src={capacityIcon} className="w-5 h-5" alt="Capacity" />
              <span className="text-gray-700 text-md">{car.capacity} Persons</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow-sm">
              <img src={transmissionIcon} className="w-5 h-5" alt="Transmission" />
              <span className="text-gray-700 text-md">{car.transmission}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow-sm">
              <img src={fuelIcon} className="w-5 h-5" alt="Fuel" />
              <span className="text-gray-700 text-md    ">{car.fuel}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow-sm">
              <img src={cityIcon} className="w-5 h-5" alt="City" />
              <span className="text-gray-700 text-md">{car.city}</span>
            </div>
          </div>
          <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Features</h3>
                <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, i) => (
                        <span
                            key={i}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                        >
                            <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
                            {feature}
                        </span>
                    ))}

                </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Description</h2>
            <p className="text-gray-600 text-sm">
              {car.description}.
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Book This Car</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pick-up Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                max={maxDate}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Drop-off Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                min={pickupDate || new Date().toISOString().split("T")[0]}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Car_Details;
