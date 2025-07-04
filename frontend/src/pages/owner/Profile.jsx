import React from 'react';
import Title from '../../components/owner/Title';
import StatCard from '../../components/owner/StatCard';
import RevenueCard from '../../components/owner/RevenueCard';
import RecentBookingCard from '../../components/owner/RecentBookingCard';
import dummyData from '../../assets/dummydata';

const Profile = () => {
  const ownerId = 1; //TODO
  const ownerCars = dummyData.cars.filter(car => car.listedBy === ownerId);
  const ownerBookings = dummyData.bookings.filter(b => b.owner === ownerId);
  const pendingBookings = ownerBookings.filter(b => b.status === 'pending');
  const completedBookings = ownerBookings.filter(b => b.status === 'completed');

  const currentMonth = new Date().getMonth();
  const revenue = ownerBookings
    .filter(b => new Date(b.createdAt).getMonth() === currentMonth)
    .reduce((sum, b) => sum + b.totalPrice, 0);

  return (
    <div className="ml-4 w-full pr-6">
      <Title
        title="Owner Dashboard"
        description="Monitor overall platform performance including total cars, bookings, revenue, and recent activities."
      />

 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <StatCard title="Total Cars" value={ownerCars.length} />
        <StatCard title="Total Bookings" value={ownerBookings.length} />
        <StatCard title="Pending Bookings" value={pendingBookings.length} />
        <StatCard title="Completed Bookings" value={completedBookings.length} />
      </div>

      <div className="flex flex-col lg:flex-row mt-10 gap-8">
  
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Recent Bookings</h2>
          <p className="text-gray-600 mb-4">Here are your latest bookings:</p>

          <div className="space-y-4">
            {ownerBookings.length === 0 ? (
              <p className="text-sm text-gray-500 italic">No bookings found.</p>
            ) : (
              ownerBookings.slice(0, 4).map((booking) => {
                const car = dummyData.cars.find(c => c.id === booking.car);
                return (
                  <RecentBookingCard key={booking._id} booking={booking} car={car} />
                );
              })
            )}
          </div>
        </div>

         
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Monthly Revenue</h2>
          <p className="text-gray-600 mb-4">Revenue for the current month:</p>
          <RevenueCard revenue={revenue} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
