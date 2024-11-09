/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (modalVideoRef.current) {
      modalVideoRef.current.play(); // Reproducir el video en el modal
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[120vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/imagenesdelabout/portada.jpg')",
            filter: "blur(4px)",
          }}
        ></div>

        {/* Contenedor del contenido encima de la imagen */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <h1
            className="text-white text-8xl font-bold mt-3 mx-4"
            style={{
              fontFamily: "DINCond",
              transform: "rotate(18deg)",
              letterSpacing: "15px",
              position: "relative",
              top: "-25px",
              left: "460px",
            }}
          >
            GoDrive
          </h1>

          <div className="bg-white bg-opacity-50 p-1 rounded-lg mx-3 mt-40 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <p
              className="text-black text-2xl font-semibold text-center"
              style={{
                fontFamily: "Playfair Display",
                lineHeight: "1.6",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              "El lugar en donde puedes encontrar y alquilar vehículos de manera
              rápida y sencilla, te ofrece una amplia variedad de opciones para
              satisfacer todas tus necesidades de transporte."
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor para el video y el texto */}
      <div className="flex items-start justify-start ml-10">
        <div className="relative" style={{ marginTop: "180px" }}>
          <video
            ref={videoRef}
            className="cursor-pointer"
            width="640px"
            height="480px"
            muted
            onClick={openModal}
          >
            <source src="/assets/videodenosotros.mp4" type="video/mp4" />
            Su navegador no soporta la etiqueta de vídeo.
          </video>

          {/* Icono SVG de play dentro del video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-white cursor-pointer"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={openModal} // Aqui se llama al openModal al hacer clic en el ícono SVG
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="ml-8 self-center h-[300px]">
          <h3
            className="text-3xl font-bold"
            style={{
              fontFamily: "DINCond",
              color: "#112D4E",
              fontSize: "3rem",
            }}
          >
            ¿ QUIÉNES SOMOS ?
          </h3>

          <div
            className="p-6 mt-4"
            style={{
              height: "430px",
              width: "600px",
              marginLeft: "-2px",
              backgroundColor: "#DBE2EF",
            }}
          >
            <p
              className="mt-4 text-xl text-black align-item-center text-justify"
              style={{ fontFamily: "Moderustic, sans-serif" }}
            >
              <strong>GoDrive™</strong> es la principal empresa de alquiler de
              vehículos en todo el país. Gracias a nuestro compromiso de ofrecer
              soluciones de movilidad eficientes y seguras, contamos con una
              flotilla de vehículos especializados y la red de distribución más
              amplia y confiable del sector.
              <br />
              <br />
              Nos enorgullece llegar a cada rincón del territorio nacional,
              asegurando que nuestros clientes tengan acceso a la mejor
              experiencia en alquiler.
            </p>
          </div>
        </div>
      </div>

      {/* Espacio en blanco entre la imagen de fondo y el footer */}
      <div
        className="mb-20"
        style={{ height: "1850px", width: "1270px" }}
      ></div>

      <div className="flex justify-center mb-20">
        <div
          className="bg-[#DBE2EF] p-8"
          style={{
            width: "1270px",
            height: "1015px",
            marginTop: "-1860px",
          }}
        >
          <h2
            className="text-4xl font-bold text-left"
            style={{
              marginBottom: "20px",
              fontFamily: "DINCond",
              color: "#112D4E",
            }}
          >
            FILOSOFÍA EMPRESARIAL
          </h2>

          <div className="flex space-x-8">
            {/* Primer Card */}
            <div
              className="bg-white p-6   shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300       mb-4 flex items-stretch"
              style={{ height: "40vh", width: "600px" }}
            >
              <img
                src="/assets/imagenesdelabout/Misión.png"
                alt="Imagen acerca de la misión"
                className="w-25 h-35 object-cover"
              />
              <div className="flex flex-col justify-center ml-4">
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "DINCond",
                    height: "150px",
                    width: "auto",
                    color: "#112D4E",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  Nuestra Misión
                </h3>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: "20px",
                    color: "#112D4E",
                    textAlign: "justify",
                  }}
                >
                  Proveer una experiencia de alquiler de vehículos excepcional,
                  ofreciendo una amplia variedad de opciones de transporte que
                  se alinean con los más altos estándares de calidad y servicio
                  al cliente.
                </p>
              </div>
            </div>

            {/* Segundo Card */}
            <div
              className="bg-white p-6  shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 mb-4 flex items-stretch"
              style={{ height: "40vh", width: "600px" }}
            >
              <img
                src="/assets/imagenesdelabout/Visión.png"
                alt="Imagen acerca de la visión"
                className="w-25 h-35 object-cover"
              />
              <div className="flex flex-col justify-center ml-4">
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "DINCond",
                    height: "150px",
                    width: "auto",
                    color: "#112D4D",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  Nuestra Visión
                </h3>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: "20px",
                    color: "#112D4E",
                    textAlign: "justify",
                  }}
                >
                  Convertirnos en la empresa líder de alquiler de vehículos a
                  nivel nacional, destacando por la calidad de nuestros
                  servicios y la satisfacción de nuestros clientes.
                </p>
              </div>
            </div>
          </div>

          <h2
            className="text-4xl font-bold text-left"
            style={{
              marginBottom: "20px",
              marginTop: "70px",
              fontFamily: "DINCond",
              color: "#112D4E",
            }}
          >
            VALORES DE LA EMPRESA
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {" "}
            <div className="bg-white p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-bold">INNOVACIÓN</h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "20px",
                  color: "#112D4E",
                  textAlign: "justify",
                }}
              >
                En Godrive, transformamos la experiencia de alquiler de
                vehículos al integrar soluciones digitales que simplifican el
                proceso de reserva y entrega. Nuestra plataforma utiliza
                tecnología avanzada para garantizar un servicio ágil y
                eficiente, permitiendo a nuestros clientes acceder a una flota
                de vehículos de cálidad con un solo click.
              </p>
            </div>
            <div className="bg-white p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-bold">SERVICIO</h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "20px",
                  color: "#112D4E",
                  textAlign: "justify",
                }}
              >
                En Godrive, nos comprometemos a brindar uan atención
                excepcional, estando siempre disponibles para escuchar y
                comprender las necesidades de nuestros clientes.
              </p>
            </div>
            <div className="bg-white p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-bold">COMPROMISO</h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "20px",
                  color: "#112D4E",
                  textAlign: "justify",
                }}
              >
                Estamos dedicados al bienestar de nuestro equipo y al desarrollo
                profesional de cada miembro. Nos comprometemos a superar las
                expectativas de nuestros clientes al ofrecer vehículos y
                servicios de calidad.
              </p>
            </div>
            <div className="bg-white p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-2xl font-bold">INTEGRIDAD</h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "20px",
                  color: "#112D4E",
                  textAlign: "justify",
                }}
              >
                Operamos con honestidad y responsabilidad en cada interacción.
                Nos comprometemos a servir a nuestros clientes con lealtad,
                garantizando transparencia en nuestros procesos y ofreciendo
                vehículos que cumplen con los más altos estándares de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para el video */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={handleModalClick}
        >
          <div className="relative">
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-transparent border-0 text-black text-3xl"
              style={{
                zIndex: 60,
                backgroundColor: "transparent",
              }}
            >
              &times;
            </button>

            <video
              ref={modalVideoRef}
              className="rounded-md"
              width="800px"
              height="450px"
              controls
              autoPlay // utilice autoplay para que el video se autoreproduzca al abrir el modal
              onClick={(e) => e.stopPropagation()} // Para evitar que el modal se cierre al hacer clic en el video
            >
              <source src="/assets/videodenosotros.mp4" type="video/mp4" />
              Su navegador no soporta la etiqueta de vídeo.
            </video>
          </div>
        </div>
      )}

      {/* Contenedor de los cards del equipo de desarrollo */}
      <div className="contenedordelascards">
        <div
          className="bg-white text-black p-4"
          style={{
            width: "1270px",
            height: "2240px",
            position: "relative",
            top: "-750px",
            right: "-40px",
            border: "1px solid #e7e7e9", 
          }}
        >
          <h1
            className="text-5xl font-bold text-center"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#112D4E", 
            }}
          >
            Nuestro equipo de desarrollo
          </h1>
          <p
            className="mt-5 text-justify"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "20px",
              color: "#3F72AF",
            }}
          >
            Somos un equipo dinámico y comprometido de profesionales apasionados
            por el desarrollo de software. Nos esforzamos por ofrecer soluciones
            innovadoras y efectivas que cumplan con los más altos estándares de
            calidad, siempre enfocados en superar las expectativas de nuestros
            clientes.
          </p>

          {/* Titulo para saber de que equipo es cada grupo */}
          <h2
            className="text-3xl font-bold text-center mt-8"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#112D4E", 
              position: "relative",
              top: "70px", 
              text: "center",
            }}
          >
            FRONT-END DEVELOPERS:
          </h2>

          {/* Primer Card */}
          <div className="relative">
            <figure
              className="md:flex rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300"
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "80px",
                left: "0px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona1.jpeg"
                alt="imagen de la persona 1"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    “Saludos, mi nombre es Georges Bueno, cuento con experiencia
                    en tanto en Front-End como en Back-End, támbien en el área
                    de integraciones multiplataformas."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Georges Miguel Bueno Nova
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    Desarrollador Staff, Santo Domingo
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Segundo Card */}
          <div className="relative">
            <figure
              className="md:flex  rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300" // Añadido hover:bg-blue-500
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "-200px",
                left: "620px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona2.png"
                alt="imagen de la persona 2"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    “Soy un desarrolador front-End, especializado construir
                    interfaces de usuario atractivas y funcionales para los
                    consumidores."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Hermes Rafael Mateo Peña
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    Desarrollador Front-End, Santo Domingo
                  </div>
                </figcaption>

                {/* Iconos de redes sociales debajo del texto */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.facebook.com/hermesrafael.mateopena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.tiktok.com/@hermesm7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>

          {/* Tercero Card */}
          <div className="relative">
            <figure
              className="md:flex  rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300" // Añadido hover:bg-blue-500
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "50px",
                left: "0px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona3.jpeg"
                alt="imagen de la persona 3"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    “Soy un desarrollador Front-End dedicado a transformar ideas
                    en experiencias interactivas a través del diseño y la
                    programación."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Fernando Brayan Juliao De Los Santos
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    Desarrollador Front-End, Santo Domingo
                  </div>
                </figcaption>

                {/* Iconos de redes sociales debajo del texto */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/tnlgo.brayan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/brayan.juliao.98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@brxyan_23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>

          {/* Cuarto Card */}
          <div className="relative">
            <figure
              className="md:flex  rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300" // Añadido hover:bg-blue-500
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "-230px",
                left: "620px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona4.jpeg"
                alt="imagen de la persona 4"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    “Soy desarrollador Front-End, apasionado por crear sistemas
                    robustos y eficientes que impulsen aplicaciones digitales y
                    funcionales."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Angel Bienvenido Peynado Perez
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    Desarrallador Front-End, Santo Domingo
                  </div>
                </figcaption>

                {/* Iconos de redes sociales debajo del texto */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/angelpeynado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>

          <h2
            className="text-3xl font-bold text-center mt-8"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "#112D4E", 
              position: "relative",
              top: "-20px",
              text: "center",
            }}
          >
            BACK-END DEVELOPERS & QA:
          </h2>

          {/* Quinto Card */}
          <div className="relative">
            <figure
              className="md:flex  rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300" // Añadido hover:bg-blue-500
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "-0px",
                left: "0px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona5.jpeg"
                alt="imagen de la persona 5"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    “Soy un desarrollador Back-End especializado en la
                    construcción de APIs, la gestión de base de datos y la
                    implementación de la lógica del servidor."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Luis Ángel Lachapel Acevedo
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    Desarrollador Back-End, Santo Domingo
                  </div>
                </figcaption>

                {/* Iconos de redes sociales debajo del texto */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>

          {/* Sexto Card */}
          <div className="relative">
            <figure
              className="md:flex  rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300" // Añadido hover:bg-blue-500
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "-280px",
                left: "620px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona6.jpeg"
                alt="imagen de la persona 6"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    “Hola, soy fraylian, y en mi rol actual, me encargo de
                    gestión de APIs RESTfull y la optimización de procesos a
                    través de la implemantación de servicios internos."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Fraylian Alejandro Soto Garcia
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    Desarrollador Back-End, Santo Domingo
                  </div>
                </figcaption>

                {/* Iconos de redes sociales debajo del texto */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/fraylian_soto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.tiktok.com/@frayuser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>

          {/* Septimo Card */}
          <div className="relative">
            <figure
              className="md:flex  rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300" // Añadido hover:bg-blue-500
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "-70px",
                left: "0px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona7.jpg"
                alt="imagen de la persona 7"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    “Buenas, soy yanser, y mi enfoque actual está en construir
                    aplicaciones sólidas y eficientes, trabajando en la lógica,
                    y la estructura de datos."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Yanser Manuel Nuñez Rodríguez
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    Desarrollador Back-End, Santo Domingo
                  </div>
                </figcaption>

                {/* Iconos de redes sociales debajo del texto */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/yansernr_07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>

          {/* Octavo Card */}
          <div className="relative">
            <figure
              className="md:flex  rounded-none mt-5 p-8 md:p-0 dark:bg-slate-800 border border-gray-300 hover:bg-blue-100 hover:shadow-2xl transition-transform duration-300" // Añadido hover:bg-blue-500
              style={{
                width: "600px",
                height: "230px",
                position: "relative",
                top: "-350px",
                left: "620px",
              }}
            >
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/assets/imagenesdelabout/persona8.jpeg"
                alt="imagen de la persona 8"
              />
              <div className="pt-6 md:p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-gray-700 text-justify">
                    "Saludos, que tal, soy especializada en aseguramiento de
                    calidad (QA) apasionada por el buen funcionamiento y la
                    excelencia en la calidad del software."
                  </p>
                </blockquote>
                <figcaption className="font-medium text-left">
                  <div className="text-sky-500 dark:text-sky-400 text-justify">
                    Lisheynny Mishely Holguin Almonte
                  </div>
                  <div className="text-slate-700 dark:text-slate-500 text-justify">
                    QA, Santiago
                  </div>
                </figcaption>

                {/* Iconos de redes sociales debajo del texto */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/lisheynny/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/lisheinny.holguin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@lisheynnyholguin3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      size="lg"
                      style={{
                        height: "18px",
                        width: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <></>
    </div>
  );
};

export default About;
