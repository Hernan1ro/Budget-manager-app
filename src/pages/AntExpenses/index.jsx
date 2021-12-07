import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/";
import DataList from "../../containers/DataList";
import "./styles.css";

const AntExpenses = () => {
  const options = [
    "Diversion",
    "Snacks",
    "Regalos",
    "Bebidas",
    "Antojos",
    "Otros",
  ];
  return (
    <>
      <Menu />
      <WhiteBackground>
        <NewRecord page="Gasto hormiga" options={options} color="orange" />
        <DataList />
      </WhiteBackground>
    </>
  );
};

export default AntExpenses;
