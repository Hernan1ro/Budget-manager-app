import React from "react";
import "./styles.css";
import Header from "../../components/Header/";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div class="main-container">
          <h1 class="main-container__title">
            TOMA CONTROL DE TUS GASTOS HORMIGAS
          </h1>
          <h4 class="main-container__subtitle">
            Aprende a realizar control y planificación de tus finanzas
          </h4>
          <h6 class="main-container__phrase">
            Lleva segui miento de cada peso con reporte detalaldos
          </h6>
          <form class="form" action="">
            <input
              class="form__input"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              class="form__input"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button class="form__button" type="submit">
              INGRESAR
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
