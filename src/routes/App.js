import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Background from "../layout/Background/index";
import Home from "../pages/Home/";
import Login from "../pages/Login/";
import Register from "../pages/Register/";
import General from "../pages/General";
import AntExpenses from "../pages/AntExpenses";
import FixedExpenses from "../pages/FixedExpenses";
import Income from "../pages/Income";
import ObjectiveMonth from "../pages/ObjectiveMonth";
import NotFound from "../pages/NotFound";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => state);

  return (
    <Background>
      <BrowserRouter>
        <Routes>
          {!auth && (
            <Route path="/general" element={<Navigate to="/login" />} />
          )}
          {!auth && (
            <Route path="/gastos-hormiga" element={<Navigate to="/login" />} />
          )}
          {!auth && <Route path="/gastos" element={<Navigate to="/login" />} />}
          {!auth && (
            <Route path="/ingresos" element={<Navigate to="/login" />} />
          )}
          {!auth && (
            <Route path="/objetivos" element={<Navigate to="/login" />} />
          )}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/general" element={<General />} />
          <Route path="/gastos-hormiga" element={<AntExpenses />} />
          <Route path="/gastos" element={<FixedExpenses />} />
          <Route path="/ingresos" element={<Income />} />
          <Route path="/objetivos" element={<ObjectiveMonth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
