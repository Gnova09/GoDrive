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
import HomeAdmin from './pages/admin/HomeAdmin';
import SidebarAdmin from './components/SidebarAdmin/SidebarAdmin';
import UsuariosAdmin from './pages/admin/usuarios/Usuarios';
import FacturaAdmin from './pages/admin/Facturas/Factura';
import Newvehiculos from './pages/admin/newVehiculos/newvehiculos';

function App() {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname.startsWith('/admin');

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

        {/* Rutas de administrador con Sidebar */}
        <Route path="/admin" element={<SidebarAdmin />}>
          <Route path="" element={<HomeAdmin />} />
          <Route path="newvehiculos" element={<Newvehiculos />} />
          <Route path="usuarios" element={<UsuariosAdmin />} />
          <Route path="facturas" element={<FacturaAdmin />} />
        </Route>

        <Route path="/admin/login" element={<LoginAdmin />} />
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