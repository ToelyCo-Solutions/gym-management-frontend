import React from "react";

const Dashboard = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">Total Sales</h3>
        <p className="text-gray-700 text-3xl font-bold">$10,000</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">Total Orders</h3>
        <p className="text-gray-700 text-3xl font-bold">50</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">New Customers</h3>
        <p className="text-gray-700 text-3xl font-bold">10</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">Pending Orders</h3>
        <p className="text-gray-700 text-3xl font-bold">5</p>
      </div>
    </div>
  );
};

export default Dashboard;
