import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono
import React from 'react';

const Asistencia24 = () => (
  <section>
    <div className="bg-green-700 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Icono encima del título */}
        <div className="flex justify-center mb-2">
        </div>
        <h1 className="text-3xl font-bold">Asistencia 24/7</h1>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/Asistencia 24 7.jpg"
            alt="Asistencia 24/7"
            className="w-full h-auto rounded-md animate-fade-right animate-once animate-delay-[5ms] animate-ease-in"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <FontAwesomeIcon icon={faHeadset} className="text-6xl text-gray-700 m-3" />
          <p className="mb-4">
            Nuestro servicio de asistencia está disponible las 24 horas del día,
            los 7 días de la semana, para ofrecerle tranquilidad y soporte en
            cualquier situación. Ya sea en caso de emergencia o simplemente una
            consulta, estamos aquí para ayudarle.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Asistencia24;
