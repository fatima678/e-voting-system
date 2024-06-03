import React, { useState } from "react";
import { Link } from "react-router-dom";
import vote from "../assets/vote.jpg";

export default function CandidateRegistration() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    department: "",
    id: "",
    year: "",
    image: null
  });

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle candidate registration logic here
  };

  return (
    <div
      className="min-h-screen py-12"
      style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
    >
      <div className="container mx-auto">
        <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-1/2 flex flex-col items-center justify-center p-8 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${vote})` }}
          >
            <h1 className="text-white text-3xl font-bold mb-3">Welcome</h1>
            <div>
              <p className="text-white font-semibold text-center">
                           Register as a candidate to participate in the upcoming elections.
                
              </p>
            </div>
          </div>
          <div className="py-14 px-10 w-1/2">
            <h2 className="text-3xl mb-1 font-bold">Candidate Registration</h2>
            <p className="mb-4 text-gray-500 font-light">
              Create your candidate profile. 
            </p>
            <form onSubmit={handleSubmit} action="POST">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border border-gray-400 py-1 px-2"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-gray-400 py-1 px-2"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="department"
                  placeholder="Department"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="id"
                  placeholder="ID"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={formData.id}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Upload Image:</label>
                <input
                  type="file"
                  name="image"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-purple-400 py-3 text-center text-white font-medium"
                >
                  Register Now
                </button>
                <p className="text-gray-500 font-light mt-1">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
