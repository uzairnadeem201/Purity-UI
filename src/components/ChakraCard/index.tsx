import {  Flex, Text, Image, Button } from "@chakra-ui/react";
import chakra from "../../assets/dashboardicons/dashboardcards/chakra.svg";
import { MoveRight } from "lucide-react";
const ChakraCard = () => {
  return (
    <Flex
          width={"59%"}
          backgroundColor={"white"}
          height={"100%"}
          padding={"1rem"}
          rounded={"lg"}
          boxSizing={"border-box"}
        >
          <Flex
            width="60%"
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Flex width="100%" direction={"column"} gap=".5rem">
              <Text color="gray" fontWeight={"bold"} fontSize=".75rem">
                Built by developers
              </Text>
              <Text color="black" fontWeight={"bold"} fontSize="1rem">
                Purity UI Dashboard
              </Text>
              <Text fontSize=".75rem" color="gray">
                From colors, cards, typography to complex elements,
                <br />
                you will find the full documentation.
              </Text>
            </Flex>

            <Button fontSize={".75rem"} color="black" alignItems="center" variant="plain">
              Read More <MoveRight />{" "}
            </Button>
          </Flex>
          <Flex width={"40%"} height={"100%"}>
            <Image rounded={"lg"} width={"100%"} height={"100%"} src={chakra} alt="chakra"></Image>
          </Flex>
        </Flex>
  );
  
}

export default ChakraCard