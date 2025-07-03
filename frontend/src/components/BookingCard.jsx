import React from 'react';
import dummyData from '../assets/dummydata';
import location from '../assets/location2.png';
import calendar from '../assets/calendar.png';
import person from '../assets/person.png';

const BookingCard = ({ _id, car: carId, pickupDate, returnDate, totalPrice, status, createdAt, owner: ownerId }) => {
  const car   = dummyData.cars.find(c => c.id === carId);
  const owner = dummyData.users.find(u => u._id === ownerId);

  const getStatusColor = s => ({
    pending:   'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100   text-red-800',
    completed: 'bg-green-100 text-green-800',
  }[s] || 'bg-gray-100 text-gray-800');

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 mb-6 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

        {/* Col 1: Car */}
        <div className="flex-row items-start gap-4">
          <img
            src={car?.img}
            alt={car?.name}
            className="w-60 h-40 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{car?.name}</h3>
            <p className="text-sm text-gray-500">
              {car?.model} • {new Date(createdAt).getFullYear()}
            </p>
          </div>
        </div>

        {/* Col 2: ID, Period & Location */}
        <div className="space-y-4 text-sm text-gray-700">
          {/* Booking ID */}
          <div>
            <p className="text-xs text-gray-500">Booking ID</p>
            <p className="font-medium text-gray-800">#{_id}</p>
          </div>
          {/* Rental Period */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <img src={calendar} alt="Calendar" className="w-4 h-4" />
              <span className="text-xs text-gray-500">Rental Period</span>
            </div>
            <p className="ml-5 text-gray-700">
              {new Date(pickupDate).toLocaleDateString('en-IN')} → 
              {new Date(returnDate).toLocaleDateString('en-IN')}
            </p>
          </div>
          {/* Pick‑up & Drop‑off */}
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <img src={location} alt="Pickup" className="w-4 h-4" />
              <span className="text-xs text-gray-500">Pick‑up</span>
            </div>
            <p className="ml-5 text-gray-700">{car?.city}</p>

            <div className="flex items-center gap-1">
              <img src={location} alt="Drop‑off" className="w-4 h-4" />
              <span className="text-xs text-gray-500">Drop‑off</span>
            </div>
            <p className="ml-5 text-gray-700">{car?.city}</p>
          </div>
        </div>

        {/* Col 3: Status & Owner */}
        <div className="space-y-6 text-center md:text-left">
          {/* Status badge only */}
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(status)}`}>
            {status}
          </span>
          {/* Owner block */}
          <div>
            <p className="text-xs text-gray-500 mt-3 ml-2">Owner</p>
            <div className="flex items-center gap-2 mt-2 ml-2">
              <img
                src={owner?.profile || person}
                alt={owner?.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm text-gray-700">{owner?.name || 'Unknown'}</span>
            </div>
          </div>
        </div>

        {/* Col 4: Price & Booked On */}
        <div className="space-y-4 text-right text-sm text-gray-700">
          <div>
            <p className="text-xs text-gray-500">Total Price</p>
            <p className="text-lg font-semibold text-gray-800">₹{totalPrice}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Booked On</p>
            <p className="text-sm text-gray-700">
              {new Date(createdAt).toLocaleDateString('en-IN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;


//   _id: ObjectId,
//   user: ObjectId, // ref to User
//   car: ObjectId, // ref to Car
//   pickupDate: Date,
//   returnDate: Date,
//   totalPrice: Number,
//   status: ENUM, // e.g., pending, confirmed, cancelled, completed
//   createdAt: Date,
//   updatedAt: Date