import React from "react";
import "./styles.css";
import MonthArrow from "../../components/MonthArrow";
import TableItem from "../../components/TableItem";
import { useSelector } from "react-redux";

const DataList = ({ color, page }) => {
  let data;
  const ingresos = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expense);

  switch (page) {
    case "Ingreso":
      console.log("Obteniendo datos de ingreso");
      data = ingresos;
      break;
    case "Gasto fijo":
      console.log("Obteniendo datos de costo fijos");
      data = expenses;
      break;
    case "Gasto hormiga":
      console.log("Obteniendo datos de gasto hormiga");
      break;
    default:
      break;
  }
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
            {data.map((data) => {
              const { category, date, description, value, id } = data;
              console.log(category);
              return (
                <TableItem
                  key={id}
                  category={category}
                  date={date}
                  description={description}
                  value={value}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataList;
