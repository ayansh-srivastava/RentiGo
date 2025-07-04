import React from 'react';
import Title from '../../components/owner/Title';
import dummyData from '../../assets/dummydata';
import BookingDetails from '../../components/owner/BookingDetails';

const ManageBookings = () => {
  const bookings = dummyData.bookings.filter(b => b.status !== 'cancelled');

  const handleConfirm = (id) => {
    console.log('Confirmed booking', id);
  };

  const handleReject = (id) => {
    console.log('Rejected booking', id);
  };

  return (
    <div className="ml-4">
      <Title
        title="Manage Bookings"
        description="Review all car rental requests, confirm pending ones, or reject if needed."
      />

      <div className="mt-6 max-w-6xl bg-gray-100 rounded-md overflow-hidden shadow border border-gray-200">
        {/* Header Row */}
        <div className="flex items-center px-5 py-3 text-sm font-semibold text-gray-600 bg-gray-100 border-b border-gray-300">
          <div className="flex-1 min-w-[200px]">Car</div>
          <div className="w-64">Rental Period</div>
          <div className="w-40">Status</div>
          <div className="w-40 text-center">Action</div>
        </div>

        {/* Booking Rows */}
        {bookings.map((booking, index) => {
          const car = dummyData.cars.find(c => c._id === booking.car);
          return (
            <BookingDetails
              key={index}
              booking={booking}
              car={car}
              onConfirm={handleConfirm}
              onReject={handleReject}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ManageBookings;
