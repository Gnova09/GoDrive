import React, { useState } from 'react';
import useAppContext from '../../context/context';

const Details = () => {
  /* const car = {
    nombre: 'Toyota Corolla 2020',
    precio: 50,
    img: [
      '/assets/carsImgenes/Toyota corolla 2020/Corolla Main.webp',
      '/assets/carsImgenes/Toyota corolla 2020/Corolla 2.webp',
      '/assets/carsImgenes/Toyota corolla 2020/Corolla 3.webp',
      '/assets/carsImgenes/Toyota corolla 2020/Corolla 4.webp',
      '/assets/carsImgenes/Toyota corolla 2020/Corolla 5.webp',
      '/assets/carsImgenes/Toyota corolla 2020/Corolla 6.webp',
      '/assets/carsImgenes/Toyota corolla 2020/Corolla 7.webp',
      '/assets/carsImgenes/Toyota corolla 2020/Corolla 8.webp'
    ],
    modelo: 'Corolla',
    marca: 'Toyota',
    anio: '2020',
    combustible: 'gasolina',
    descripcion:
      'El Toyota Corolla 2020 es un sedán compacto conocido por su confiabilidad, eficiencia de combustible y tecnología de seguridad avanzada. Con un diseño moderno y un interior cómodo, ofrece una experiencia de conducción suave y económica, ideal tanto para ciudad como para carretera. Está equipado con características como Toyota Safety Sense, pantalla táctil, compatibilidad con Apple CarPlay y Android Auto, y opciones de motorización híbrida o de gasolina.',
  }; */

  const [selectedImage, setSelectedImage] = useState(0);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const {liscart,setLiscart,toastCall, detailCar } = useAppContext()

  const car = detailCar

  console.log(car)

  const handleNext = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % car.img.length);
  };

  const handleReservar = () => {
    if (dateFrom !== "" && dateTo !== "") {
      const list = liscart.filter(carlist => carlist.nombre !== car.nombre)
      const listOfCarts = [
        ...list,
        {
          nombre: car.nombre,
          precio: car.precio,
          img: car.img.lenght >0 ? car.img[0] : [],
          desde: dateFrom,
          hasta: dateTo,
        }
      ]
      setLiscart(listOfCarts);
      toastCall(` ${car.nombre} agregado al carrito`);
    } else {
      toastCall(`Debe indicar una fecha`);
    }
  }

  const handlePrev = () => {
    setSelectedImage((prevIndex) => (prevIndex - 1 + car.img.length) % car.img.length);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Título y Precio del Carro */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{car.nombre}</h1>
        <span className="text-xl font-semibold text-orange-500">US$ {car.precio}</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Carrusel de imágenes con miniaturas y navegación */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <img
              src={`data:image/jpeg;base64,${car.img[selectedImage]}`}
              className="absolute block w-full h-full object-cover"
              alt={`Imagen ${selectedImage + 1}`}
            />
            <button
              onClick={handlePrev}
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {car.img.map((thumbnail, index) => (
              <img
                key={index}
                src={`data:image/jpeg;base64,${thumbnail}`}
                alt={`Miniatura ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer rounded-lg ${index === selectedImage ? 'ring-2 ring-orange-500' : ''
                  }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg mt-4 lg:mt-0 lg:mb-4 lg:mr-4 min-h-[350px]">
          <div>
            <h2 className="text-lg font-semibold mb-2">Detalles del Vehículo</h2>
            <p><strong>Marca:</strong> {car?.marca}</p>
            <p><strong>Modelo:</strong> {car?.modelo}</p>
            <p><strong>Año:</strong> {car.anio}</p>
            <p className="text-justify mt-2">
              <strong>Descripción:</strong> {car?.descripcion}
            </p>
          </div>
        </div>
      </div>

      {/* Formulario de Reservación */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-lg font-semibold mb-4">Reservar este Vehículo</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Nombres" className="border border-gray-300 p-2 rounded" />
            <input type="text" placeholder="Apellidos" className="border border-gray-300 p-2 rounded" />
            <input type="text" placeholder="WhatsApp" className="border border-gray-300 p-2 rounded" />
            <input type="text" placeholder="Móvil Alternativo" className="border border-gray-300 p-2 rounded" />
            <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
            <input type="text" placeholder="Dirección" className="border border-gray-300 p-2 rounded" />
            <input type="text" placeholder="País" className="border border-gray-300 p-2 rounded" />
            <select className="border border-gray-300 p-2 rounded">
              <option>Aeropuerto Cibao (STI)</option>
              <option>Aeropuerto Internacional Las Américas (SDQ)</option>
              <option>Aeropuerto Puerto Plata (POP)</option>
              <option>Aeropuerto La Romana (LRM)</option>
              <option>Aeropuerto Punta Cana (PUJ)</option>
              <option>Aeropuerto La Isabela (JBQ)</option>
            </select>
            <input type="date" placeholder="Fecha inicio" onChange={(e) => { setDateFrom(e.target.value) }} className="border border-gray-300 p-2 rounded" />
            <input type="date" placeholder="Fecha retorno" onChange={(e) => { setDateTo(e.target.value) }} className="border border-gray-300 p-2 rounded" />
            <input type="text" placeholder="Aerolínea" className="border border-gray-300 p-2 rounded" />
            <input type="text" placeholder="No. Vuelo" className="border border-gray-300 p-2 rounded" />
          </div>
          <button type="button" onClick={() => { handleReservar() }} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Reservar
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-6 text-center mt-8">
        <div className="flex flex-col items-center">
          <img src="/assets/carsImgenes/seguridad.png" alt="Seguridad" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">SEGURIDAD</h3>
          <p>Sus datos financieros no se comparten con el vendedor.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/carsImgenes/proteccion.png" alt="Protección" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">PROTECCIÓN</h3>
          <p>Sus pagos están protegidos por el programa de protección del comprador.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/carsImgenes/rapidez.png" alt="Rapidez" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">RAPIDEZ</h3>
          <p>Recibimos y verificamos su pago instantáneamente.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/carsImgenes/flexibilidad.png" alt="Flexibilidad" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">FLEXIBILIDAD</h3>
          <p>Usted elige cómo pagar: tarjeta, cuenta bancaria o saldo de Paypal.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/carsImgenes/comodidad.png" alt="Comodidad" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">COMODIDAD</h3>
          <p>Pague en 2 clics. No tendrá que introducir sus datos en cada compra.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/carsImgenes/multimonedas.png" alt="Multimonedas" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">MULTIMONEDAS</h3>
          <p>Paypal acepta más de 24 monedas de circulación mundial.</p>
        </div>
      </div>
    </div>
  );
};

export default Details;