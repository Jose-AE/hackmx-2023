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
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [col1, setCol1] = useState<string | null>(null);
  const [col2, setCol2] = useState<string | null>(null);

  const [mainTable, setMainTable] = useState<any>(null);

  async function getTable() {
    const res = await fetch("/api/main-table");
    const table = await res.json();
    setMainTable(table);
  }

  //for testting
  useEffect(() => {
    getTable();
  }, []);

  const db = {
    comparison_table: mainTable,
  };

  return (
    <>
      <Flex direction={"column"} h="100vh" p={"20px"}>
        <Tables loadedTables={loadedTables} setLoadedTables={setLoadedTables} />
        <Flex h={"100%"} gap={3} mt={"10px"}>
          <QuestionBox
            setSelectedTable={setSelectedTable}
            setCol1={setCol1}
            setCol2={setCol2}
          />

          {selectedTable && col1 && col2 ? (
            <Graph table={db[selectedTable]} col1={col1} col2={col2} />
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
