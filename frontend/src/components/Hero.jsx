import React, { useState } from 'react';
import mainCar from '../assets/mainCar2.png';

const Hero = () => {
  const [cityName, setCityName] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  const maxDate = sixMonthsLater.toISOString().split('T')[0];

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Luxury Cars on Rent
      </h1>

      <form className="w-full max-w-xl space-y-6 mb-10">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Select City
          </label>
          <select
            required
            onChange={(e) => setCityName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Please select city</option>
            <option>Delhi</option>
            <option>Gurugram</option>
            <option>Bengaluru</option>
            <option>Noida</option>
            <option>Mumbai</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Pickup Date
            </label>
            <input
              type="date"
              min={today}
              max={maxDate}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Return Date
            </label>
            <input
              type="date"
              min={pickupDate || today}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {cityName && (
          <p className="text-blue-600 font-medium text-center">
            Selected City: {cityName}
          </p>
        )}
      </form>

      <div className="w-full max-w-3xl">
        <img
          src={mainCar}
          alt="Luxury Car"
          className="w-full h-auto object-contain "
        />
      </div>
    </div>
  );
};

export default Hero;
