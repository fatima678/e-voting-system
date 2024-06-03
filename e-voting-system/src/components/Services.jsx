import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800">Our Services</h1>
          <p className="text-xl text-gray-600 mt-4">
            Discover the range of services we offer to meet your needs and help you achieve your goals.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-purple-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-3.866 0-7 1.79-7 4v4a3 3 0 003 3h8a3 3 0 003-3v-4c0-2.21-3.134-4-7-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8V6a4 4 0 10-8 0v2"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Consulting</h3>
            <p className="text-gray-600">
              Expert advice to help you make the best decisions for your business.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-purple-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m0 0h-1v4h-1m0 0h-1v4h-1m0 0h-1v-4H5m0 0h-1v-4H4m0 0h1V7h1m0 0h1v5h1m0 0h1v4h1m0 0h1v4h1m0 0h1v-4h1m0 0h1v-4h1m0 0h1V7h1m0 0h1v5h1m0 0h1v4h1m0 0h1v4h1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Development</h3>
            <p className="text-gray-600">
              Custom software solutions to meet your unique business needs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-purple-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h2m4 0h12M9 5l-7 7 7 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Marketing</h3>
            <p className="text-gray-600">
              Innovative strategies to promote your brand and increase your reach.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-purple-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.805A9 9 0 1112 21h.003M9 21h3M12 21h3m-3-3v3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Design</h3>
            <p className="text-gray-600">
              Creative and impactful designs to make your brand stand out.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-purple-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-6 4h8m-8 4h8m-8 4h8m-8 4h8m1-2.354A4 4 0 1020 18M4 6v12M4 18h16m0-12H4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Training</h3>
            <p className="text-gray-600">
              Comprehensive training programs to upskill your team.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-purple-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12l-2 2 5 5 5-5-2-2m-6 0a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Support</h3>
            <p className="text-gray-600">
              24/7 support to help you whenever you need us.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-purple-600 text-white rounded-lg shadow-lg py-8">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6">
            Contact us today to see how we can help you achieve your business goals.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
