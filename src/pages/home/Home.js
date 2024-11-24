import React, { useEffect } from 'react'
import CardOfCars from '../../components/home/cardOfCars'
import Features from '../../components/home/feature'
import useAppContext from '../../context/context'
import Mapa from '../../components/maps/mapa'
import Sidebar from '../../components/Sidebar/Sidebar';

export const Home = () => {

  const { cars, setCars, GetVehiculos } = useAppContext()

  const obtenervehiculos = async () => {

    try {
      const vehiculos = await GetVehiculos(); // Asegúrate de que GetVehiculos sea una función asíncrona.
      setCars(vehiculos);
    } catch (error) {
      console.error('Error fetching vehiculos:', error);
    }
  }
  useEffect(() => {
    obtenervehiculos()
  }, [])

  return (
    <div className=' border border-gray-400 mx-20  p-0'>

      <div className='flex h-full  justify-center items-center'>
        {/* Imagen de portada  */}

        <div className="relative">
          <img
            src="/assets/carsImgenes/Portada.jpg"
            className='w-full h-screen object-cover'
            alt="imagen general de un vehiculo"
          />

          <div className="absolute inset-0 flex items-center justify-start pl-10 z-10">
            <h1 className="text-white text-4xl font-bold">¡Donde tu viaje empieza con confianza!</h1>
          </div>
        </div>

      </div>
      <div className='flex flex-row '>

        <Sidebar />
        <div class="grid w-full items-center ml-3 justify-center grid-cols-3 gap-4 pt-2">
          {
            cars.length > 0 ?
              cars.map((carro) => {
                const carroClean = {
                  img: carro.imagenes,
                  precio: carro.costo_por_dia,
                  nombre: `${carro.marca} ${carro.modelo} ${carro.year}`,
                  descripcion: carro.descripcion,
                  anio:carro.year,
                  modelo: carro.modelo,
                  marca: carro.marca
                }
                return <CardOfCars carro={carroClean} />
              }) :
              <h1>Cargando vehiculo</h1>
          }

        </div>
      </div>

      <Features />

      <Mapa />






    </div>
  )
}