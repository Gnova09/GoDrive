import React from 'react'
import LoginForm from '../../components/Loginform'

export const Login = () => {


  return (
    <div className="d-flex min-vh-100 justify-center flex-row">

      <div className="w-full">
        <div className="d-flex justify-content-center align-items-center h-100 w-100 position-relative">
          {/* Video de fondo */}
          <video
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            style={{ filter: 'blur(3px)' }} // Aquí añadí el filtro de difuminado para que se resalte mas el texto, que el video

          >
            <source src="/assets/fondo.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <div className="position-absolute left-20 top-8 w-20 align-items-center">
            <h1 className="font-weight-bold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white" style={{ fontFamily: 'Lobster, cursive' }}>
              Bienvenido
            </h1>
          </div>
        </div>
      </div>


      <section className="bg-transparent absolute justify-center w-50 mx-auto">
        <div className="d-flex flex-column align-items-center justify-content-center px-4 py-8 mx-auto min-vh-100">


          <div className="w-100 bg-white rounded-lg shadow p-4">
            <div className='d-flex  align-items-center justify-content-center '>

              <a href="/" className="d-flex align-items-center mb-4 text-dark">
                <img width={32} height={32} className="me-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                <span className="h4 font-weight-bold">GoDrive</span>
              </a>
            </div>
            <div className="p-4 space-y-4">
              <h1 className="h5 font-weight-bold text-dark">
                Iniciar sesion en tu cuenta
              </h1>
              <LoginForm />
            </div>
          </div>
        </div>

        
      </section>
    </div>
  )
}