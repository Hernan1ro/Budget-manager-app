import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header/";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <h1 className="main-container__title">
            TOMA CONTROL DE TUS GASTOS HORMIGAS
          </h1>
          <h4 className="main-container__subtitle">
            Aprende a realizar control y planificación de tus finanzas
          </h4>
          <h6 className="main-container__phrase">
            Lleva seguimiento de cada peso con reporte detalaldos
          </h6>
          <form className="form" action="">
            <input
              className="form__input"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              className="form__input"
              type="password"
              name="password"
              placeholder="Password"
            />
            <Link to="/login">
              <button className="form__button" type="submit">
                INGRESAR
              </button>
            </Link>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
