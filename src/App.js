import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { LoginAdmin } from './pages/admin/login/LoginAdmin';
import { Home } from './pages/home/Home';
import { Register } from './pages/Register/Register';
import About from './pages/about/About';
import Navbar from './components/nav/navbar';
import FooterAll from './components/footer';
import Details from './pages/details/detalles';
import Servicios from './pages/servicios/Servicios';
import Newvehiculos from './pages/newVehiculos/newvehiculos';

function App() {
  // Hook para obtener la ruta actual
  const location = useLocation();
  return (
    <>
      {/* Condiciona que el Navbar no se muestre en la ruta de login */}
      {location.pathname === '/login' || location.pathname === '/register' ||  location.pathname === "/admin/login" ? '': <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/details" element={<Details />} />
        <Route path="/admin/newvehiculos" element={<Newvehiculos />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
      </Routes>
      {location.pathname === '/login' || location.pathname === '/register' || location.pathname === "/admin/login"  ? '': <FooterAll />}
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