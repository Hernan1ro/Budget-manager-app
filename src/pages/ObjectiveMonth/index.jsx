import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import "./styles.css";

const ObjectiveMonth = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <div className="objective-container">
          <div className="title-container">
            <h1 className="objective-container__title">
              OBJETIVOS PARA EL MES
            </h1>
          </div>
          <div className="objective-keys-container">
            <form action="" className="objective-form">
              <div className="label-container">
                <label htmlFor="month-budget">Presupuesto Mensual</label>
                <input id="month-budget" type="number" />
              </div>
              <div className="label-container">
                <label htmlFor="month-expenses">Gasto mensual actual</label>
                <input id="month-expenses" type="number" />
              </div>
              <div className="label-container">
                <label htmlFor="average-savings">Ahorro estimado</label>
                <input id="average-savings" type="number" />
              </div>
              <button id="form-button" type="">
                Guardar
              </button>
            </form>
            <div className="alert-container">
              <div className="alert-message">
                {/* <h3>No hay novedades</h3> */}
              </div>
            </div>
          </div>
        </div>
      </WhiteBackground>
    </>
  );
};

export default ObjectiveMonth;
