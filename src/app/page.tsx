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

  function sortByDate(a: any, b: any) {
    // Extract year and month from the date strings
    const [yearA, monthA] = a.date.split("/");
    const [yearB, monthB] = b.date.split("/");

    // Compare years
    if (yearA !== yearB) {
      return parseInt(yearA) - parseInt(yearB);
    }

    // If years are the same, compare months
    return parseInt(monthA) - parseInt(monthB);
  }

  async function getTable() {
    const res = await fetch("/api/main-table");
    let table = await res.json();
    table = table.sort(sortByDate);

    const res2 = await fetch("/api/tabla-2");
    let table2 = await res2.json();
    table2 = table2.sort(sortByDate);
    setMainTable(table);
    setTable2(table2);
  }

  //for testting
  useEffect(() => {
    getTable();
  }, []);
  console.log(mainTable);

  const db = {
    comparison_table: mainTable,
    aguacate_mexico: table2,
  };

  return (
    <>
      <Flex direction={"column"} p={"20px"}>
        <Tables />
        <Flex gap={3} mt={"5px"} direction="column" alignItems={"center"}>
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
              height={"500px"}
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
