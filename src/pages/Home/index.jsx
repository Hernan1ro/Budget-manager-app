import React from "react";
import "./styles.css";
import Header from "../../components/Header/";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div class="main-container">
          <h1>TOMA CONTROL DE TUS GASTOS HORMIGAS</h1>
          <h4>Aprende a realizar control y planificación de tus finanzas</h4>
          <h6>Lleva segui miento de cada peso con reporte detalaldos</h6>
          <form action="" class="row">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">INGRESAR</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
