import React from "react";
import "./styles.css";

const TableItem = ({ category, date, description, value }) => {
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
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-paperclip"></i>
          <i className="far fa-trash-alt"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
