import React from 'react';
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
    {
      id: 4,
      name: "Khan",
      department: "Computer Science",
      society: "YCPS",
      symbol: "</>",
      avatar: "https://via.placeholder.com/150",
    },
    // Add more members as needed
  ];

  const businessMembers = [
    {
      id: 5,
      name: "John",
      department: " Bachelor Business",
      society: "ABC",
      symbol: "$",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Jane",
      department: "Bachelor Business",
      society: "ABC",
      symbol: "$",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "John",
      department: "Bachelor Business",
      society: "ABC",
      symbol: "$",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Jony",
      department: "Bachelor Business",
      society: "ABC",
      symbol: "$",
      avatar: "https://via.placeholder.com/150",
    },
  ]


    const ElectricalMembers = [
      {
        id: 9,
        name: "Kiran",
        department: " Bachelor Business",
        society: "ABC",
        symbol: "$",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 10,
        name: "Aizal",
        department: "Bachelor Business",
        society: "ABC",
        symbol: "$",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 10,
        name: "Mahnoor",
        department: "Bachelor Business",
        society: "ABC",
        symbol: "$",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 12,
        name: "Ali",
        department: "Bachelor Business",
        society: "ABC",
        symbol: "$",
        avatar: "https://via.placeholder.com/150",
      },    
    // Add more business members as needed
  ];

  return (
    <>
     
      {/* Heading 2 */}
      <h2 className='bg-slate-500 text-white text-center p-2 font-bold mt-5'>Choose President from Computer Science Department</h2>

      {/* Candidate Cards for Computer Science Department */}
      <div className="max-w-screen mx-auto p-4 bg-slate-700 flex flex-wrap justify-center">
        {members.map((member) => (
          <div
            key={member.id}
            className="p-4 bg-white rounded-lg shadow m-4 flex flex-col items-center"
            style={{ maxWidth: '300px' }} // Limiting the width of each card
          >
            <img
              src={vote}
              alt={member.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <div className="text-center">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p>Department: {member.department}</p>
              <p>Society: {member.society}</p>
              <p>Symbol: {member.symbol}</p>
            </div>
            {/* "Cast Vote" Button */}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4">
              Cast Vote
            </button>
          </div>
        ))}
      </div>

      
<h2 className='bg-slate-500 text-white text-center p-2 font-bold'>Choose President from Electrical Department</h2>

{/* Candidate Cards for Business Department */}
<div className="max-w-screen mx-auto p-4 bg-slate-700 flex flex-wrap justify-center">
  {businessMembers.map((member) => (
    <div
      key={member.id}
      className="p-4 bg-white rounded-lg shadow m-4 flex flex-col items-center"
      style={{ maxWidth: '300px' }} // Limiting the width of each card
    >
      <img
        src={vote}
        alt={member.name}
        className="w-16 h-16 rounded-full mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold">{member.name}</h2>
        <p>Department: {member.department}</p>
        <p>Society: {member.society}</p>
        <p>Symbol: {member.symbol}</p>
      </div>
      {/* "Cast Vote" Button */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-4">
        Cast Vote
      </button>
    </div>
    
  ))}
</div>
<h2 className='bg-slate-500 text-white text-center p-2 font-bold'>Choose President from Electrical Department</h2>

{/* Candidate Cards for Electrical Department */}
<div className="max-w-screen mx-auto p-4 bg-slate-700 flex flex-wrap justify-center">
        {ElectricalMembers.map((member) => (
          <div
            key={member.id}
            className="p-4 bg-white rounded-lg shadow m-4 flex flex-col items-center"
            style={{ maxWidth: '300px' }} // Limiting the width of each card
          >
            <img
              src={vote}
              alt={member.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <div className="text-center">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p>Department: {member.department}</p>
              <p>Society: {member.society}</p>
              <p>Symbol: {member.symbol}</p>
            </div>
            {/* "Cast Vote" Button */}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4">
              Cast Vote
            </button>
          </div>
          
        ))}
      </div>
    </>
  );
};
