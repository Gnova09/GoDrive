import React from "react";
import { useNavigate } from "react-router-dom";

const Servicios = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-xl flex flex-col h-full">
            <div className="p-4">
              <img 
                src="/assets/Serviciodegruas.png" 
                alt="Protecciones y coberturas"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="p-8 flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Servicio de grúas</h2>
              <p className="text-gray-600 mb-6">Avis ofrece varias protecciones y coberturas...</p>
              <button
                onClick={() => navigate("/servicios/grua")}
                className="bg-red-500 text-white px-6 py-2 rounded-full"
              >
                Más información
              </button>
            </div>
          </div>

          {/* Repetir para cada servicio */}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
