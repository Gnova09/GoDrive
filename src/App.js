import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Home } from './pages/home/Home';
import { Register } from './pages/Register/Register';
import About from './pages/about/About';
import Navbar from './components/nav/navbar';

function App() {
  // Hook para obtener la ruta actual
  const location = useLocation();

  return (
    <>
      {/* Condiciona que el Navbar no se muestre en la ruta de login */}
      {location.pathname == '/login' || location.pathname == '/register' ? '': <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}