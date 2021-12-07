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
        <NewRecord page="Ingreso fijo" options={options} color="red" />
        <DataList color="red" />
      </WhiteBackground>
    </>
  );
};

export default FixedExpenses;
