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
  const [plotType, setPlotType] = useState<string | null>(null);

  const [mainTable, setMainTable] = useState<any>(null);
  const [table2, setTable2] = useState<any>(null);

  async function getTable() {
    const res = await fetch("/api/main-table");
    const table = await res.json();

    const res2 = await fetch("/api/tabla-2");
    let table2 = await res2.json();
    table2 = table2.sort((a: any, b: any) => a["date"] - b["date"]);
    setMainTable(table);
    setTable2(table2);
  }

  //for testting
  useEffect(() => {
    getTable();
  }, []);

  const db = {
    comparison_table: mainTable,
    aguacate_mexico: table2,
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
            setPlotType={setPlotType}
          />

          {selectedTable && col1 && col2 ? (
            <Graph
              table={db[selectedTable]}
              col1={col1}
              col2={col2}
              type={plotType}
            />
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
