import React from "react";
import "./styles.css";

const NewRecord = ({ page, options, color }) => {
  return (
    <div className="record-container">
      <div className="new-record">
        <h2 className="new-record__title">Nuevo {page}</h2>
        <p className={`new-record__subtitle ${color}-color`}>
          Debe tener un valor mayor que 0
        </p>
        <form action="" className="new-record__form">
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <input
              name="value"
              type="number"
              className="input-value input-container__value"
              placeholder="Valor"
            />
          </div>
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <input
              name="date"
              type="date"
              className="input-value input-container__date"
              placeholder="Fecha"
            />
          </div>
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <input
              name="description"
              type="text"
              className="input-value input-container__description"
              placeholder="Descripción"
            />
          </div>
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <select
              name="category"
              type="select"
              className="input-value input-container__category"
              placeholder="Categoria"
            >
              {options.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <button className={`${color}-button`} type="submit">
            Agregar {page}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecord;
