import React from "react";  // ✅ Add this
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">RentEase</div>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/properties" className="hover:text-blue-500">
            Properties
          </Link>
        </li>
        <li>
          <Link to="/add" className="hover:text-blue-500">
            Add Property
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
