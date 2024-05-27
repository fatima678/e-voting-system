import React from 'react'
import vote from "../assets/voting-box.png";

export default function CandidatesList() {
  const members = [
    {
      id: 1,
      name: "Ahsan",
      department: "Computer Science",
      society: "YCPS",
      symbol: "</>",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Rana",
      department: "Computer Science",
      society: "YCPS",
      symbol: "</>",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Jutt",
      department: "Computer Science",
      society: "YCPS",
      symbol: "</>",
      avatar: "https://via.placeholder.com/150",
    },
    // Add more members as needed
  ];
  
  return (
   
    <>
    <h1 className='bg-black text-white justify-center text-center p-4 font-bold'>Vote for President</h1>
     
    <div className="max-w-screen mx-auto p-4 bg-slate-700" >
      
      {members.map((member) => (
        <div
          key={member.id}
          className="p-4 bg-white rounded-lg shadow mb-4 flex items-center"
        >
          <img
            src={vote}
            alt={member.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p>Department: {member.department}</p>
            <p>Society: {member.society}</p>
            <p>Symbol: {member.symbol}</p>
            
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Cast Vote
          </button>
        </div>
      ))}
    </div>
    </>
  );
};
  
