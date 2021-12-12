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
    keystroke: 1000,
  },
  {
    name: "ahorros",
    ahorros: 0,
    keystroke: 1000,
  },
];

function Chart1() {
  const antExpenses = useSelector((state) => state.antExpense) || 100;
  const savings = useSelector((state) => state.monthObjectives.savings);

  function getSum(total, num) {
    return total + num.value;
  }

  const totalAntExpenses = antExpenses.reduce(getSum, 0);

  data[0].gastosHormiga = totalAntExpenses;
  data[1].ahorros = savings;

  return (
    <ResponsiveContainer width="90%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="ahorros" fill="green"></Bar>
        <Bar dataKey="gastosHormiga" fill="orange"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart1;
