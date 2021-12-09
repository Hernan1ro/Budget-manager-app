import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Gastos Hormiga",
    gastosHormiga: 120,
    keystroke: 1000,
  },
  {
    name: "Gastos fijos",
    costoFijos: 300,
    keystroke: 1000,
  },
  {
    name: "Ingresos",
    ingresos: 400,
    keystroke: 1000,
  },
];

function App() {
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
