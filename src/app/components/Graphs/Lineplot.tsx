import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Serie de Tiempo",
    },
  },
};

export function Lineplot({
  table,
  col1,
  col2,
}: {
  table: any;
  col1: string; // Date column
  col2: string;
}) {
  // Swap col1 and col2 if col2 is date
  if (col2 == "fecha" || col2 == "date") {
    [col1, col2] = [col2, col1];
  }

  const labels = table.map((item: any) => item["date"]);

  const data = {
    labels,
    datasets: [
      {
        label: `${col2} a través del tiempo`,
        data: table.map((item: any) => parseFloat(item[col2])),
        borderColor: "rgb(158, 85, 54)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
