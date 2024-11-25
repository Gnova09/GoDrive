import React from 'react'
import useAppContext from '../../context/context'
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ showCart }) => {

  const { verifyLogin, islogin, toastCall, liscart, setLiscart } = useAppContext()
  const navigate = useNavigate();

  const handleDeleteCar = (nombre) => {
    const listOfCarts = liscart.filter(car => car.nombre !== nombre)

    setLiscart(listOfCarts)

    toastCall(`Carro ${nombre} Eliminado`)
  }

  const handlePago = () => {
    if (islogin) {
      if (liscart.lenght > 0) {

        showCart(false)
        setLiscart([])
        toastCall('Le llegara el Link de pago y la factura via correo')
      } else {
        showCart(false)
        toastCall('No existe NINGUN carro agregado')
      }

    } else {
      toastCall('Debe iniciar sesion')
      navigate("/login")
    }
  }
  return (
    <div className=' absolute z-20 scroll-m-1 h-[90%] top-0 right-0   w-1/3 bg-slate-200 rounded '>
      <div className=' justify-center p-5 flex flex-row'>
        <h1 className='p-0 text-center font-bold text-2xl'>
          Carro de compra
        </h1>

        <button type="button" onClick={() => showCart(false)} className="text-black hover:bg-red-600 bg-gray-300 flex items-center justify-center  rounded-lg text-sm w-8 h-8 ms-auto " >
          <svg class="w-3 h-3  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <div className='flex flex-col overflow-y-scroll max-h-fit' >

        {/*  map de carritos */}

        {
          liscart.map(({ nombre, precio, img, desde, hasta }) => {
            return (
              <div className='flex flex-row mb-3 ml-3 border-b border-gray-500  '>

                <img className='h-[100px]' src={`data:image/jpeg;base64,${img[0]}`} alt={`${nombre} imagen`} />
                <div className='flex flex-col'>
                  <span className=' font-bold ml-2'>{nombre}</span>
                  <span className=' ml-2'>Precio por dia: {precio}</span>
                  <span className=' ml-2 font-bold'>Fecha</span>
                  <div>
                    <span className=' ml-2 '> <span className='font-medium'>Desde:</span> {desde}</span>
                    <span className=' ml-2'><span className='font-medium'>Hasta:</span> {hasta}</span>
                  </div>
                </div>
                <div >
                  <button className='w-6 h-6 flex justify-center'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>

                </div>
                <button type="button" onClick={() => { handleDeleteCar(nombre) }} class="text-black flex justify-center items-center hover:bg-red-600 bg-gray-300 hover:text-gray-900 rounded text-sm w-8  ms-auto  dark:hover:bg-gray-600 dark:hover:text-white" >
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
            )
          })
        }

      </div>
      <div className='w-full flex bottom-0 justify-center items-center'>
        <button type="button" onClick={() => handlePago()} class="focus:outline-none text-white font-semibold   bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Procceder al pago</button>
      </div>


    </div>
  )
}

export default ShoppingCart