import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img src="/src/assets/matters.png" alt="Logo" className="h-14 w-14 rounded-3xl" /> {/* Adjust the size as needed */}
            <Link to="/" className="text-white text-2xl font-bold">E-voting system</Link>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
            <Link to="/candidatesList" className="text-white hover:text-gray-200">Candidate Profile</Link>
            <Link to="/aboutUs" className="text-white hover:text-gray-200">About Us</Link>
            {/* <Link to="/services" className="text-white hover:text-gray-200">Services</Link> */}
            <Link to="/contactUs" className="text-white hover:text-gray-200">Contact Us</Link>
          </div>
          {/* Logout Button */}
          <div>
            <button
              onClick={() => console.log('Logout clicked')} // Replace with your logout logic
              className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-black transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
