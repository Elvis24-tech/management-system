import React, { useState } from "react";

function Dashboard() {
  const [properties, setProperties] = useState([
    { id: 1, name: "Luxury Apartment", location: "Nairobi", price: 1200 },
    { id: 2, name: "Cozy Studio", location: "Mombasa", price: 600 },
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="font-bold text-xl mb-1">{p.name}</h2>
            <p className="text-gray-600 mb-2">{p.location}</p>
            <p className="text-blue-600 font-semibold">${p.price}/month</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
