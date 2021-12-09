import React from "react";
import "./styles.css";
import useInputValue from "../../hooks/useInputValue";
import { useDispatch } from "react-redux";
import {
  loginEmailPassword,
  loginGoogle,
  loginFacebook,
} from "../../actions/actionLogin";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useInputValue();
  const password = useInputValue();

  const handlelogin = (e) => {
    e.preventDefault();
    if (email.value === "" || password.value === "") {
      alert("Ambos campos deben estar llenos");
      return;
    }
    dispatch(loginEmailPassword(email.value, password.value));
    navigate("/general");
  };
  const handleGoogle = async () => {
    await dispatch(loginGoogle());
    navigate("/general");
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
    navigate("/general");
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-form__title">Inicio de sesión</h1>
        <h4 className="login-form__subtitle">
          Es hora de transformar tus finanzas.
        </h4>
        <form onSubmit={handlelogin} className="login-form__form" action="">
          <input
            placeholder="Email"
            name="email"
            type="text"
            className="login-form__email"
            {...email}
          />
          <input
            placeholder="Contraseña"
            name="password"
            type="password"
            className="login-form__password"
            {...password}
          />
          <button className="login-form__button">Iniciar sesión</button>
          <div
            onClick={handleGoogle}
            className="login-form__button login-form__btn--google"
          >
            <div className="btn-icon-container">
              <p>Inicia sesión con Google</p>
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
          </div>
          <div
            onClick={handleFacebook}
            className="login-form__button login-form__btn--facebook"
          >
            <div className="btn-icon-container">
              <p>Inicia sesión con Facebook</p>
              <i className="fab fa-facebook-f"></i>
            </div>
          </div>
          <div className="register-suggestion">
            <p>¿No tienes una cuenta?</p>
            <p>
              Registrate <Link to={"/register"}>Aquí</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
