import React, { useState } from "react";
import useAppContext from "../../context/context";
import { useNavigate } from 'react-router-dom';

const CardOfCars = ({ carro }) => {
  const { liscart, setLiscart, toastCall, setdetailCar } = useAppContext();
  const navigate = useNavigate();
  const {nombre, precio, img, id} = carro

  // Estado para controlar la apertura del modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null); // Guardamos el vehículo seleccionado
  const [dateFrom, setDateFrom] = useState(""); // Fecha Desde
  const [dateTo, setDateTo] = useState(""); // Fecha Hasta

  // Función para manejar el clic en la imagen y abrir el modal
  const handleOpenModal = (car) => {
    setSelectedCar(car); // Guardamos el vehículo seleccionado
    setIsOpen(true); // Abrimos el modal
  };

  const handleDetalle = () => {

    setdetailCar(carro)
    navigate("/details")
  }


  // Función para manejar la selección de fechas
  const handleDateSelection = () => {
    if (selectedCar) {

      if (dateFrom !== "" && dateTo !== "") {

        const list = liscart.filter(car => car.nombre !== selectedCar.nombre)
        const listOfCarts = [
          ...list,
          {
            id: id ,
            nombre: nombre,
            precio: precio,
            img: img,
            desde: dateFrom,
            hasta: dateTo,
          }
        ]
        setLiscart(listOfCarts);
        setIsOpen(false); // Cerramos el modal después de seleccionar las fechas
        toastCall(` ${selectedCar.nombre} agregado al carrito`);
      } else {
        toastCall(`Debe indicar una fecha`);
      }
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full" src={`data:image/jpeg;base64,${img[0]}`} alt={`${nombre} imagen`} />

      <div className="p-4">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{nombre}</h5>

        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-blue-600">USD {precio}</span>
          <button
            onClick={() => { handleDetalle() }}
            class="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Ver Detalles
          </button>
          <img
            className="cursor-pointer"
            src="assets/icons/carrito/anadir-al-carrito.png"
            width="30"
            onClick={() => handleOpenModal({ nombre, precio, img })}
          />
        </div>
      </div>

      {/* Modal para seleccionar las fechas */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Selecciona las fechas</h2>

            {/* Fecha Desde */}
            <label htmlFor="dateFrom" className="block text-sm font-medium text-gray-700">
              Fecha Desde
            </label>
            <input
              type="date"
              id="dateFrom"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            {/* Fecha Hasta */}
            <label htmlFor="dateTo" className="block text-sm font-medium text-gray-700">
              Fecha Hasta
            </label>
            <input
              type="date"
              id="dateTo"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            {/* Botón para guardar las fechas y cerrar el modal */}
            <button
              onClick={handleDateSelection}
              className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Guardar Fechas
            </button>

            {/* Botón para cerrar el modal sin guardar */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 mt-2 text-white bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOfCars;