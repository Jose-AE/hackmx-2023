"use client";

import { Flex } from "@chakra-ui/react";
<<<<<<< HEAD

import { Bar, Doughnut, Line } from "react-chartjs-2";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => 5),
      borderColor:'rgba(177, 116, 15, 1)',
      backgroundColor: 'rgba(177, 116, 15, 1)',
    },
    {
      label: "Dataset 2",
      data: labels.map(() => 5),
      borderColor: 'rgba(125, 175, 33, 1)',
      backgroundColor: 'rgba(125, 175, 33, 1)',
    },
  ],
};

export default function Graph() {
=======
import Scatterplot from "./Graphs/Scatterplot";
import ITable from "@/Interfaces/ITable";
import { Lineplot } from "./Graphs/Lineplot";
import { Barplot } from "./Graphs/Barchart";

export default function Graph({
  table,
  col1,
  col2,
  type,
}: {
  table: any;
  col1: string;
  col2: string;
  type: any;
}) {
  function getGraphElement() {
    if (type == "line_plot") {
      return <Lineplot table={table} col1={col1} col2={col2} />;
    }
    if (type == "scatter_plot") {
      return <Scatterplot table={table} col1={col1} col2={col2} />;
    }
    if (type == "bar_plot") {
      return <Barplot table={table} col1={col1} col2={col2} />;
    }
  }

>>>>>>> 7b38db548b1ba856da66091a031b9750a30c578d
  return (
    <>
      <Flex
        borderWidth={"5px"}
        gap={3}
        p={"10px"}
        direction={"column"}
        bg={'rgba(231, 245, 204, 1)'}
        w={"50%"}
        borderRadius={"md"}
      >
<<<<<<< HEAD
        <Line options={options} data={data} />
=======
        {getGraphElement()}
>>>>>>> 7b38db548b1ba856da66091a031b9750a30c578d
      </Flex>
    </>
  );
}
