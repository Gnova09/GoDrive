import React, { useState } from 'react';
import useAppContext from '../context/context';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const {  islogin,  toastCall, users, logear,  } = useAppContext()
    

    //funcion del boton de login
    const handleSubmitLogin = async () =>{
      //TODO: aqui va el fetch al aAPI DEL BACKEND
      if(await logear({email, pass})) navigate("/")     
    }

  return (

    <form className="mb-4" style={{ height: '330px' }}>    {/* Aquí añadí los estilos para definir la altura del login */}
  <div className="mb-3 text-black">
    <label htmlFor="email" className="form-label">       

      Correo Electrónico
    </label>
    <input
      type="email"
      onChange={(e) => setEmail(e.target.value)}
      id="email"
      className="form-control"
      placeholder="Ingrese su correo electrónico" 
      maxLength={100}
      minLength={6}         
      required
    />
  </div>

  <div className="mb-3 text-black">
    <label htmlFor="password" className="form-label">
      Contraseña
    </label>
    <input
      type="password"
      onChange={(e) => setPass(e.target.value)}
      id="password"
      placeholder="Ingrese su contraseña"
      className="form-control"
      minLength={6}
      maxLength={32}
      required
    />
  </div>

  
  <div className="text-center my-4">
    <div className="d-flex align-items-center">
      <hr 
        className="flex-fill" 
        style={{ 
          border: '1px solid #8c8c8c', 
          height: '1px',
          flexGrow: 1,
        }} 
      />
      
      <span className="mx-2 text-black">O inicia sesión con</span>
      <hr 
        className="flex-fill" 
        style={{ 
          border: '1px solid #8c8c8c',
          height: '1px',
          flexGrow: 1,
        }} 
      />
    </div>
  </div>

 


  

  <button
    type="button"
    onClick={handleSubmitLogin}
    className="btn btn-primary w-100"
  >
    Iniciar sesión
  </button>

  <p className="text-center mt-3">
    ¿Eres nuevo en GoDrive?{' '}
    <a href="/register" className="text-primary">
      Crear una cuenta
    </a>
  </p>
</form>

  );
}

export default LoginForm;