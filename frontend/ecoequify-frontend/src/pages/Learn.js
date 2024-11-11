// src/pages/Learn.js
import React from "react";

const Learn = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Learn and Grow</h1>
      <p className="text-lg">Here you can explore various learning resources.</p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Featured Articles:</h2>
        <div className="space-y-4 mt-4">
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Article 1: Sustainability Practices</h3>
            <p>A detailed guide on sustainable practices in everyday life.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Article 2: The Importance of Green Energy</h3>
            <p>Understanding the benefits of renewable energy sources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
