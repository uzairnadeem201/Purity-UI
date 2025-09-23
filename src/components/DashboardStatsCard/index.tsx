import type {FC} from 'react'
import {Flex,Text,IconButton,Image} from "@chakra-ui/react"
interface DashboardStatsCardProps {
  result: {
    id: number;
    text: string;
    value: number;
    percentage: string;
    icon: string;
    color: string;
  };
}


const DashboardStatsCard:FC<DashboardStatsCardProps> = ({result}) => {
  return (
    <Flex
            key={result.id}
            width="23%"
            alignItems="center"
            justifyContent="space-between"
            bgColor="white"
            paddingY=".5rem"
            paddingX={".5rem"}
            rounded="xl"
          >
            <Flex direction="column">
              <Text fontSize={".75rem"} color="gray" fontWeight="bold">
                {result.text}
              </Text>

              <Flex alignItems={"end"}>
                <Text fontSize={".75rem"} fontWeight="bold" color="black">
                  {result.value}
                </Text>
                <Text fontSize=".65rem" ml=".5rem" color={result.color}>
                  {result.percentage}
                </Text>
              </Flex>
            </Flex>

            <IconButton
              aria-label="stat-icon"
              rounded="xl"
              bgColor="teal.500"
              width="fit-content"
            >
              <Image width="1rem" src={result.icon} alt="wallet" />
            </IconButton>
          </Flex>
  )
}

export default DashboardStatsCard