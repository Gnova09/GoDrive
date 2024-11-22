import { useNavigate } from "react-router-dom";

const Servicios = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/imagenesdelabout/servicioPortdada.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Productos y Servicios de Alquiler de Vehículos.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
            Obtenga más información sobre los productos que hacen que su
            experiencia de alquiler sea más fácil y divertida.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
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
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                onClick={() => navigate("/servicios/SDetalles/grua")}
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
                  Descubra nuestra gama de servicios premium para una experiencia de
                  alquiler superior.
                </p>
              </div>
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                onClick={() => navigate("/servicios/SDetalles/serviciopremium")}
                
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
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 mt-auto"
                onClick={() => navigate("/servicios/SDetalles/asistencia")}
              >
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
