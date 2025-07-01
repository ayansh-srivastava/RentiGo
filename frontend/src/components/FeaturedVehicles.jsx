import React from 'react';
import CarCard from './CarCard';
import Title from './Title';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import luxuryCar from '../assets/luxuryCar.png';
const FeaturedVehicles = () => {
  return (
    <div className="py-12 px-6 text-center">
      <Title 
        title="Featured Vehicles" 
        description="Explore our most popular vehicles" 
      />
      
      <div className="flex flex-wrap justify-center gap-6">
        <CarCard
          img={card1}
          id="1"
          name="Toyota Corolla"
          model="2022"
          price="1500"
          capacity="5"
          transmission="Automatic"
          fuel="Petrol"
          city="New York"
        />
        <CarCard
          img={card2}
          id="2"
          name="Honda Civic"
          model="2021"
          price="1600"
          capacity="5"
          transmission="Manual"
          fuel="Diesel"
          city="Los Angeles"
        />
        <CarCard
          img={card3}
          id="3"
          name="Ford Focus"
          model="2020"
          price="1400"
          capacity="5"
          transmission="Automatic"
          fuel="Petrol"
          city="Chicago"
        />
      </div>
      <button className="bg-white text-gray-800 py-2 px-6 mt-4 rounded-lg border border-gray-300 hover:shadow-md transition duration-300">
  Explore all cars
</button>
      
    </div>
  );
};

export default FeaturedVehicles;
