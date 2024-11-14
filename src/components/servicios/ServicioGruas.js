import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono
import React from 'react';

const ServicioGruas = () => (
  <section>
    <div className="bg-red-700 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Icono encima del título */}
        <div className="flex justify-center mb-2">
        </div>
        <h1 className="text-3xl font-bold">Servicio de grúas</h1>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/MasInformacion/CARRO-EN-GRUA.jpg"
            alt="Imagen de grúa"
            className="w-full h-auto rounded-md animate-fade-right animate-once animate-delay-[5ms] animate-ease-in"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <FontAwesomeIcon icon={faCar} className="text-6xl text-gray-700 m-3" />
          <p className="mb-4">
            Nuestro servicio de grúas está disponible las 24 horas del día, los
            7 días de la semana, para garantizar que, ante cualquier
            inconveniente en carretera, usted reciba asistencia rápida y
            profesional. Este servicio cubre remolque del vehículo a la
            ubicación de su preferencia o al taller más cercano en caso de
            averías o accidentes, brindándole tranquilidad y soporte en
            cualquier situación inesperada. Además, el equipo especializado de
            grúas está capacitado para resolver incidentes con seguridad y
            cuidado, asegurando que su experiencia sea lo más fluida posible.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicioGruas;
