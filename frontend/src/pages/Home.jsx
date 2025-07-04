import React from 'react'
import Hero from '../components/Hero.jsx'
import FeaturedVehicles from '../components/FeaturedVehicles.jsx'
import luxuryCar from '../assets/luxuryCar.png'
import CustomerReviews from '../components/CustomerReviews.jsx'
import Subscibtion from '../components/Subscibtion.jsx'
const Home = () => {
  return (<>
    <Hero></Hero>
    <FeaturedVehicles></FeaturedVehicles>
    <div className="m-4 bg-gradient-to-r from-blue-600 to-white text-gray-800 py-10 px-6 md:px-20 rounded-xl flex flex-col md:flex-row items-center justify-between">
  <div className="text-left md:w-1/2 space-y-4">
    <h1 className="text-3xl font-bold">Do you own a luxury car?</h1>
    <p className="text-gray-100 md:text-gray-800">
      Turn your idle luxury car into a source of income. Partner with us to list your vehicle and connect with thousands of verified renters across the country. No hassle. Just earnings.
    </p>
    <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded hover:bg-blue-100 transition duration-300">
      List Your Car
    </button>
  </div>
  <div className="md:w-1/3 mt-8 md:mt-0">
    <img src={luxuryCar} alt="Luxury Car" className="w-full max-w-xs mx-auto md:mx-0" />
  </div>
</div>
<CustomerReviews></CustomerReviews>
<Subscibtion></Subscibtion>

    </>
  )
}

export default Home