import React from "react";
import { removeIncomeAction } from "../../actions/incomeActions";
import { removeAntExpenseAction } from "../../actions/actionsAntExpense";
import { removeExpenseAction } from "../../actions/expensesActions";
import { useDispatch } from "react-redux";
import { editIncomeAction } from "../../actions/incomeActions";
import "./styles.css";

const TableItem = ({ category, date, description, value, id, page }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeIncomeAction(id));
    dispatch(removeAntExpenseAction(id));
    dispatch(removeExpenseAction(id));
  };

  const handleEdit = (id) => {
    const data = { editMode: true, id };
    console.log("Modo edición activado");

    switch (page) {
      case "Ingreso":
        console.log("Editando ingresos");
        dispatch(editIncomeAction(data));
        break;
      case "Gasto fijo":
        console.log("Editando Gastos fijos");
        break;
      case "Gasto hormiga":
        console.log("Editando Gasto hormiga");
        break;
      default:
        break;
    }
  };

  return (
    <tr>
      <td className="data-situation">
        <i className="fas fa-check-circle"></i>
      </td>
      <td className="data-date">
        <p>{date}</p>
      </td>
      <td className="data-description">
        <p>{description}</p>
      </td>
      <td className="data-category">
        <div className="data-category__container">
          <i className="fas fa-umbrella-beach"></i>
          <p>{category}</p>
        </div>
      </td>
      <td className="data-value">$ {value}</td>
      <td className="data-actions">
        <div className="data-actions__container">
          <i
            onClick={() => {
              handleEdit(id);
            }}
            className="fas fa-pencil-alt"
          ></i>
          <i
            onClick={() => {
              handleDelete(id);
            }}
            className="far fa-trash-alt"
          ></i>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
