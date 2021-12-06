import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Menu from "../../components/Menu";

const General = () => {
  return (
    <>
      <Menu />
      <main className="general-main__container">
        <div className="general-main__title-container"></div>
        <div className="general-main__chart-container"></div>
      </main>
    </>
  );
};

export default General;
