import React from "react";
import "./styles.css";

const Register = () => {
  return (
    <main className="main-register">
      <h3 className="main-register__title">Registrate</h3>
      <h5 className="main-register__subtitle">
        El camino está por delante de ti. Ya ha dado su primer paso hacia la
        transformación financiera y lo guiaremos en ese viaje.
      </h5>
      <form className="main-register__form" action="">
        <input
          placeholder="Nombre"
          type="text"
          name="name"
          className="main-register__input"
        />
        <input
          placeholder="Correo"
          type="text"
          name="email"
          className="main-register__input"
        />
        <input
          placeholder="Contraseña"
          type="password"
          name="password"
          className="main-register__input"
        />
        <button className="main-register__button">Entrar</button>
      </form>
      <p className="main-register__conditions">
        Al registrar, acepto los Términos de uso y Política de Privacidad de
        Mobills.
      </p>
    </main>
  );
};

export default Register;
