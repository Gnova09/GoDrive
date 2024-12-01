import { useNavigate } from "react-router-dom";

const Servicios = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative sm:h-auto md:h-auto lg:h-auto bg-cover bg-center bg-no-repeat">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
          style={{
            backgroundImage:
              "url('/assets/imagenesdelabout/servicioPortdada.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1
            className="font-weight-bold mt-[50vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-1xl text-white"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Productos y Servicios de GoDrive
          </h1>
          <p className="text-justify mt-4  sm:mt-12 md:mt-16 text-white text-lg sm:text-xl md:text-1xl max-w-3xl">
            <strong>
              En GoDrive, nos comprometemos a ofrecerte una experiencia de
              alquiler de vehículos única, conveniente y flexible. Nuestra
              plataforma pone a tu alcance una amplia gama de servicios
              diseñados para hacer que tu viaje sea lo más cómodo y seguro
              posible. Desde vehículos de alta calidad hasta asistencia en
              carretera las 24 horas, cada detalle está pensado para que
              disfrutes del camino sin preocupaciones.
            </strong>
          </p>
          <p className="text-justify mt-5  sm:mt-12 md:mt-16 text-white text-lg sm:text-xl md:text-1xl max-w-3xl">
            <strong>
              Además, nuestra flota de vehículos está constantemente actualizada
              para ofrecerte lo último en tecnología, comodidad y seguridad. Ya
              sea que necesites un coche compacto para moverte por la ciudad, un
              SUV para una aventura o un vehículo de lujo para una ocasión
              especial, GoDrive tiene la opción perfecta para ti. Todos nuestros
              vehículos pasan por rigurosos controles de mantenimiento, lo que
              garantiza una conducción segura y sin sorpresas.
            </strong>
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mt-[10px] mb-10 mx-auto px-4 py-16 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-[#3F72AF] border- rounded-3 shadow-xl transform sm:transform-none hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-4">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src="/assets/imagenesdeservicios/serviciodegruas.png"
                  alt="Imagen de grúa"
                  className="w-full h-full object-cover object-center bg-gray-100"
                />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl text-center font-bold text-white mb-4">
                  Servicio de grúas a domicilio
                </h2>
                <p className="text-justify text-white mb-6">
                  Proporcionamos servicios de grúa a domicilio para asegurar que
                  tu vehículo sea transportado de manera segura y eficiente.
                  para asistencia, favor de llamar al teléfono: 829-495-3000
                </p>
              </div>
              <button
                className="bg-[#112D4E] text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-red-600 border- rounded-3 transition-colors duration-300 mt-auto"
                onClick={() => navigate("/servicios/SDetalles/grua")}
              >
                Conoce más
              </button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#3F72AF] rounded-xl shadow-xl transform sm:transform-none hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-4">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src="/assets/imagenesdeservicios/serviciospremium.png"
                  alt="Servicios Premium"
                  className="w-full h-full object-contain object-center bg-gray-100"
                />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl text-center font-bold text-white mb-4">
                  Servicios Premium
                </h2>
                <p className="text-justify text-white mb-6">
                  En GoDrive, ofrecemos una experiencia de alquiler de vehículos
                  de primer nivel con nuestra gama de Servicios Premium.
                  Diseñados para aquellos que buscan lo mejor en confort,
                  tecnología y exclusividad.
                </p>
              </div>
              <button
                className="bg-[#112D4E] text-white px-4 sm:px-6  py-2 sm:py-3 border- rounded-3 hover:bg-red-600 transition-colors duration-300 mt-auto"
                onClick={() => navigate("/servicios/SDetalles/serviciopremium")}
              >
                Conoce más
              </button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#3F72AF] rounded-xl shadow-xl transform sm:transform-none hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-4">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src="/assets/imagenesdeservicios/asistencia24-7.png"
                  alt="Asistencia 24/7"
                  className="w-full h-full object-cover object-center bg-gray-100"
                />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl text-center font-bold text-white mb-4">
                  Asistencia 24/7
                </h2>
                <p className="text-justify text-white mb-6">
                  Tu tranquilidad es nuestra prioridad. Por eso, ofrecemos
                  Asistencia 24/7 para que tu experiencia de alquiler sea lo más
                  segura y cómoda posible, sin importar hora ni lugar donde te
                  encuentres.
                </p>
              </div>
              <button
                className="bg-[#112D4E] text-white px-4 sm:px-6 py-2 sm:py-3 border- rounded-3 hover:bg-red-600 transition-colors duration-300 mt-auto"
                onClick={() => navigate("/servicios/SDetalles/asistencia")}
              >
                Conoce más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;