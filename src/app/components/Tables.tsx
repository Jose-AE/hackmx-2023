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
    <Card
      flex="0 0 auto"
      m={"10px"}
      style={{ backgroundColor: "rgba(125, 175, 33, 1)", color: "black" }}
    >
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
      <img
        style={{ height: "250px", objectFit: "cover" }}
        src="https://png.pngtree.com/background/20210715/original/pngtree-green-simple-avocado-background-picture-image_1290601.jpg"
        alt="Descripción de la imagen"
      />
      <Flex direction={"column"}>
        <Flex
          marginTop={"20px"}
          padding="20px 30px"
          color="whitesmoke"
          borderWidth={"5px"}
          direction={"column"}
          bg="rgba(150, 98, 13, 1)"
          borderRadius={"md"}
          h={"200px"}
          w={"100%"}
          overflowX={"scroll"}
          overflowY={"hidden"}
          whiteSpace={"nowrap"}
          gap={2}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            ¿Sabías Qué?
          </div>
          <div>
            Existen más de 500 variedades de aguacates, pero las más comunes son
            Hass, Fuerte y Bacon.
          </div>
          <div>
            Los aguacates son nativos de México y América Central. Se cree que
            se cultivaban hace más de 10,000 años por las antiguas
            civilizaciones aztecas y mayas.
          </div>
          <div>
            Puedes poner una prompt como esta "Compara las exportaciones de
            aguacate en el tiempo"
          </div>
        </Flex>
      </Flex>
    </>
  );
}
