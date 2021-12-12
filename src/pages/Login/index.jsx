import React from "react";
import "./styles.css";
import useInputValue from "../../hooks/useInputValue";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginEmailPassword,
  loginGoogle,
  loginFacebook,
} from "../../actions/actionLogin";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner2";

const Login = () => {
  const objectiveAlert = withReactContent(Swal);
  const isLoading = useSelector((state) => state.loading);
  console.log("Está cargando?", isLoading);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useInputValue();
  const password = useInputValue();

  const handlelogin = (e) => {
    e.preventDefault();
    if (email.value === "" || password.value === "") {
      objectiveAlert.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
        confirmButtonColor: "#00b30c",
      });
      return;
    }
    dispatch(
      loginEmailPassword(email.value, password.value, navigate, objectiveAlert)
    );
  };
  const handleGoogle = () => {
    dispatch(loginGoogle(navigate));
  };
  const handleFacebook = () => {
    dispatch(loginFacebook(navigate));
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default Login;
