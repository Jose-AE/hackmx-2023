"use client";

import { Button, Center, Flex } from "@chakra-ui/react";
import QuestionBox from "./components/QuestionBox";
import Tables from "./components/Tables";
import Graph from "./components/Graph";
import { useEffect, useState } from "react";
import ITable from "@/Interfaces/ITable";

export default function Home() {
  const [loadedTables, setLoadedTables] = useState<ITable[]>([]);

  //states to store chatgpt response
  const [selectedTable, setSelectedTable] = useState<ITable | null>(null);
  const [col1, setCol1] = useState<string | null>(null);
  const [col2, setCol2] = useState<string | null>(null);

  //for testting
  useEffect(() => {
    setSelectedTable(loadedTables[0]);
    setCol1(loadedTables[0]?.cols[0]);
    setCol2(loadedTables[0]?.cols[1]);
  }, [loadedTables]);

  return (
    <>
      <Flex direction={"column"} h="100vh" p={"20px"}>
        <Tables loadedTables={loadedTables} setLoadedTables={setLoadedTables} />
        <Flex h={"100%"} gap={3} mt={"10px"}>
          <QuestionBox />

          {selectedTable && col1 && col2 ? (
            <Graph table={selectedTable} col1={col1} col2={col2} />
          ) : (
            <Flex
              borderWidth={"5px"}
              gap={3}
              p={"10px"}
              bg={"gray.100"}
              w={"50%"}
              borderRadius={"md"}
            ></Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
}
