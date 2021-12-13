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
    name: "Ingresos",
    ingresos: 0,
  },
];

function GeneralChart() {
  const antExpenses = useSelector((state) => state.antExpense);
  const income = useSelector((state) => state.income);

  function getSum(total, num) {
    return total + num.value;
  }
  const totalAntExpenses = antExpenses.reduce(getSum, 0);
  const totalIncome = income.reduce(getSum, 0);

  data[0].gastosHormiga = totalAntExpenses;
  data[1].ingresos = totalIncome;

  return (
    <ResponsiveContainer width="90%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="ingresos" fill="green"></Bar>
        <Bar dataKey="gastosHormiga" fill="orange"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GeneralChart;
