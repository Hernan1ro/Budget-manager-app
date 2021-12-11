import React from "react";
import { removeIncomeAction } from "../../actions/incomeActions";
import { useDispatch } from "react-redux";
import "./styles.css";

const TableItem = ({ category, date, description, value, id }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = React.useState(false);

  const handleDelete = (id) => {
    dispatch(removeIncomeAction(id));
    console.log("Borrando registro" + id);
  };
  const handleEdit = (id) => {
    setEditMode(true);
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
