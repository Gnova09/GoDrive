import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckPickup } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono
import React from "react";

const ServicioGruas = () => (
  <section>
    <div className="bg-[#112D4E] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Icono encima del título */}

        <div className="flex justify-center mt-44 "></div>

        <h1 className="text-5xl font-bold font-[Raleway, cursive] mt-10 sm:mt-20 lg:mt-[-125px]">
          SERVICIO DE GRÚAS
        </h1>
      </div>
    </div>

    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/MasInformacion/CARRO-EN-GRUA.jpg"
            alt="Imagen de grúa"
            className="relative mt-[60px] sm:mt-[80px] md:mt-[-140px] ml-[-30px] sm:ml-[-40px] md:ml-[-60px] w-full h-auto object-cover object-center animate-fade-right animate-once animate-delay-[5ms] animate-ease-in"
          />
        </div>
        <div className="text-justify  w-full md:w-1/2 text-gray-700 ">
          <FontAwesomeIcon
            icon={faTruckPickup}
            className="h-[60px] sm:h-[50px] md:h-[70px] text-gray-700 m-0 flex justify-center"
          />

          <p className="mt-8 w-full md:w-[95%] font-[Roboto] text-[16px] sm:text-[18px] md:text-[19px] text-[#444444]">
            Nuestro servicio de <strong>grúas</strong> está disponible las 24
            horas del día, los 7 días de la semana, para garantizar que, ante
            cualquier inconveniente en carretera, usted reciba asistencia rápida
            y profesional. Este servicio cubre remolque del vehículo a la
            ubicación de su preferencia o al taller más cercano en caso de
            averías o accidentes, brindándole tranquilidad y soporte en
            cualquier situación inesperada.
          </p>

          <p className="mt-8 w-full md:w-[95%] font-[Roboto] text-[16px] sm:text-[18px] md:text-[19px] text-[#444444]">
            Además de nuestras capacidades de remolque, contamos con una flota
            moderna equipada con tecnología avanzada para atender diferentes
            tipos de vehículos, desde autos compactos hasta vehículos de carga
            pesada. Nuestro equipo se esfuerza por minimizar el tiempo de
            espera, garantizando que nuestros clientes reciban una solución
            eficiente en el menor tiempo posible.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicioGruas;
