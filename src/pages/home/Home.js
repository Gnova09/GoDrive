import React from 'react'
import CardOfCars from '../../components/home/cardOfCars'
import Features from '../../components/home/feature'


export const Home = () => {

  const cars= [
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
    { 
      nombre: 'toyota',
      precio: 1812132,
      img: "/assets/carsImgenes/wrangle.jpg"
    },
  ]

  return (
    <div className='  border border-gray-400 mx-20  p-0'>

      <div className='flex h-full  justify-center items-center'>
      {/* Imagen de portada  */}
        <img src="/assets/carsImgenes/wrangler2.jpg" className='w-full'  alt="imagen general de un vehiculo" />
      </div>

      <div class="grid items-center justify-center grid-cols-3 gap-4 pt-2">
        {
          cars.map(({nombre,precio,img})=>{
            return <CardOfCars nombre={nombre} precio={precio} img={img} />
          })
        }
        
      </div>

      <Features />

      
    </div>
  )
}
