import React from "react";
import "./styles.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-form__title">Ingresar</h1>
        <h4 className="login-form__subtitle">
          Es hora de transformar tus finanzas.
        </h4>
        <form className="login-form__form" action="">
          <input
            placeholder="Email"
            name="email"
            type="text"
            className="login-form__email"
          />
          <input
            placeholder="Contraseña"
            name="password"
            type="password"
            className="login-form__password"
          />
          <button className="login-form__button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
