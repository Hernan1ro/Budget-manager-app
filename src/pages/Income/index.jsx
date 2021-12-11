import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/";
import DataList from "../../containers/DataList";
import "./styles.css";

const Income = () => {
  const tipoIngresos = ["Trabajo", "Inversion", "Pasivo", "Otro"];
  return (
    <>
      <Menu />
      <WhiteBackground>
        <NewRecord page="Ingreso" options={tipoIngresos} color={"green"} />
        <DataList color="green" page="Ingreso" />
      </WhiteBackground>
    </>
  );
};

export default Income;
