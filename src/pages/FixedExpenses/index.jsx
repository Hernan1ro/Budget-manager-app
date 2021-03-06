import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/";
import DataList from "../../containers/DataList";
import "./styles.css";

const FixedExpenses = () => {
  const options = [
    "Arriendos",
    "Mercado del mes",
    "Agua",
    "Energía",
    "Gas",
    "Colegios",
    "Internet",
    "Celular",
    "Transporte",
    "Almuerzos",
    "Gimnasio",
    "Servicios",
    "Medicos",
    "Otros",
  ];
  return (
    <>
      <Menu />
      <WhiteBackground>
        <NewRecord
          page="Gasto fijo"
          options={options}
          color="red"
          btnSave={"Agregar nuevo registro"}
        />
        <DataList color="red" page="Gasto fijo" />
      </WhiteBackground>
    </>
  );
};

export default FixedExpenses;
