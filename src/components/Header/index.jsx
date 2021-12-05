import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li header--login">
            <Link to="/login">INICIAR SESIÓN</Link>
          </li>
          <li className="header__li header--register">
            <Link to="/register">REGISTRATE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
