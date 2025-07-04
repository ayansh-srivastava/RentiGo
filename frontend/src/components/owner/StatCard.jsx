const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
    <p className="text-sm text-gray-500 mb-1">{title}</p>
    <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
  </div>
);
export default StatCard;