import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
    if (videoRef.current) videoRef.current.pause();
    if (modalVideoRef.current) modalVideoRef.current.play();
  };

  const closeModal = () => {
    setIsOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-[100vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: "url('/assets/imagenesdelabout/portada.jpg')",
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold">GoDrive</h1>
          <p className="mt-4 text-lg sm:text-2xl bg-white bg-opacity-50 p-4 rounded-md shadow-lg">
            "El lugar en donde puedes encontrar y alquilar vehículos de manera rápida y sencilla,
            te ofrece una amplia variedad de opciones para satisfacer todas tus necesidades de transporte."
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Section */}
            <div className="relative">
              <video
                ref={videoRef}
                className="cursor-pointer w-full h-auto rounded-lg shadow-md"
                muted
                onClick={openModal}
              >
                <source src="/assets/videodenosotros.mp4" type="video/mp4" />
                Su navegador no soporta la etiqueta de vídeo.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={openModal}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="text-gray-700 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">¿QUIÉNES SOMOS?</h2>
              <p className="text-lg leading-relaxed">
                <strong>GoDrive™</strong> es la principal empresa de alquiler de vehículos en todo el
                país. Gracias a nuestro compromiso de ofrecer soluciones de movilidad eficientes y
                seguras, contamos con una flotilla de vehículos especializados y la red de
                distribución más amplia y confiable del sector.
              </p>
              <p className="text-lg leading-relaxed">
                Nos enorgullece llegar a cada rincón del territorio nacional, asegurando que
                nuestros clientes tengan acceso a la mejor experiencia en alquiler.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Filosofía Empresarial</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600">
                Proveer una experiencia de alquiler de vehículos excepcional, ofreciendo una amplia
                variedad de opciones de transporte que se alinean con los más altos estándares de
                calidad y servicio al cliente.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
              <p className="text-gray-600">
                Convertirnos en la empresa líder de alquiler de vehículos a nivel nacional,
                destacando por la calidad de nuestros servicios y la satisfacción de nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Valores de la Empresa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovación",
                description:
                  "En GoDrive, transformamos la experiencia de alquiler de vehículos al integrar soluciones digitales avanzadas.",
              },
              {
                title: "Servicio",
                description:
                  "Nos comprometemos a brindar una atención excepcional, estando siempre disponibles para nuestros clientes.",
              },
              {
                title: "Compromiso",
                description:
                  "Nos dedicamos al bienestar de nuestro equipo y al desarrollo profesional de cada miembro.",
              },
              {
                title: "Integridad",
                description:
                  "Operamos con honestidad y responsabilidad, garantizando transparencia en nuestros procesos.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Video */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={handleModalClick}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
            <video
              ref={modalVideoRef}
              className="rounded-md"
              width="800px"
              height="450px"
              controls
              autoPlay
            >
              <source src="/assets/videodenosotros.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
