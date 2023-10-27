import { Flex } from "@chakra-ui/react";
import QuestionBox from "./components/QuestionBox";
import Tables from "./components/Tables";
import Graph from "./components/Graph";

export default function Home() {
  return (
    <>
      <Flex direction={"column"} h="100vh" p={"20px"}>
        <Tables />
        <Flex h={"100%"} gap={3} mt={"10px"}>
          <QuestionBox />
          <Graph />
        </Flex>
      </Flex>
    </>
  );
}
