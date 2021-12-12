import React from "react";
import "./styles.css";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import GeneralChart from "../../containers/generalChart/index.js";
import Chart1 from "../../containers/Chart1";
import Chart2 from "../../containers/Chart2";
import Chart3 from "../../containers/Chart3";

const General = () => {
  const [isVisible, setIsvisble] = React.useState(false);
  const showCharts = () => {
    setIsvisble((state) => !state);
  };
  return (
    <>
      <Menu />
      <WhiteBackground>
        <div className="resume-container">
          <div className="text-container">
            <h1 className="text-container__title">
              Resumen de tus <br /> movimientos
            </h1>
            <h3 className="text-container__subtitle">
              Este análisis está enfocado en tus registros financieros
            </h3>
            <button onClick={showCharts} className="text-container__button">
              {isVisible ? "OCULTAR REPORTES" : "REPORTE DETALLADO"}
            </button>
          </div>
          <div className="chart-container">
            <GeneralChart />
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <h1 className="text-container__title--inform">
              Gastos hormigas vs Objetivos de ahorro
            </h1>
            <h3 className="text-container__subtitle--inform">
              Una buena forma de maximizar tus ahorros es disminuyendo tus
              gastos Hormigas
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              omnis quod maiores excepturi ratione aut eius exercitationem,
              nulla aperiam quis!
            </p>
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <Chart1 />
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <h1 className="text-container__title--inform">
              Gastos hormigas vs Gastos fijos
            </h1>
            <h3 className="text-container__subtitle--inform">
              Para tener unas finanzas saludables es importante distingir entre
              un gasto fijo y un gasto hormiga
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              omnis quod maiores excepturi ratione aut eius exercitationem,
              nulla aperiam quis!
            </p>
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <Chart2 />
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <h1 className="text-container__title--inform">
              Gastos hormigas vs Ingresos
            </h1>
            <h3 className="text-container__subtitle--inform">
              Tus gastos hormigas pueden reducir drásticamente tus ingresos si
              no se controlan adecuadamente
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              omnis quod maiores excepturi ratione aut eius exercitationem,
              nulla aperiam quis!
            </p>
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <Chart3 />
          </div>
        </div>
      </WhiteBackground>
    </>
  );
};

export default General;
