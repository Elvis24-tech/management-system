import React from "react";
import PropertyCard from "../components/PropertyCard";

const properties = [
  {
    id: 1,
    name: "Luxury Apartment",
    location: "Nairobi, Kenya",
    price: 1200,
    image: "https://source.unsplash.com/600x400/?apartment",
    description: "Beautiful apartment in the city center.",
  },
  {
    id: 2,
    name: "Cozy Studio",
    location: "Mombasa, Kenya",
    price: 600,
    image: "https://source.unsplash.com/600x400/?studio",
    description: "Perfect studio for single tenants.",
  },
];

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Find Your Dream Rental</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}

export default Home; // ✅ Default export
