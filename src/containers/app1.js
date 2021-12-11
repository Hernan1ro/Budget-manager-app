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
    name: "Gastos fijos",
    costoFijos: 0,
    keystroke: 1000,
  },
  {
    name: "Ingresos",
    ingresos: 0,
    keystroke: 1000,
  },
];

function App() {
  const antExpenses = useSelector((state) => state.antExpense);
  const income = useSelector((state) => state.income);
  const fixedExpenses = useSelector((state) => state.fixedExpense);

  const totalAntExpense = antExpenses.reduce((sum, item) => sum + item.value);
  const totalFixedExpense = fixedExpenses.reduce(
    (sum, item) => sum + item.value
  );
  const totalIncome = income.reduce((sum, item) => sum + item.value);

  data[0].ingresos = totalAntExpense;
  data[1].ingresos = totalFixedExpense;
  data[2].ingresos = totalIncome;

  return (
    <ResponsiveContainer width="90%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="ingresos" fill="green"></Bar>
        <Bar dataKey="costoFijos" fill="red"></Bar>
        <Bar dataKey="gastosHormiga" fill="orange"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default App;
