import React from "react";
import "./styles.css";
import MonthArrow from "../../components/MonthArrow";

const DataList = () => {
  return (
    <div className="records-list">
      <MonthArrow />
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
                <i className="fas fa-check-circle"></i>
              </td>
              <td className="data-date">
                <p>17/11/2002</p>
              </td>
              <td className="data-description">
                <p>Se registraron datos...</p>
              </td>
              <td className="data-category">
                <div className="data-category__container">
                  <i className="fas fa-umbrella-beach"></i>
                  <p>Recreación</p>
                </div>
              </td>
              <td className="data-value">$20000</td>
              <td className="data-actions">
                <div className="data-actions__container">
                  <i className="fas fa-pencil-alt"></i>
                  <i className="fas fa-paperclip"></i>
                  <i className="far fa-trash-alt"></i>
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataList;
