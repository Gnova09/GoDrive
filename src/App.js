import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<div></div>} />
      <Route path="/contact" element={<div></div>} />
    </Routes>
  </Router>
  );
}

export default App;
