// src/pages/Support.js
import React from "react";

const Support = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <p className="text-lg">If you need help, please contact us!</p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Contact Information:</h2>
        <ul className="space-y-2 mt-4">
          <li>Email: support@ecoequify.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Office Hours: 9 AM - 5 PM (Mon-Fri)</li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
