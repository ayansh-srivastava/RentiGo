const RevenueCard = ({ revenue }) => (
  <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow text-center">
    <p className="text-4xl font-bold text-blue-900">₹{revenue}</p>
    <p className="text-sm text-blue-700 mt-2">This month's earnings</p>
  </div>
);
export default RevenueCard;