import React from 'react';
import Title from '../components/Title';
import search from '../assets/search.png';
import filter from '../assets/filter.png';
import dummyData from '../assets/dummydata.js';
import CarCard from '../components/CarCard';
const Cars = () => {
    const cars = dummyData.cars;
  return (
    <div className="bg-gray-100 min-h-screen pt-0 mb-14">
      <div className="px-6 py-4">
        <Title
          title="Available Cars"
          description="Explore our wide range of cars available for rent. Find the perfect vehicle for your needs."
        />

        {/* Search & Filter Row */}
        <div className="flex justify-center mt-4">
          <div className="flex w-full max-w-xl">
            <div className="relative flex-grow">
              <img
                src={search}
                alt="Search"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search cars..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="p-2 px-4 border border-gray-300 bg-gray-100 rounded-r-md hover:bg-gray-200 flex items-center justify-center">
              <img src={filter} alt="Filter" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6">
        {/* Render filtered cars here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
