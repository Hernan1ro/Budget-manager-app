import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";

const ObjectiveMonth = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <div className="objective-container">
          <div className="title-container">
            <h1 className="objective-container__title">
              Objetivos para el Mes
            </h1>
          </div>
          <form action="" className="objective-form">
            <label htmlFor="month-budget">Presupuesto Mensual</label>
            <input id="month-budget" type="number" />
            <label htmlFor="month-expenses">Gasto mensual actual</label>
            <input id="month-expenses" type="number" />
            <label htmlFor="average-savings">Ahorro estimado</label>
            <input id="average-savings" type="number" />
            <button id="form-button" type="">
              Guardar
            </button>
          </form>
        </div>
      </WhiteBackground>
    </>
  );
};

export default ObjectiveMonth;
