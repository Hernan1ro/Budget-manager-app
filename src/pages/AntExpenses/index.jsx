import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/";
import DataList from "../../containers/DataList";
import "./styles.css";

const AntExpenses = () => {
  let btnSave = "Agregar nuevo ingreso";
  const income = false;
  if (income.editMode) {
    btnSave = "Guardar cambios";
  } else {
    btnSave = "Agregar nuevo ingreso";
  }
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
        <NewRecord
          page="Gasto hormiga"
          options={options}
          color="orange"
          btnSave={btnSave}
        />
        <DataList color="orange" page="Gasto hormiga" />
      </WhiteBackground>
    </>
  );
};

export default AntExpenses;
