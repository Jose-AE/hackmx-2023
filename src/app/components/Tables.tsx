import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiPlusCircle } from "react-icons/bi";

function TableInfo() {
  return (
    <Card flex="0 0 auto" m={"10px"}>
      <CardHeader pb={"0"}>
        <Heading size="md">TABLE_NAME</Heading>
      </CardHeader>

      <CardBody>
        <Box>
          <Heading mb={"10px"} size="xs">
            Rows
          </Heading>
          <Flex maxW={"250px"} flexWrap="wrap" gap={"5px"}>
            <Badge>ROW_NAME</Badge>
            <Badge>ROW_NAME</Badge>
            <Badge>ROW_NAME</Badge>
            <Badge>ROW_NAME</Badge>
            <Badge>ROW_NAME</Badge>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}

export default function Tables() {
  return (
    <>
      <Flex direction={"column"}>
        <Button
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
          <TableInfo />
          <TableInfo />
          <TableInfo />
          <TableInfo />
          <TableInfo />
          <TableInfo />
          <TableInfo />
          <TableInfo />
        </Flex>
      </Flex>
    </>
  );
}
