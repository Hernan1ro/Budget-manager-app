import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import NewRecord from "../../containers/NewRecord/";
import DataList from "../../containers/DataList";
import { useSelector } from "react-redux";
import "./styles.css";

const Income = () => {
  const tipoIngresos = ["Trabajo", "Inversion", "Pasivo", "Otro"];
  return (
    <>
      <Menu />
      <WhiteBackground>
        <NewRecord
          page="Ingreso"
          options={tipoIngresos}
          color={"green"}
          btnSave={"Agregar nuevo registro"}
        />
        <DataList color="green" page="Ingreso" />
      </WhiteBackground>
    </>
  );
};

export default Income;
