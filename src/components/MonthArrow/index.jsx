import React from "react";
import "./styles.css";

const MonthArrow = ({ color }) => {
  return (
    <div className="records-list__month">
      <div className={`month ${color}-month`}>
        <i className="fas fa-arrow-left"></i>
        <div className={`month__element ${color}-month__element`}>
          Noviembre 2021
        </div>
        <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default MonthArrow;
