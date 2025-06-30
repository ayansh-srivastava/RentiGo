import React from 'react'

const Subscibtion = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4 text-center mt-14">Never miss a deal</h1>
        <p className="text-gray-400 text-center mb-8">Subscribe to get the latest offers, greatest discounts and new collections before anyone else.</p>
        <div className="flex justify-center items-center h-40">
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
            Subscribe Now
            </button>
        </div>
        </div>

    </div>
  )
}

export default Subscibtion