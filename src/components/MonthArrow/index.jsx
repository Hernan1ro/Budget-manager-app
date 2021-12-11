import React from "react";
import "./styles.css";

const MonthArrow = ({ color, page }) => {
  let tableHeading = "";

  switch (page) {
    case "Ingreso":
      tableHeading = "Mis ingresos";
      break;
    case "Gasto fijo":
      tableHeading = "Mis gastos";
      break;
    case "Gasto hormiga":
      tableHeading = "Mis gastos hormiga";
      break;
    default:
      break;
  }
  return (
    <div className="records-list__month">
      <div className={`month ${color}-month`}>
        {/* <i className="fas fa-arrow-left"></i> */}
        <div className={`month__element ${color}-month__element`}>
          {tableHeading}
        </div>
        {/* <i className="fas fa-arrow-right"></i> */}
      </div>
    </div>
  );
};

export default MonthArrow;
