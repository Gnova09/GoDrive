import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Filtrar vehículo</h2>

      <div className="mb-4">
        <label className="text-gray-700 font-semibold">Marca</label>
        <select className="mt-2 w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Seleccione una marca</option>
          <option>Audi</option>
          <option>Chevrolet</option>
          <option>Ford</option>
          <option>Honda</option>
          <option>Hyundai</option>
          <option>Jeep</option>
          <option>Kia</option>
          <option>Lexus</option>
          <option>Mazda</option>
          <option>Mercedes Benz</option>
          <option>Nissan</option>
          <option>Porsche</option>
          <option>Ram</option>
          <option>Toyota</option>
          <option>Volkswagen</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-semibold">Modelo</label>
        <select className="mt-2 w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Seleccione un modelo</option>
          <option>Q7</option>
          <option>Camaro</option>
          <option>Corvette</option>
          <option>Focus</option>
          <option>Mustang</option>
          <option>Ranger</option>
          <option>Raptor</option>
          <option>Civic</option>
          <option>Fit</option>
          <option>Santa Fe</option>
          <option>Gladiator</option>
          <option>K5</option>
          <option>Sorento</option>
          <option>Stinger</option>
          <option>CT200h</option>
          <option>IS 350</option>
          <option>LC 500</option>
          <option>CX90</option>
          <option>3</option>
          <option>C300</option>
          <option>GLE 350</option>
          <option>Frontier</option>
          <option>Note</option>
          <option>Cayman</option>
          <option>1500</option>
          <option>Corolla</option>
          <option>Land Cruiser Prado</option>
          <option>Tundra</option>
          <option>Golf</option>
          <option>Lexus</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-semibold">Transmisión</label>
        <select className="mt-2 w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Seleccione una transmisión</option>
          <option>Manual</option>
          <option>Automática</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-semibold">Año</label>
        <select className="mt-2 w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="">Seleccione un año</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>

      <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
        Buscar vehículo
      </button>
    </div>
  );
};

export default Sidebar;