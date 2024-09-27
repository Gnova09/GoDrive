import React, { useState } from 'react'
import useAppContext from '../../context/context'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [pass2, setpass2] = useState("")
  const [nombre, setnombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [telefono, settelefono] = useState("")
  const { toastCall } = useAppContext()

  const handleSubmitRegister = (event) => {
    event.preventDefault()
    // eslint-disable-next-line
    const register = {
      email,
      pass,
      pass2,
      nombre,
      apellido,
      telefono
    }
    //TODO: ENVIAR AL API DE BACKEND PARA QUE LO CREE
    toastCall("Registro completado ")
    navigate("/")

  }

  return (
    <div className="d-flex min-vh-100 flex-row">
      <section className="bg-light w-50 mx-auto">
        <div className="d-flex flex-column align-items-center justify-content-center px-4 py-8 mx-auto min-vh-100">
          <a href="/" className="d-flex align-items-center mb-4 text-dark">
            <img width={32} height={32} className="me-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            <span className="h4 font-weight-bold">GoDrive</span>
          </a>

          <div className="w-100 bg-white rounded-lg shadow p-4">
            <div className="p-4 space-y-4">
              <h1 className="h5 font-weight-bold text-dark">
                Crear tu cuenta
              </h1>

              {/*********************************************** FORMULARIO DE REGISTRO ***************************************** */}

              <form class="max-w-md mx-auto" onSubmit={(event) => handleSubmitRegister(event)}>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="email" onChange={(e) => setemail(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent  border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="password" onChange={(e) => setpass(e.target.value)} name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent  border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="password" onChange={(e) => setpass2(e.target.value)} name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent  border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="text" onChange={(e) => setnombre(e.target.value)} name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent  border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="text" onChange={(e) => setapellido(e.target.value)} name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent  border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                  </div>
                </div>
                <div class="grid w-full md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="tel" onChange={(e) => settelefono(e.target.value)} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent  border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                  </div>

                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-100">Registrar</button>
                <p className="text-center mt-3">
                  ¿Ya tienes cuenta?{' '}
                  <a href="/" className="text-primary">
                    Iniciar sesion
                  </a>
                </p>

              </form>

            </div>
          </div>
        </div>

        <span className="text-muted small text-center d-block mt-3">
          © 2024 <a href="https://github.com/Gnova09" className="text-decoration-underline">DevNova™</a>. All Rights Reserved. VERSION 1.0.4
        </span>
      </section>
      <div className="col-6">
        <div className="d-flex justify-content-center align-items-center h-100 w-100 position-relative">
          <img
            src="/assets/Portada.jpg"
            width="5885"
            height="3789"
            alt="logo"
            className="img-fluid w-100 h-100"
          />
          <div className="position-absolute w-auto d-flex flex-column align-items-center">
            <h1 className="font-weight-bold display-2 text-white" style={{ fontFamily: 'Lobster, cursive' }}>
              Bienvenido
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
