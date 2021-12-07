import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";

const Income = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <div className="income-container">
          <div className="new-record">
            <h2 className="new-record__title">Nuevo Ingreso</h2>
            <p className="new-record__subtitle">
              Debe tener un valor mayor que 0
            </p>
            <form action="" className="new-record__form">
              <div className="input-container">
                <img src="" alt="" />
                <input
                  name="value"
                  type="number"
                  className="input-container__value"
                  placeholder="Valor"
                />
              </div>
              <div className="input-container">
                <img src="" alt="" />
                <input
                  name="date"
                  type="date"
                  className="input-container__date"
                  placeholder="Fecha"
                />
              </div>
              <div className="input-container">
                <img src="" alt="" />
                <input
                  name="description"
                  type="text"
                  className="input-container__description"
                  placeholder="Descripción"
                />
              </div>
              <div className="input-container">
                <img src="" alt="" />
                <input
                  name="category"
                  type="text"
                  className="input-container__category"
                  placeholder="Categoria"
                />
              </div>
              <button type="submit">Registrar nuevo ingreso</button>
            </form>
          </div>
          <div className="records-list">
            <div className="records-list__month">
              <div className="month">
                <img src="" alt="arrow-icon" />
                <div className="month__element">Noviembre 2021</div>
                <img src="" alt="arrow-icon" />
              </div>
            </div>
            <div className="records-list__data"></div>
          </div>
        </div>
      </WhiteBackground>
    </>
  );
};

export default Income;
