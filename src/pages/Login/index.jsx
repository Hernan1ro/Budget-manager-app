import React from "react";
import "./styles.css";
import useInputValue from "../../hooks/useInputValue";
import { link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginEmailPassword,
  loginSincrono,
  loginGoogle,
  loginFacebook,
} from "../../actions/actionLogin";

const Login = () => {
  const dispatch = useDispatch();
  const email = useInputValue();
  const password = useInputValue();

  const handlelogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email.value, password.value));
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
          <div className="auth__social-networks login-form__button">
            <div onClick={handleFacebook} className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
            </div>
            {/* <div onClick={handleFacebook} className="google-btn">
              <div className="facebook-icon-wrapper">
                <img
                  className="facebook-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="facebook button"
                />
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
