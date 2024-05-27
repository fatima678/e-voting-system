import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import CandidatesList from "./components/CandidatesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/candidatesList" element={<CandidatesList />} /> 
      </Routes>
    </Router>
  );
}

export default App;
