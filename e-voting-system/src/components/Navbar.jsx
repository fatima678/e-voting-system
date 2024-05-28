import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">E-voting system</Link>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
            {/* Updated link to candidate list */}
            <Link to="/candidatesList" className="text-white hover:text-gray-200">Candidate Profile</Link>
            <Link to="/aboutUs" className="text-white hover:text-gray-200">About us</Link>
            <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
            <Link to="/contactUs" className="text-white hover:text-gray-200">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
