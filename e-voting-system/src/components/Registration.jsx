// src/components/Registration.jsx
import React from "react";
import { Link } from "react-router-dom";
import vote from "../assets/vote.jpg";

export default function Registration() {
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
            <p className="mb-4 text-gray-500 font-light">
              Create your account. It's free and only takes a minute
            </p>
            <form>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-2">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the{" "}
                  <a className="text-purple-400 font-semibold">Terms of Use</a>{" "}
                  &{" "}
                  <a className="text-purple-400 font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-400 py-3 text-center text-white font-medium">
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
