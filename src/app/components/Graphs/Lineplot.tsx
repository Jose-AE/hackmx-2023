import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import data from "./data.json";

function LinePlot() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const labels = data.items.map((item) => item.name);
    const values = data.items.map((item) => item.value);

    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Valores",
            data: values,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // Deshabilita el ajuste automático del tamaño
        responsive: true, // Permite que el gráfico sea responsive
        scales: {
          x: {
            title: {
              display: true,
              text: "Eje X",
            },
            min: 0,
            max: labels.length,
          },
          y: {
            title: {
              display: true,
              text: "Eje Y",
            },
            min: 0,
            max: 10, // Establece un valor máximo deseado
          },
        },
      },
    });

    chartRef.current.chart = newChart;
  }, []);

  return (
    <div>
      <h1>Gráfico de Líneas</h1>
      <canvas ref={chartRef} width="10" height="10" />
    </div>
  );
}

export default LinePlot;
