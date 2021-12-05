import React from "react";
import "./styles.css";
const Input = ({ type, name, placeholder }) => {
  return (
    <input
      className="form-input"
      type="text"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
