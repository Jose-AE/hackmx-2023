import { Button, Flex, Input, Textarea } from "@chakra-ui/react";

export default function QuestionBox() {
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
        <Textarea h={"300px"} resize={"none"} />
        <Button variant={"solid"} h={"20%"} colorScheme="blue">
          Run Query
        </Button>
      </Flex>
    </>
  );
}
