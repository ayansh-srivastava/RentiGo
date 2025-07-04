import React from 'react';
import Title from '../../components/owner/Title';
import dummyData from '../../assets/dummydata';
import CarDetails from '../../components/owner/CarDetails';

const ManageCars = () => {
  const cars = dummyData.cars.filter(car => car.listedBy === 2) || [];

  return (
    <div className='ml-4'>
      <Title
        title="Manage Cars"
        description="View all listed cars, update their details, or remove them from the booking platform"
      />

      <div className="mt-6 max-w-6xl bg-gray-100 rounded-md overflow-hidden shadow border border-gray-200">
        {/* Header Row */}
        <div className="flex items-center px-5 py-3 text-sm font-semibold text-gray-600 bg-gray-100 border-b border-gray-300">
          <div className="w-28">Car</div>
          <div className="w-64">&nbsp;</div>
          <div className="w-40">Plate Number</div>
          <div className="w-32">Price</div>
          <div className="w-32">Availability</div>
          <div className="w-24 text-center">Actions</div>
        </div>

        {/* Car Rows */}
        {cars.map((car, index) => (
          <CarDetails
            key={index}
            car={car}
            onDelete={(id) => console.log("Delete", id)}
            onToggle={(id) => console.log("Toggle Availability", id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageCars;
