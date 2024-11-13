import React from "react";
import useAppContext from "../../context/context";

const CardOfCars = ({ nombre, precio, img }) => {

  const{liscart,setLiscart, toastCall}= useAppContext()
  const handleOnClickCart = () =>{
    const listOfCarts = [
      ...liscart, 
      {
        nombre: nombre,
        precio: precio,
        img: img,
        desde: '01/02/2024',
        hasta: '10/02/2024',
      }
    ]

    setLiscart(listOfCarts)

    toastCall(`Vehiculo agregado al carrito`)
  }

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
            href="#"
            class="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Ver Detalles
          </a>
          <img className='cursor-pointer' src="assets\icons\carrito\anadir-al-carrito.png" width='30' onClick={()=>handleOnClickCart()} />
        </div>
      </div>
    </div>
  );
};

export default CardOfCars;
