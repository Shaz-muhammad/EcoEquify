// src/pages/Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-lg">Here you can view an overview of your activities.</p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Key Metrics:</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Metric 1</h3>
            <p>Details about Metric 1</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Metric 2</h3>
            <p>Details about Metric 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
