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
];

function GeneralChart() {
  const antExpenses = useSelector((state) => state.antExpense) || 100;
  const fixedExpenses = useSelector((state) => state.expense) || 300;

  function getSum(total, num) {
    return total + num.value;
  }
  const totalAntExpenses = antExpenses.reduce(getSum, 0);
  const totalExpenses = fixedExpenses.reduce(getSum, 0);

  data[0].gastosHormiga = totalAntExpenses;
  data[1].gastosFijos = totalExpenses;

  return (
    <ResponsiveContainer width="90%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="gastosFijos" fill="red"></Bar>
        <Bar dataKey="gastosHormiga" fill="orange"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GeneralChart;
