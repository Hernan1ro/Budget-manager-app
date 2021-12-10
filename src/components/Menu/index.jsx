import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authUpdate } from "../../actions/authActions";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    console.log(auth);
    signOut(auth)
      .then(() => {
        alert("Signout exitosamente");
        dispatch(authUpdate(false));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="header-container">
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
      </ul>
      <ul className="header-container__options">
        <li
          onClick={handleSignOut}
          className="header-container__option  header--signout-btn"
        >
          <a>Cerrar sesión</a>
        </li>
      </ul>
      <img
        alt="Menu icon"
        className="header-container__icon"
        src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-menu-user-interface-kmg-design-flat-kmg-design.png"
      />
    </header>
  );
};

export default Menu;
