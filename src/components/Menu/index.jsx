import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Menu = () => {
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
    </header>
  );
};

export default Menu;
