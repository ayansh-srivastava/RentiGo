import bookingLogo from '../../assets/bookingLogo.png';
import dummyData from '../../assets/dummydata';

const getStatusColor = (status) => {
  switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'confirmed': return 'bg-blue-100 text-blue-800';
    case 'cancelled': return 'bg-red-100 text-red-800';
    case 'completed': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const RecentBookingCard = ({ booking }) => {
  const car = dummyData.cars.find(c => c._id === booking.car);

  return (
    <div className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition-all gap-4">
       
      <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-400 bg-blue-100/60">
        <img src={bookingLogo} alt="booking" className="w-5 h-5 object-contain" />
      </div>

       
      <div className="grid grid-cols-3 w-full items-center">
        
        <div>
          <h3 className="font-semibold text-gray-800 text-base truncate">
            {car?.name} - {car?.model}
          </h3>
          <p className="text-sm text-gray-500">
            {new Date(booking.createdAt).toLocaleDateString('en-IN')}
          </p>
        </div>

         
        <div className="text-center">
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-base font-medium text-gray-800">₹{booking.totalPrice}</p>
        </div>

         
        <div className="text-right">
          <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
            {booking.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentBookingCard;
