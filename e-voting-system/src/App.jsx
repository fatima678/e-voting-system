import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import CandidatesList from "./components/CandidatesList";
import AboutUs from './components/AboutUs';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/candidatesList" element={<CandidatesList />} /> 
        <Route path="/aboutUs" element={<AboutUs />} /> 
        <Route path="/contactUs" element={<ContactUs />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
