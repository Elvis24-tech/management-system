import React, { useState } from "react";  // ✅ Add React
import Modal from "./Modal";

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={property.image}
          alt={property.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{property.name}</h3>
          <p className="text-gray-600">{property.location}</p>
          <p className="mt-2 text-blue-600 font-semibold">${property.price}/month</p>
        </div>
      </div>
      {open && <Modal property={property} onClose={() => setOpen(false)} />}
    </>
  );
}
