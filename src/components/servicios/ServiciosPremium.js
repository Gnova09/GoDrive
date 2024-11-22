import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono que quieres usar

const ServiciosPremium = () => (
  <section>
    <div className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-2">
          <FontAwesomeIcon icon="fas fa-star" className="text-4xl" />
        </div>
        <h1 className="text-3xl font-bold">Servicios Premium</h1>
      </div>
    </div>
    <div className="container mx-auto ">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/Servicios premium.jpg"
            alt="Servicios Premium"
            className="w-full h-auto rounded-md animate-fade-right animate-once animate-delay-[5ms] animate-ease-in"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
        <FontAwesomeIcon icon={faStar} className="text-6xl m-3" />
          <p className="mb-4">
            Descubra nuestra gama de servicios premium que le ofrecen una
            experiencia de alquiler superior. Desde vehículos de alta gama hasta
            servicio prioritario, estamos comprometidos en brindarle una
            experiencia sin igual.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServiciosPremium;
