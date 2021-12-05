import React from "react";
import Input from "../../components/Input/index.jsx";
import "./styles.css";

const Register = () => {
  return (
    <main className="main-register">
      <h3>Registrate</h3>
      <h5>
        El camino está por delante de ti. Ya ha dado su primer paso hacia la
        transformación financiera y lo guiaremos en ese viaje
      </h5>
      <form action="">
        <Input name={"name"} type={"text"} placeholder={"Nombre"} />
        <Input name={"email"} type={"text"} placeholder={"Email"} />
        <Input name={"password"} type={"password"} placeholder={"Password"} />
      </form>
    </main>
  );
};

export default Register;
