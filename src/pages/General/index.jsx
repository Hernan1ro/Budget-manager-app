import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";

const General = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <div className="general-main__title-container"></div>
        <div className="general-main__chart-container"></div>
      </WhiteBackground>
    </>
  );
};

export default General;
