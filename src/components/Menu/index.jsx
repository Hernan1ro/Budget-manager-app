import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { useDispatch } from "react-redux";
import { SignOutAction } from "../../actions/actionsSignOut";

const Menu = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    SignOutAction(navigate);
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
          <div>Cerrar sesión</div>
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
