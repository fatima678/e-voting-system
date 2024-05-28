import React from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  { title: "Candidates Profile" , description: "Candidates Details", path: "/candidatesList" },
  { title: "Vote Casting", description: "Description for Vote Casting", path: "/vote-casting" },
  { title: "Results", description: "Description for Results", path: "/results" },
  { title: "Statistics", description: "Description for Statistics", path: "/statistics" },
  { title: "Notifications", description: "Description for Notifications", path: "/notifications" },
  { title: "Settings", description: "Description for Settings", path: "/settings" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-400 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200"
            onClick={() => handleCardClick(card.path)}
          >
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
