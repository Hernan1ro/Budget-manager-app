import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/index";
import "./styles.css";

const Income = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <NewRecord />
        <div className="records-list">
          <div className="records-list__month">
            <div className="month">
              <img src="" alt="arrow-icon" />
              <div className="month__element">Noviembre 2021</div>
              <img src="" alt="arrow-icon" />
            </div>
          </div>
          <div className="records-list__data"></div>
        </div>
      </WhiteBackground>
    </>
  );
};

export default Income;
