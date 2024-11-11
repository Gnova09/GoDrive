import React from "react";

const CardOfCars = ({ nombre, precio, img }) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img class="w-full" src={img} alt={`${nombre} imagen`} />

      <div class="p-4">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">
          {nombre}
        </h5>

        <div class="flex items-center justify-between mt-2">
          <span class="text-lg font-bold text-blue-600">USD {precio}</span>
          <a
            href="/details"
            class="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Ver Detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardOfCars;
