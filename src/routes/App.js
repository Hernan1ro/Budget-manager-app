import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "../layout/Background";
import Home from "../pages/Home/";
import Login from "../pages/Login/";
import Register from "../pages/Register/";

function App() {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
