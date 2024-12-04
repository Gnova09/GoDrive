import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Contactos = () => {
  return (
    <section className="min-h-screen flex flex-col bg-[#3F72AF]">
      <div className="relative w-full h-screen sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-30"
          style={{
            backgroundImage: "url('/assets/imagenesdecontactos/contact.jpg')",
            filter: "contrast(15%)",
          }}
        ></div>

        <h1 className="relative text-[#112D4E] mt-[15vh] sm:mt-[10vh] md:mt-[28vh] inset-0 flex items-center justify-center font-[Roboto] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold z-10 text-shadow-md">
          <strong>Contacta con nosotros</strong>
        </h1>

        <h2 className="relative text-[#DBE2EF] mt-[5vh] sm:mt-[4vh] md:mt-[3vh] inset-0 flex items-center justify-center font-[Roboto] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold z-10 text-shadow-lg">
          <em>"Tu opinión es de suma importancia para nosotros"</em>
        </h2>
      </div>

      {/* Sección de Contactos */}
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 mx-auto text-center">
        <p className="font-medium text-white text-2xl sm:text-3xl">
          Contáctanos
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-[Roboto] font-semibold text-white">
          Tu opinión nos importa mucho
        </h1>
        <p className="mt-2 sm:mt-3 text-gray-200 text-base sm:text-lg md:text-xl dark:text-gray-400">
          <strong>Nuestro equipo siempre estará aquí para ayudarte</strong>
        </p>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Contacto para Correo Electrónico */}
          <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-xl p-6 sm:p-8 hover:scale-105 transition duration-300 transform">
            <span className="p-3 mt-2 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0l-9.75 6.75L2.25 6.75"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Correo Electrónico
            </h2>
            <p className="mt-2 text-black dark:text-gray-400 text-sm sm:text-base">
              Para informaciones y dudas, contacta con nosotros:
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              infogodrive@gmail.com
            </p>
          </div>

          {/* Contacto para Oficina */}
          <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-xl p-6 sm:p-8 hover:scale-105 transition duration-300 transform">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Oficina
            </h2>
            <p className="mt-2 text-black dark:text-gray-400 text-sm sm:text-base">
              Ven y visita nuestra oficina en:
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              Ruta 66, Salida Del Aeropuerto Las Américas
            </p>
          </div>

          {/* Contacto para Teléfono */}
          <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-xl p-6 sm:p-8 hover:scale-105 transition duration-300 transform">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Teléfonos
            </h2>
            <p className="mt-2 text-black dark:text-gray-400 text-sm sm:text-base">
              De lunes a viernes de 8:00 a.m a 5:00 p.m
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              +1 (829)-351-1104, +1 (849)-274-7601
            </p>
          </div>
        </div>

        {/* Sección de Redes Sociales con Iconos en Tarjetas Separadas */}
        <div className="mt-52">
          <p className="font-medium text-white text-4xl font-[Roboto]">
            Síguenos en nuestras redes sociales:
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tarjeta Instagram */}
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-xl p-8 hover:scale-105 transition duration-300 transform">
              <a
                href="https://www.instagram.com/godriverentacar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-pink-500 text-5xl hover:text-pink-400 transition duration-300"
                />
              </a>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Instagram
              </h2>
              <p className="mt-2 text-black dark:text-gray-400">
                Síguenos para conocer más de nosotros.
              </p>
            </div>

            {/* Tarjeta Facebook */}
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-xl p-8 hover:scale-105 transition duration-300 transform">
              <a
                href="https://www.facebook.com/profile.php?id=61568620588547"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-600 text-5xl hover:text-blue-500 transition duration-300"
                />
              </a>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Facebook
              </h2>
              <p className="mt-2 text-black dark:text-gray-400">
                Mantente al tanto de nuestras últimas noticias.
              </p>
            </div>

            {/* Tarjeta TikTok */}
            <div className="flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-xl p-8 hover:scale-105 transition duration-300 transform">
              <a
                href="https://www.tiktok.com/@godrive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-black text-5xl hover:text-green-400 transition duration-300"
                />
              </a>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                TikTok
              </h2>
              <p className="mt-2 text-black dark:text-gray-400">
                Diviértete con nuestros videos creativos.
              </p>
            </div>
          </div>
        </div>

        {/* Mapa de Ubicación Republica Dominicana */}
        <div className="m-4 px-1 mx-0 rounded mt-16">
          <div
            className="relative"
            style={{ paddingTop: "30%", marginTop: "150px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935315.5144314845!2d-71.44983599871567!3d18.667894518588717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8838def1b6f5%3A0xa6020f24060df7e0!2sRep%C3%BAblica%20Dominicana!5e0!3m2!1ses-419!2sdo!4v1733192482882!5m2!1ses-419!2sdo"
              className="absolute top-0 left-0 w-full h-full  md:h-96 rounded-lg"
              title="Mapa de ubicación de GoDrive"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
