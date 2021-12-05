import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header class="header">
      <nav class="header__nav">
        <ul class="header__ul">
          <li class="header__li header--login">INICIAR SESIÓN</li>
          <li class="header__li header--register">REGISTRATE</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
