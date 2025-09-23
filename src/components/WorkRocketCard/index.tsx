import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { MoveRight } from "lucide-react";
import brooke from "../../assets/dashboardicons/dashboardcards/brooke.svg";
const WorkWithRocket = () => {
  return (
    <Flex
          width={"39%"}
          backgroundColor={"white"}
          padding={"1rem"}
          rounded={"lg"}
        >
          <Box
            backgroundImage={`url(${brooke})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            width="100%"
            height="100%"
            boxSizing="border-box"
            rounded="lg"
            padding={"1rem"}
          >
            <Flex
              direction={"column"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              height={"100%"}
              gap=".5rem"
            >
              <Flex
                direction={"column"}
                width={"100%"}
                height={"50%"}
                gap=".5rem"
              >
                <Text fontSize="1rem" fontWeight="bold">
                  Work With The Rockets
                </Text>
                <Text fontSize={".75rem"}>
                  Wealth creation is an evolutionarily recent positive-sum game.
                  <br />
                  It is all about who take the opportunity first.
                </Text>
              </Flex>
              <Button fontSize=".75rem" color="white"alignItems="center" variant="plain">
                Read More <MoveRight />{" "}
              </Button>
            </Flex>
          </Box>
        </Flex>
  )
}

export default WorkWithRocket