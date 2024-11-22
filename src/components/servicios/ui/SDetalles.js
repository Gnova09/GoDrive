import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ServicioGruas from '../ServicioGruas';
import ServiciosPremium from '../ServiciosPremium';
import Asistencia24 from '../Asistencia24';

export const SDetalles = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la ubicación actual

  // Redirigir a "/servicios" si la ruta es exactamente "/servicios/SDetalles"
  useEffect(() => {
    if (location.pathname === '/servicios/SDetalles') {
      navigate('/servicios'); // Redirige a /servicios
    }
  }, [location, navigate]);

  // Función para recargar la página después de navegar
  const handleNavigateAndReload = (path) => {
    navigate(path); // Navega a la nueva ruta
    window.location.reload(); // Recarga la página para "reiniciar" el contenido
  };

  return (
    <div>
      {/* Mostrar ServicioGruas solo si la ruta es '/servicios/SDetalles/grua' */}
      {location.pathname === '/servicios/SDetalles/grua' && <ServicioGruas />}
      
      {/* Mostrar Asistencia24 solo si la ruta es '/servicios/SDetalles/asistencia' */}
      {location.pathname === '/servicios/SDetalles/asistencia' && <Asistencia24 />}
      
      {/* Mostrar ServiciosPremium solo si la ruta es '/servicios/SDetalles/serviciopremium' */}
      {location.pathname === '/servicios/SDetalles/serviciopremium' && <ServiciosPremium />}

      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Services Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full">
              <div className="p-4">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src="/assets/Serviciodegruas.png"
                    alt="Protecciones y coberturas"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Servicio de gruas
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Avis ofrece varias protecciones y coberturas que le mantendrán
                    protegido durante su alquiler.
                  </p>
                </div>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                   onClick={() => handleNavigateAndReload("/servicios/SDetalles/grua")}
                >
                  Más información
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full">
              <div className="p-4">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src="/assets/Servicios premium.jpg"
                    alt="Servicios Premium"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Servicios Premium
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Descubra nuestra gama de servicios premium para una
                    experiencia de alquiler superior.
                  </p>
                </div>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                  onClick={() => handleNavigateAndReload("/servicios/SDetalles/serviciopremium")}
                >
                  Más información
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full">
              <div className="p-4">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src="/assets/Asistencia 24 7.jpg"
                    alt="Asistencia 24/7"
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Asistencia 24/7
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Servicio de asistencia disponible las 24 horas para su
                    tranquilidad.
                  </p>
                </div>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                  onClick={() => handleNavigateAndReload("/servicios/SDetalles/asistencia")}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDetalles;
