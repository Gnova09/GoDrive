import React from 'react'
import CardOfCars from '../../components/home/cardOfCars'
import Features from '../../components/home/feature'
import useAppContext from '../../context/context'
import Mapa from '../../components/maps/mapa'

export const Home = () => {

  const { cars } = useAppContext()
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

      <div class="grid items-center justify-center grid-cols-3 gap-4 pt-2">
        {
          cars.map((carro) => {
            return <CardOfCars carro={carro}  />
          })
        }

      </div>

      <Features />

      <Mapa />

      
    </div>
  )
}
