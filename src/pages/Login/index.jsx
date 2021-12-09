import React from "react";
import "./styles.css";
import useInputValue from "../../hooks/useInputValue";
import { useDispatch } from "react-redux";
import {
  loginEmailPassword,
  loginGoogle,
  loginFacebook,
} from "../../actions/actionLogin";
import { authUpdate } from "../../actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const email = useInputValue();
  const password = useInputValue();

  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email.value, password.value));
    dispatch(authUpdate(true));
  };
  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-form__title">Ingresar</h1>
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
          <button className="login-form__button">Entrar</button>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
