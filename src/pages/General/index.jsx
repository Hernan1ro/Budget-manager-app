import React from "react";
import "./styles.css";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import App from "../../containers/app1.js";

const General = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <div className="resume-container">
          <div className="text-container">
            <h1 className="text-container__title">
              Resumen de tus <br /> movimientos{" "}
            </h1>
            <h3 className="text-container__subtitle">
              Este análisis está enfocado en tus registros mensuales
            </h3>
            <button className="text-container__button">
              REPORTE DETALLADO
            </button>
          </div>
          <div className="chart-container">
            <App />
          </div>
        </div>
      </WhiteBackground>
    </>
  );
};

export default General;
