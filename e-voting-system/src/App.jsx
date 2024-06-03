import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import CandidateProfile from './components/CandidateProfile';
import CandidateRegistration from './components/CandidateRegistration';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  const noNavBarRoutes = ["/", "/candidateRegistration", "/login"];
  const shouldShowNavBar = !noNavBarRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {shouldShowNavBar && <Navbar />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/candidateRegistration" element={<CandidateRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/aboutUs" element={<AboutUs />} /> 
        <Route path="/contactUs" element={<ContactUs />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/profile/:id" element={<CandidateProfile />} />
      </Routes>
    </>
  );
}

export default App;
