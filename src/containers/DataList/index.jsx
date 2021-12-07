import React from "react";
import "./styles.css";
import MonthArrow from "../../components/MonthArrow";
import TableItem from "../../components/TableItem";

const DataList = ({ color }) => {
  return (
    <div className="records-list">
      <MonthArrow color={color} />
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
            <TableItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataList;
