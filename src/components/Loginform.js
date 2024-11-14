import React, { useState } from 'react';
import useAppContext from '../context/context';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const {  setIslogin,  toastCall, users } = useAppContext()
    

    //funcion del boton de login
    const handleSubmitLogin = () =>{
      //TODO: aqui va el fetch al aAPI DEL BACKEND
      users.map(user => {
        if(user.email === email && user.pass === pass){
          setIslogin(true)
          toastCall("Logged")
          navigate("/")
        }else{
          toastCall("Error en el login")
        }
        console.log({
          email, pass
        })
      })
     
    }

  return (

    <form className="mb-4" style={{ height: '330px' }}>    {/* Aquí añadí los estilos para definir la altura del login */}
  <div className="mb-3">
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

  <div className="mb-3">
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
      
      <span className="mx-2">O inicia sesión con</span>
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

 


  <div className="d-flex justify-content-between align-items-center mb-3">
    <div className="form-check">
      <input
        id="remember"
        type="checkbox"
        className="form-check-input"
        required
      />
      <label htmlFor="remember" className="form-check-label">
        Recordarme
      </label>
    </div>
    <a href="/" className="text-primary">
      Has olvidado la contraseña?
    </a>
  </div>

  <button
    type="submit"
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