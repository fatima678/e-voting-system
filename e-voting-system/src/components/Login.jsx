import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vote from "../assets/voting-box.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would normally handle the login logic (e.g., call an API to authenticate the user)
    // For simplicity, let's assume the login is always successful if email and password are not empty

    if (email && password) {
      // Redirect to the dashboard page
      navigate("/dashboard");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-md p-8">
          <img className="mx-auto h-12 w-auto" src={vote} alt="voting" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login to E-Voting
          </h2>
          <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-3 mt-1 block w-full border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-2 py-3 mt-1 block w-full border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-purple-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Log in
              </button>
            </div>
            <div>
              <p>
                Don't have an account? <Link to="/register" className="text-purple-600">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
