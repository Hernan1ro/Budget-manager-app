import React, { useEffect } from "react";
import Chart from "../components/Chart";

export default function App() {
  const [chartData, setChartData] = React.useState({});
  let Chart;
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("http://localhost:4000/data");
      const data = await res.json();
      console.data(data);
      Chart = {
        labels: data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data.map((crypto) => crypto.value),
            backgroundColor: [
              "#ffbb11",
              "#C0C0C0",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          },
        ],
      };
      setChartData(Chart);
    };
    fetchPrices();
  }, []);

  return (
    <div className="App">
      <Chart chartData={chartData} />
    </div>
  );
}
