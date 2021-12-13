import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { getAuth, signOut } from "firebase/auth";
import { authUpdate } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { loadingAction } from "../../actions/actionsLoading";
import Spinner from "../spinner2";
import logo from "../../Assets/logo/FinAntApp3.png";

const Menu = () => {
  const isLoading = useSelector((state) => state.loading);
  const objectiveAlert = withReactContent(Swal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    objectiveAlert
      .fire({
        title: "¿Estás seguro de cerrar sesión?",
        text: "confirma para realizar esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00b30c",
        cancelButtonColor: "#d33",
        confirmButtonText: "Quiero cerrar sesión",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(loadingAction(true));
          const auth = getAuth();
          signOut(auth)
            .then(() => {
              dispatch(authUpdate(false));
              dispatch(loadingAction(false));
              navigate("/");
            })
            .catch((error) => {
              dispatch(loadingAction(false));
            });
        }
      });
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <header className="header-container">
          <Link to="/">
            <img src={logo} alt="logo-menu" className="logo-menu" />
          </Link>
          <ul className="header-container__options">
            <li className="header-container__option">
              <Link to="/general">Informes</Link>
            </li>
            <li className="header-container__option">
              <Link to="/ingresos">Ingresos</Link>
            </li>
            <li className="header-container__option">
              <Link to="/gastos">Gastos Fijos</Link>
            </li>
            <li className="header-container__option">
              <Link to="/gastos-hormiga">Gastos Hormiga</Link>
            </li>
            <li className="header-container__option">
              <Link to="/objetivos">Objetivos para el mes</Link>
            </li>
            <li
              onClick={handleSignOut}
              className="header-container__option  header--signout-btn"
            >
              <div>Cerrar sesión</div>
            </li>
          </ul>
        </header>
      )}
    </>
  );
};

export default Menu;
