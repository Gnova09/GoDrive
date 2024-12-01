import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono que quieres usar

const ServiciosPremium = () => (
  <section>
    <div className="bg-[#112D4E] text-white py-8 ">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mt-44">
          <FontAwesomeIcon icon="faHandshakeAngle" className="text-4xl" />
        </div>
        <h1 className="text-5xl font-bold font-[Raleway, cursive] mt-10 sm:mt-12 lg:mt-[-125px]">
          SERVICIOS PREMIUM
        </h1>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex flex-col sm:flex-col md:flex-row items-center gap-6 sm:gap-4 md:gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/MasInformacion/servicios-premium.jpg"
            alt="Servicios Premium"
            className="mt-[-120px] sm:mt-[140px] md:mt-[-410px] ml-[40px] sm:ml-[-60px] w-full h-auto animate-fade-right animate-once animate-delay-[5ms] animate-ease-in"
          />
        </div>
        <div className="text-justify  w-full md:w-1/2 text-gray-700">
          <FontAwesomeIcon
            icon={faHandshakeAngle}
            className="h-[60px] sm:h-[50px] md:h-[70px] text-gray-700 m-0"
          />

          <p className="mt-8 w-full md:w-[95%] font-[Roboto] text-[16px] sm:text-[18px] md:text-[19px] text-[#444444]">
            <strong>GoDrive Premium</strong> lleva el alquiler de vehículos a un
            nuevo nivel, ofreciendo soluciones exclusivas para quienes valoran
            la comodidad, el estilo y la eficiencia en cada trayecto. Nuestro
            servicio premium no solo se trata de alquilar un vehículo, sino de
            ofrecer una experiencia personalizada desde el primer momento.
          </p>

          <p className="mt-8 w-full md:w-[95%] font-[Roboto] text-[19px] sm:text-[18px] md:text-[19px] text-[#444444]">
            <strong>
              Además, tendrás acceso a características únicas como:
            </strong>

            <ul class="ml-4 list-disc  space-y-4 mt-4 text-gray-700 sm:ml-6 md:ml-8">
              <li>
                <strong>Vehículos personalizados:</strong> Elija entre opciones
                de equipamiento adicional, como asientos de cuero climatizados,
                sistemas de sonido envolvente y configuraciones para necesidades
                específicas, como espacio extra para equipaje o transporte
                familiar.
              </li>
              <li>
                <strong>Conductor privado:</strong> ¿Prefiere relajarse mientras
                alguien más conduce? Nuestro servicio de chófer privado está
                disponible para garantizarle un viaje sin preocupaciones.
              </li>
              <li>
                <strong>Reservas prioritarias:</strong> Evite largas esperas y
                asegúrese de que el vehículo que necesita esté siempre
                disponible gracias a nuestro sistema de reservas exclusivo para
                clientes premium.
              </li>
              <li>
                <strong>Atención VIP:</strong> Un gestor personal estará
                disponible para responder sus preguntas, gestionar cambios de
                última hora y garantizar que su experiencia sea perfecta.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServiciosPremium;
