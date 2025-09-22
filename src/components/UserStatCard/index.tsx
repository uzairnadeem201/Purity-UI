import { Box, Flex, Text, Image, Progress } from "@chakra-ui/react";
import { userChartData } from "@/data/dashboard";
import UserChart from "@/components/UserChart";
const UserStatCard = () => {
  
  return (
    <Flex
      width="39%"
      height={"100%"}
      backgroundColor={"white"}
      padding={"1rem"}
      rounded={"lg"}
      direction={"column"}
    >
      <Box
        borderRadius="xl"
        backgroundGradient="linear(248deg, #31386A 0%, #151928 100%)"
        width={"100%"}
        height={"100%"}
      >
        <UserChart />
      </Box>
      <Flex height={"40%"} direction={"column"} gap="1rem">
        <Flex direction={"column"}>
          <Text color="black" fontWeight={"bold"} fontSize={"1rem"}>
            Active User
          </Text>
          <Text fontSize=".75rem" color="gray">
            <Text as="span" color="green" fontWeight={"bold"}>
              (+23) more{" "}
            </Text>{" "}
            since last week
          </Text>
        </Flex>

        <Flex width={"100%"} justifyContent={"space-between"}>
          {userChartData.map((data) => {
            return (
              <Flex
                direction="column"
                textAlign={"flex-start"}
                justifyContent={"flex-start"}
                height={"fit-content"}
                gap=".2rem"
              >
                <Flex align="center" justify="center">
                  <Image
                    width={"24px"}
                    height={"24px"}
                    src={data.img}
                    alt="img"
                  />
                  <Text fontWeight={"bold"} fontSize={".75rem"} color="gray">
                    {data.title}
                  </Text>
                </Flex>
                <Text fontWeight="bold" fontSize={".75rem"} color="black">
                  {data.value}
                </Text>
                <Progress.Root size="xs">
                  <Progress.Track bg="white">
                    <Progress.Range bg="teal.300"/>
                  </Progress.Track>
                </Progress.Root>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserStatCard;
