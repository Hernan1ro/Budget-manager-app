import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const data = [
  {
    name: "Gastos Hormiga",
    gastosHormiga: 0,
  },
  {
    name: "Gastos fijos",
    gastosFijos: 0,
  },
  {
    name: "Ingresos",
    ingresos: 0,
  },
];

function GeneralChart() {
  const objectiveAlert = withReactContent(Swal);

  const antExpenses = useSelector((state) => state.antExpense) || 100;
  const income = useSelector((state) => state.income) || 200;
  const fixedExpenses = useSelector((state) => state.expense) || 300;

  function getSum(total, data) {
    return total + data.value;
  }
  const totalAntExpenses = antExpenses.reduce(getSum, 0);
  const totalIncome = income.reduce(getSum, 0);
  const totalExpenses = fixedExpenses.reduce(getSum, 0);

  data[0].gastosHormiga = totalAntExpenses;
  data[1].gastosFijos = totalExpenses;
  data[2].ingresos = totalIncome;

  React.useEffect(() => {
    if (totalExpenses > totalIncome) {
      objectiveAlert.fire({
        icon: "warning",
        title: "Revisa tus finanzas",
        text: "Tus gastos son mayores a tus ingresos",
        confirmButtonColor: "#f71000",
      });
    }
  }, []);

  return (
    <ResponsiveContainer width="90%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="ingresos" fill="green"></Bar>
        <Bar dataKey="gastosFijos" fill="red"></Bar>
        <Bar dataKey="gastosHormiga" fill="orange"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GeneralChart;
