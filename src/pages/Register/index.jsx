import React from "react";
import "./styles.css";
import useInputValue from "../../hooks/useInputValue";
import { useDispatch, useSelector } from "react-redux";
import { registroEmailPasswordNombre } from "../../actions/actionsRegister";
import { authUpdate } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Spinner from "../../components/spinner2";
import logo from "../../Assets/logo/FinAntApp3.png";

const Register = () => {
  const isLoading = useSelector((state) => state.loading);
  const objectiveAlert = withReactContent(Swal);
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
      objectiveAlert.fire({
        icon: "error",
        title: "Oops...",
        text: "Correo electrónico no válido",
        confirmButtonColor: "#00b30c",
      });
    } else if (!(password.value.length >= 6)) {
      objectiveAlert.fire({
        icon: "error",
        title: "Oops...",
        text: "Tu contraseña debe tener al menos 6 caracteres",
        confirmButtonColor: "#00b30c",
      });
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
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className="main-register">
          <img src={logo} alt="login-logo" className="register-logo" />
          <h3 className="main-register__title">Registrate</h3>
          <h5 className="main-register__subtitle">
            El camino está por delante de ti. Ya ha dado su primer paso hacia la
            transformación financiera y lo guiaremos en ese viaje.
          </h5>
          <form
            onSubmit={handleSubmit}
            className="main-register__form"
            action=""
          >
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
      )}
    </>
  );
};

export default Register;
