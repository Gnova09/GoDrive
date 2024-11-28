import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServicioGruas from "../ServicioGruas";
import ServiciosPremium from "../ServiciosPremium";
import Asistencia24 from "../Asistencia24";

export const SDetalles = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la ubicación actual

  // Redirigir a "/servicios" si la ruta es exactamente "/servicios/SDetalles"
  useEffect(() => {
    if (location.pathname === "/servicios/SDetalles") {
      navigate("/servicios"); // Redirige a /servicios
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
      {location.pathname === "/servicios/SDetalles/grua" && <ServicioGruas />}

      {/* Mostrar Asistencia24 solo si la ruta es '/servicios/SDetalles/asistencia' */}
      {location.pathname === "/servicios/SDetalles/asistencia" && (
        <Asistencia24 />
      )}

      {/* Mostrar ServiciosPremium solo si la ruta es '/servicios/SDetalles/serviciopremium' */}
      {location.pathname === "/servicios/SDetalles/serviciopremium" && (
        <ServiciosPremium />
      )}

      <section className="h-screen  relative mb-10  mt-[60px] from-gray-900 to-gray-800">
        {/* Services Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 2 */}
            <div className="bg-[#3F72AF]   border- rounded-3  mt-[-50px] mb-14 shadow-xl transform hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full ">
              <div className="p-4">
                <div className="w-full h-48  overflow-hidden">
                  <img
                    src="/assets/imagenesdeservicios/serviciospremium.png"
                    alt="Servicios Premium"
                    className="w-full h-full border- rounded-3 object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-center text-2xl font-bold text-white mb-4">
                    Servicios Premium
                  </h2>
                  <p className="text-justify text-white mb-6">
                    En GoDrive, ofrecemos una experiencia de alquiler de
                    vehículos de primer nivel con nuestra gama de Servicios
                    Premium. Diseñados para aquellos que buscan lo mejor en
                    confort, tecnología y exclusividad.
                  </p>
                </div>
                <button
                  className="bg-[#112D4E] border- rounded-3 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                  onClick={() =>
                    handleNavigateAndReload(
                      "/servicios/SDetalles/serviciopremium"
                    )
                  }
                >
                  Conoce más
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-[#3F72AF] border- rounded-3 mt-[-50px]   shadow-xl transform hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full">
              <div className="p-4">
                <div className="w-full h-48  overflow-hidden">
                  <img
                    src="/assets/imagenesdeservicios/asistencia24-7.png"
                    alt="Asistencia 24/7"
                    className="w-full h-full border- rounded-3 object-contain bg-gray-100"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-center text-2xl font-bold text-white mb-4">
                    Asistencia 24/7
                  </h2>
                  <p className="text-justify text-white mb-6">
                    Tu tranquilidad es nuestra prioridad. Por eso, ofrecemos
                    Asistencia 24/7 para que tu experiencia de alquiler sea lo
                    más segura y cómoda posible, sin importar hora ni lugar
                    donde te encuentres.
                  </p>
                </div>
                <button
                  className="bg-[#112D4E] border- rounded-3 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                  onClick={() =>
                    handleNavigateAndReload("/servicios/SDetalles/asistencia")
                  }
                >
                  Conoce más
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


