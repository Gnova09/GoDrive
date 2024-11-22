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
import SDetalles from '../src/components/servicios/ui/SDetalles';

function App() {
  const location = useLocation();
  

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/details" element={<Details />} />
        <Route path="/admin/newvehiculos" element={<Newvehiculos />} />

        <Route path="/servicios/SDetalles" element={<SDetalles />} />
        <Route path="/servicios/SDetalles/grua" element={<SDetalles />} />
        <Route path="/servicios/SDetalles/asistencia" element={<SDetalles />} />
        <Route path="/servicios/SDetalles/serviciopremium" element={<SDetalles />} />

      </Routes>
      {!hideNavbarFooter && <FooterAll />}
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