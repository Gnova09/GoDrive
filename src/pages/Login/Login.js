import React from 'react'
import LoginForm from '../../components/Loginform'

export const Login = () => {
  return (
    <div className="d-flex min-vh-100 flex-row">

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
  <section className="bg-light w-50 mx-auto">
      <div className="d-flex flex-column align-items-center justify-content-center px-4 py-8 mx-auto min-vh-100">
        <a href="/" className="d-flex align-items-center mb-4 text-dark">
          <img width={32} height={32} className="me-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          <span className="h4 font-weight-bold">GoDrive</span>
        </a>

        <div className="w-100 bg-white bo rounded-lg shadow p-4">
          <div className="p-4 space-y-4">
            <h1 className="h5 font-weight-bold text-dark">
              Iniciar sesion en tu cuenta
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>

      <span className="text-muted small text-center d-block mt-3">
        © 2024 <a href="https://github.com/Gnova09" className="text-decoration-underline">DevNova™</a>. All Rights Reserved. VERSION 1.0.4
      </span>
    </section>
    </div>
  )
}