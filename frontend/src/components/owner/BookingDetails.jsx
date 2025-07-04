import React from 'react';

const BookingDetails = ({ booking, car, onConfirm, onReject }) => {
  return (
    <div className="flex items-center px-5 py-4 bg-white border-b border-gray-200 text-sm">
      {/* Car Info */}
      <div className="flex-1 min-w-[200px]">
        <p className="font-semibold text-gray-800">
          {car?.brand} {car?.name} {car?.model}
        </p>
        <p className="text-gray-500 text-xs">Plate: {car?.plateNumber}</p>
      </div>

      {/* Rental Period */}
      <div className="w-64 text-gray-700">
        {new Date(booking.pickupDate).toLocaleDateString('en-IN')} →{' '}
        {new Date(booking.returnDate).toLocaleDateString('en-IN')}
      </div>

      {/* Status */}
      <div className="w-40">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            booking.status === 'pending'
              ? 'bg-yellow-100 text-yellow-600'
              : booking.status === 'confirmed'
              ? 'bg-green-100 text-green-600'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {booking.status}
        </span>
      </div>

      {/* Actions */}
      <div className="w-40 flex gap-3 justify-center">
        {booking.status === 'pending' ? (
          <>
            <button
              onClick={() => onConfirm(booking._id)}
              className="text-green-600 hover:underline"
            >
              Confirm
            </button>
            <button
              onClick={() => onReject(booking._id)}
              className="text-red-500 hover:underline"
            >
              Reject
            </button>
          </>
        ) : (
          <span className="text-gray-400 italic">No action</span>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
