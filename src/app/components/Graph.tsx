// "use client";

import { Flex } from "@chakra-ui/react";
import Scatterplot from "./Graphs/Scatterplot";
import ITable from "@/Interfaces/ITable";

export default function Graph({
  table,
  col1,
  col2,
}: {
  table: ITable;
  col1: string;
  col2: string;
}) {
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
        <Scatterplot table={table} col1={col1} col2={col2} />
      </Flex>
    </>
  );
}
