"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import Papa from "papaparse";
import ITable from "@/Interfaces/ITable";

function TableInfo({ name, cols }: { name: string; cols: string[] }) {
  return (
    <Card flex="0 0 auto" m={"10px"}>
      <CardHeader pb={"0"}>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <Box>
          <Heading mb={"10px"} size="xs">
            Columns
          </Heading>
          <Flex maxW={"250px"} flexWrap="wrap" gap={"5px"}>
            {cols.map((colName: string, i: number) => (
              <Badge key={i}>{colName}</Badge>
            ))}
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}

export default function Tables({
  loadedTables,
  setLoadedTables,
}: {
  loadedTables: any;
  setLoadedTables: any;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddTableButton = () => {
    fileInputRef.current?.click();
  };

  const handleLoadCSV = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      Papa.parse(selectedFile, {
        complete: (result) => {
          const tableToAdd: ITable = {
            name: selectedFile.name.slice(0, -4),
            cols: result.meta.fields as any,
            data: result.data as any,
          };

          //add table to loaded tables
          setLoadedTables((prevArray: ITable[]) => [...prevArray, tableToAdd]);
          //console.log("Parsed Result:", tableToAdd);
        },
        header: true,
      });

      // You can perform further actions with the selected file here
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleLoadCSV}
      />

      <Flex direction={"column"}>
        <Button
          onClick={handleAddTableButton}
          leftIcon={<BiPlusCircle />}
          w={"150px"}
          colorScheme="green"
          mb={"10px"}
        >
          Add Table
        </Button>
        <Flex
          borderWidth={"5px"}
          direction={"row"}
          bg={"gray.100"}
          borderRadius={"md"}
          h={"200px"}
          w={"100%"}
          overflowX={"scroll"}
          overflowY={"hidden"}
          whiteSpace={"nowrap"}
        >
          {loadedTables.map((table: ITable, i: number) => (
            <TableInfo key={i} cols={table.cols} name={table.name} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
