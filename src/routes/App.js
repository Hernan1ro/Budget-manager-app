import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
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
