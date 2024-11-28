import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono
import React from "react";

const Asistencia24 = () => (
  <section>
    <div className="bg-[#112D4E] text-white py-8 ">
      <div className="container mx-auto px-4 text-center">
        {/* Icono encima del título */}
        <div className="flex  justify-center mt-44"></div>
        <h1 className="text-5xl font-bold font-[Raleway, cursive] mt-[80px] sm:mt-[100px] md:mt-[-125px]">
          ASISTENCIA 24/7
        </h1>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/MasInformacion/asistencia 24-7.jpg"
            alt="Asistencia 24/7"
            className="mt-[-120px] sm:mt-[-140px] md:mt-[-30px] ml-[-40px] sm:ml-[-60px] w-full h-auto animate-fade-right animate-once animate-delay-[5ms] animate-ease-in"
          />
        </div>
        <div className="text-justify  w-full md:w-1/2 text-gray-700">
          <FontAwesomeIcon
            icon={faHeadset}
            className="h-[60px] sm:h-[50px] md:h-[70px] text-gray-700 m-0"
          />
          <p className="mt-8 w-full md:w-[95%] font-[Roboto] text-[19px] sm:text-[18px] md:text-[19px] text-[#444444]">
            <strong>Con GoDrive,</strong> nunca estarás solo en la carretera.
            Nuestro servicio de asistencia 24/7 está diseñado para brindarte
            tranquilidad y respaldo en cualquier situación, sin importar la hora
            o el lugar. Ya sea que tengas un neumático desinflado, una batería
            descargada, o te quedes sin combustible, nuestro equipo
            especializado estará listo para ayudarte de manera rápida y
            eficiente.
          </p>

          <p className="mt-8 w-full  md:w-[95%] font-[Roboto] text-[19px] sm:text-[18px] md:text-[19px] text-[#444444]">
            Además, contamos con soporte telefónico para guiarte en problemas
            menores y coordinar asistencia directa en el lugar donde te
            encuentres. Desde pequeños contratiempos hasta emergencias más
            complejas, estamos aquí para garantizar que tu experiencia con
            GoDrive sea segura y confiable.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Asistencia24;
