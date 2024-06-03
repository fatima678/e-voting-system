import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import vote from "../assets/vote.jpg";

export default function Registration() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "voter" // Default user type
  });

  const navigate = useNavigate();

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Redirect to candidate registration page if userType is "candidate"
    if (name === "userType" && value === "candidate") {
      navigate("/candidateRegistration");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.userType === "candidate") {
      navigate("/candidateRegistration");
    } else {
      // Handle voter registration
      console.log("Registering as Voter:", formData);
    }
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
              <p className="text-white font-semibold">
                An online voting system is a software platform that allows
                groups to securely conduct votes and elections. High-quality
                online voting systems balance ballot security, accessibility,
                and the overall requirements of an organization's voting event.
              </p>
            </div>
          </div>
          <div className="py-14 px-10 w-1/2">
            <h2 className="text-3xl mb-1 font-bold">Voter Registration</h2>
            <div className="mt-4">
              <label className="block text-gray-500 font-light mb-3">
                Choose before registration:
              </label>
              <select
                name="userType"
                className="border border-gray-400 py-1 px-2 w-full"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="voter">Voter</option>
                <option value="candidate">Candidate</option>
              </select>
            </div>
            <form onSubmit={handleSubmit} action="POST">
              <div className="grid grid-cols-2 gap-3 mt-4">
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
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={formData.email}
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
