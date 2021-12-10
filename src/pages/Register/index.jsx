import React from "react";
import "./styles.css";
import useInputValue from "../../hooks/useInputValue";
import { useDispatch } from "react-redux";
import { registroEmailPasswordNombre } from "../../actions/actionsRegister";
import { authUpdate } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useInputValue();
  const email = useInputValue();
  const password = useInputValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (!testEmail) {
      alert("Correo electrónico no válido");
    } else if (!(password.value.length >= 6)) {
      alert("Tu contraseña debe tener al menos 6 caracteres");
    } else if (testEmail && password.value.length >= 6) {
      dispatch(
        registroEmailPasswordNombre(
          email.value,
          password.value,
          name.value,
          navigate
        )
      );
    }
  };

  return (
    <main className="main-register">
      <h3 className="main-register__title">Registrate</h3>
      <h5 className="main-register__subtitle">
        El camino está por delante de ti. Ya ha dado su primer paso hacia la
        transformación financiera y lo guiaremos en ese viaje.
      </h5>
      <form onSubmit={handleSubmit} className="main-register__form" action="">
        <input
          placeholder="Nombre"
          type="text"
          name="name"
          className="main-register__input"
          {...name}
        />
        <input
          placeholder="Correo"
          type="text"
          name="email"
          className="main-register__input"
          {...email}
        />
        <input
          placeholder="Contraseña"
          type="password"
          name="password"
          className="main-register__input"
          {...password}
        />
        <button type="submit" className="main-register__button">
          Entrar
        </button>
      </form>
      <p className="main-register__conditions">
        Al registrar, acepto los Términos de uso y Política de Privacidad de
        FinAntApp.
      </p>
    </main>
  );
};

export default Register;
