"use client";

import { Flex } from "@chakra-ui/react";

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
        <Line options={options} data={data} />
      </Flex>
    </>
  );
}

/////////////////


/////////////////
