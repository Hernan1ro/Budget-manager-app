import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header/";
import logo from "../../Assets/logo/FinAntApp3.png";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <img src={logo} alt="home-logo" className="home-logo" />
          <h1 className="main-container__title">
            TOMA CONTROL DE TUS GASTOS HORMIGAS
          </h1>
          <h4 className="main-container__subtitle">
            Aprende a realizar control y planificación de tus finanzas
          </h4>
          <h6 className="main-container__phrase">
            Lleva seguimiento de cada peso con reporte detalaldos
          </h6>
          <div className="form-image">
            <img
              src="https://pngeans.com/wp-content/uploads/2019/12/free-personal-finance-courses.jpg"
              alt="Home"
            />
          </div>
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
            <button className="form__button" type="submit">
              <Link to="/login">INGRESAR</Link>
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
