import React from "react";
import "./styles.css";
import useInputValue from "../../hooks/useInputValue";
import { useHandleNewRecord } from "../../hooks/useHandleNewRecord";
import { addIncomeAction } from "../../actions/incomeActions";
import { addFixedExpenseAction } from "../../actions/expensesActions";
import { addExpenseAction } from "../../actions/actionsAntExpense";
import { useDispatch, useSelector } from "react-redux";
import { editIncomeAction } from "../../actions/incomeActions";

const NewRecord = ({ page, options, color, btnSave }) => {
  const income = useSelector((state) => state.editIncome);
  const incomeList = useSelector((state) => state.income);

  const quantity = useInputValue();
  const date = useInputValue();
  const description = useInputValue();
  const category = useInputValue();

  const record = useHandleNewRecord;
  const dispatch = useDispatch();

  const editIncome = () => {
    const { id, editMode } = income;
    if (editMode) {
      const editObject = incomeList.filter((data) => data.id === id);
      const { category, date, description, value } = editObject;
    }
  };
  editIncome();

  const handleNewRecord = (e) => {
    e.preventDefault();

    //comprobación el modo edición
    if (income.editMode) {
      console.log("Apagando modo edición");
      dispatch(editIncomeAction({ editMode: false, id: "" }));
    } else {
      const data = record(quantity, date, description, category);
      if (
        data.value <= 0 ||
        data.id === "" ||
        data.value === "" ||
        data.description === "" ||
        data.category === ""
      ) {
        alert("Todos los campos deben estar llenos");
        return;
      }
      switch (page) {
        case "Ingreso":
          dispatch(addIncomeAction(data));
          break;
        case "Gasto fijo":
          dispatch(addFixedExpenseAction(data));
          break;
        case "Gasto hormiga":
          dispatch(addExpenseAction(data));
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="record-container">
      <div className="new-record">
        <h2 className="new-record__title">Nuevo {page}</h2>
        <p className={`new-record__subtitle ${color}-color`}>
          Debe tener un valor mayor que 0
        </p>
        <form onSubmit={handleNewRecord} action="" className="new-record__form">
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <input
              name="value"
              type="number"
              className="input-value input-container__value"
              placeholder="Valor"
              {...quantity}
            />
          </div>
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <input
              name="date"
              type="date"
              className="input-value input-container__date"
              placeholder="Fecha"
              {...date}
            />
          </div>
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <input
              name="description"
              type="text"
              className="input-value input-container__description"
              placeholder="Descripción"
              {...description}
            />
          </div>
          <div className={`input-container ${color}-input-color`}>
            <img src="" alt="" />
            <select
              name="category"
              type="select"
              className="input-value input-container__category"
              placeholder="Categoria"
              {...category}
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
            {btnSave}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecord;
