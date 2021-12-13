import React from "react";
import "./styles.css";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import GeneralChart from "../../containers/generalChart/index.js";
import { useSelector } from "react-redux";
import Chart1 from "../../containers/Chart1";
import Chart2 from "../../containers/Chart2";
import Chart3 from "../../containers/Chart3";

const General = () => {
  const antExpenses = useSelector((state) => state.antExpense);
  const savings = useSelector((state) => state.monthObjectives.savings);
  const fixedExpenses = useSelector((state) => state.expense);
  const income = useSelector((state) => state.income);

  function getSum(total, data) {
    return total + data.value;
  }
  const totalAntExpenses = antExpenses.reduce(getSum, 0);
  const totalIncome = income.reduce(getSum, 0);
  const totalExpenses = fixedExpenses.reduce(getSum, 0);

  if (
    totalAntExpenses !== 0 ||
    totalIncome !== 0 ||
    totalExpenses !== 0 ||
    savings !== 0
  ) {
    // Ant expenses vs savings
    var message = `Tus gastos hormiga representan el ${Math.round(
      (totalAntExpenses / savings) * 100
    )} % de tus ingresos`;
    // Ant expenses vs expenses
    var message1 = `Tus gastos hormiga representan el ${Math.round(
      (totalAntExpenses / totalExpenses) * 100
    )} % de tus gastos`;
    // Ant expenses vs income
    var message2 = `Tus gastos hormiga representan el ${Math.round(
      (totalAntExpenses / totalIncome) * 100
    )} % de tus ingresos`;
  } else {
    var message = "";
    var message1 = "";
    var message2 = "";
  }
  console.log(totalAntExpenses, totalIncome, totalExpenses, savings);

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
          <div className={isVisible ? "text-container" : "hidden"}>
            <h1 className="text-container__title--inform">
              Gastos hormigas vs Objetivos de ahorro
            </h1>
            <h3 className="text-container__subtitle--inform">
              Una buena forma de maximizar tus ahorros es disminuyendo tus
              gastos Hormigas
            </h3>
            <p>{message}</p>
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <Chart1 />
          </div>
          <div className={isVisible ? "text-container" : "hidden"}>
            <h1 className="text-container__title--inform">
              Gastos hormigas vs Gastos fijos
            </h1>
            <h3 className="text-container__subtitle--inform">
              Para tener unas finanzas saludables es importante distingir entre
              un gasto fijo y un gasto hormiga
            </h3>
            <p>{message1}</p>
          </div>
          <div className={isVisible ? "chart-container" : "hidden"}>
            <Chart2 />
          </div>
          <div className={isVisible ? "text-container" : "hidden"}>
            <h1 className="text-container__title--inform">
              Gastos hormigas vs Ingresos
            </h1>
            <h3 className="text-container__subtitle--inform">
              Tus gastos hormigas pueden reducir drásticamente tus ingresos si
              no se controlan adecuadamente
            </h3>
            <p>{message2}</p>
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
