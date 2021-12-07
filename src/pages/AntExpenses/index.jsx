import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/";
import DataList from "../../containers/DataList";
import "./styles.css";

const AntExpenses = () => {
  return (
    <>
      <Menu />
      <WhiteBackground>
        <NewRecord page="Gasto hormiga" />
        <DataList />
      </WhiteBackground>
    </>
  );
};

export default AntExpenses;
