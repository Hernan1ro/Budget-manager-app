import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/index";
import "./styles.css";

const Income = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <NewRecord />
        <div className="records-list">
          <div className="records-list__month">
            <div className="month">
              <i class="fas fa-arrow-left"></i>
              <div className="month__element">Noviembre 2021</div>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="records-list__data">
            <table className="data-table">
              <thead className="heading-table">
                <tr>
                  <th>Situación</th>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Categoria</th>
                  <th>Valor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="data-table__item">
                <tr>
                  <td className="data-situation">
                    <i class="fas fa-check-circle"></i>
                  </td>
                  <td className="data-date">
                    <p>17/11/2002</p>
                  </td>
                  <td className="data-description">
                    <p>Se registraron datos...</p>
                  </td>
                  <td className="data-category">
                    <div className="data-category__container">
                      <i class="fas fa-umbrella-beach"></i>
                      <p>Recreación</p>
                    </div>
                  </td>
                  <td className="data-value">$20000</td>
                  <td className="data-actions">
                    <div className="data-actions__container">
                      <i class="fas fa-pencil-alt"></i>
                      <i class="fas fa-paperclip"></i>
                      <i class="far fa-trash-alt"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </WhiteBackground>
    </>
  );
};

export default Income;
