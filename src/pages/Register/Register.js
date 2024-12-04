import React, { useState } from "react"; 
import useAppContext from "../../context/context";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [telefono, settelefono] = useState("");
  const [tipoIdentificacion, settipoIdentificacion] = useState('');
  const [numeroIdentificacion, setnumeroIdentificacion] = useState('');
  const { toastCall, RegistrarCliente } = useAppContext();

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    const cliente = {
      email,
      pass,
      nombre,
      apellido,
      telefono,
      tipoIdentificacion,
      numeroIdentificacion,
    };
    const responseCreateCliente = await RegistrarCliente({ cliente });
    if (responseCreateCliente.success === true) {
      navigate("/login");
    }
    toastCall("Registro completado ");
  };

  return (
    <div className="d-flex min-vh-100 flex-row">
      <section className="bg-light w-50 mx-auto">
        <div className="d-flex flex-column align-items-center justify-content-center px-4 py-8 mx-auto min-vh-100">
          {/* Logo y Título */}
          <a href="/" className="d-flex flex-column align-items-center mb-4 text-dark">
            <img
              width={150}
              height={150}
              className="me-2 mb-2"
              src="/assets/logo.png"
              alt="Logo GoDrive Registro"
            />
            <span className="h4 font-weight-bold">GoDrive</span>
          </a>

          {/* Contenedor del Formulario */}
          <div className="w-100 bg-white rounded-lg shadow p-4">
            <div className="p-4 space-y-4">
              <h1 className="h5 font-weight-bold text-dark">Crear tu cuenta</h1>

              {/* Formulario de Registro */}
              <form className="max-w-md mx-auto" onSubmit={handleSubmitRegister}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  {/* Primer Nombre */}
                  <div className="relative z-0 w-full mb-5">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setnombre(e.target.value)}
                      name="first_name"
                      id="first_name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  {/* Segundo Nombre */}
                  <div className="relative z-0 w-full mb-5">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Segundo nombre
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setapellido(e.target.value)}
                      name="last_name"
                      id="last_name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative z-0 w-full mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Dirección de correo electrónico
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                    name="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Tipo de Documento */}
                <div className="relative z-0 w-full mb-5">
                  <label htmlFor="tipo_identificacion" className="block text-sm font-medium text-gray-700">
                    Tipo de documento
                  </label>
                  <select
                    name="tipo_identificacion"
                    id="tipo_identificacion"
                    onChange={(e) => settipoIdentificacion(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="" disabled>
                      Selecciona un tipo de documento
                    </option>
                    <option value="cedula">Cédula</option>
                    <option value="pasaporte">Pasaporte</option>
                  </select>
                </div>

                {/* Número de Documento */}
                <div className="relative z-0 w-full mb-5">
                  <label htmlFor="numero_identificacion" className="block text-sm font-medium text-gray-700">
                    Número de documento
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setnumeroIdentificacion(e.target.value)}
                    name="numero_identificacion"
                    id="numero_identificacion"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Contraseña */}
                <div className="relative z-0 w-full mb-5">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setpass(e.target.value)}
                    name="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5"
                >
                  Crear Cuenta
                </button>

                <p className="text-center mt-3">
                  ¿Ya tienes cuenta?{" "}
                  <a href="/login" className="text-primary">
                    Iniciar sesión
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen y Título */}
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
            <h1
              className="font-weight-bold display-2 text-white"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Bienvenido
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
