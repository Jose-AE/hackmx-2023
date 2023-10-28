// "use client";

import { Flex } from "@chakra-ui/react";
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
  type: string;
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

  return (
    <>
      <Flex
        borderWidth={"5px"}
        gap={3}
        p={"10px"}
        direction={"column"}
        bg={"gray.100"}
        w={"50%"}
        borderRadius={"md"}
      >
        {getGraphElement()}
      </Flex>
    </>
  );
}
