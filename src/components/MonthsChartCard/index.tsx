import {Flex,Text} from "@chakra-ui/react"
import MonthCharts from "@/components/MonthChart";
const MonthsChartCard = () => {
  return (
   <Flex
          width="59%"
          height={"100%"}
          backgroundColor={"white"}
          padding={"1rem"}
          rounded={"lg"}
          direction={"column"}
        >
          <Text color="black" fontWeight={"bold"} fontSize={"1rem"}>
            Sales overview
          </Text>
          <Text fontSize={".75rem"} color="gray">
            <Text as="span" color="green" fontWeight={"bold"}>
              (+5) more{" "}
            </Text>{" "}
            in 2025
          </Text>
          <MonthCharts />
        </Flex>
  )
}

export default MonthsChartCard