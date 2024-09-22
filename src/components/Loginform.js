import React from 'react';

function LoginForm({ setEmail, setPass, handleSubmitLogin }) {
  return (
    <form className="mb-4">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo Electronico
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="form-control"
          placeholder="name@company.com"
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
          placeholder="••••••••"
          className="form-control"
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
          Olvido su contrasena?
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
        No tiene una cuenta todavia?{' '}
        <a href="/pages/register" className="text-primary">
          Registrarse
        </a>
      </p>
    </form>
  );
}

export default LoginForm;