import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import DashboardStats from "@/components/DashboardStats";
import ChakraCard from "@/components/ChakraCard";
import UserStatCard from "@/components/UserStatCard";
import OrderOverview from "@/components/OrderOverview";
import Projects from "@/components/Projects";

import WorkWithRocket from "@/components/WorkRocketCard";
import MonthsChartCard from "@/components/MonthsChartCard";
const Dashboard = () => {
  return (
    <Flex
      width={"100%"}
      direction="column"
      paddingY={"1rem"}
      gap={"1rem"}
      overflowY={"auto"}
    >
      <DashboardStats />
      <Flex width={"100%"}  justifyContent={"space-between"}>
        <ChakraCard />
        <WorkWithRocket />
      </Flex>
      <Flex
        width={"100%"}
        height={"40vh"}
        gap="1rem"
        justifyContent={"space-between"}
      >
        <UserStatCard />
        <MonthsChartCard />
      </Flex>
      <Flex width={"100%"} height={"fit-content"} gap="1rem">
        <Box width="65%">
          <Projects/>
        </Box>
        <Flex
          width={"35%"}
          height={"100%"}
          rounded={"lg"}
          bgColor={"white"}
          padding={"1rem"}
          direction={"column"}
          gap=".5rem"
        >
          <Flex direction={"column"} >
            <Text fontSize={".75rem"} color="black" fontWeight={"bold"}>
              Order's Overview
            </Text>
            <div>
              <Text fontSize={".75rem"} color="gray">
                <Text as="span" color="green" fontWeight={"bold"}>
                  (+5)
                </Text>{" "}
                this month
              </Text>
            </div>
          </Flex>
          <OrderOverview/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
