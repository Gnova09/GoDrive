import React from 'react';

function LoginForm({ setEmail, setPass, handleSubmitLogin }) {
  return (
    <form className="mb-4">
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
          maxLength={150}
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
        Iniciar sesion
      </button>

      <p className="text-center mt-3">
       ¿Eres nuevo en GoDrive?{' '}
        <a href="/pages/register" className="text-primary">
          Crear una cuenta
        </a>
      </p>
    </form>
  );
}

export default LoginForm;