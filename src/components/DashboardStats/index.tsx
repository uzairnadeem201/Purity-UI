import { Flex, Text, IconButton, Image, } from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import wallet from "../../assets/dashboardicons/dashboardstats/wallet.svg";
import cart from "../../assets/dashboardicons/dashboardstats/cart.svg";
import document from "../../assets/dashboardicons/dashboardstats/document.svg";
import globe from "../../assets/dashboardicons/dashboardstats/globe.svg";


interface stat {
  id: number;
  text: string;
  value: number;
  percentage: string;
  icon: string;
  color: string;
}

  

const DashboardStats = () => {
    const stats: stat[] = [
    {
      id: 1,
      text: "Today's Money",
      value: 50000,
      percentage: "5%",
      icon: wallet,
      color: "white",
    },
    {
      id: 2,
      text: "Today's User",
      value: 24000,
      percentage: "10%",
      icon: cart,
      color: "white",
    },
    {
      id: 3,
      text: "New Clients",
      value: 5,
      percentage: "15%",
      icon: document,
      color: "white",
    },
    {
      id: 4,
      text: "Total Sales",
      value: 2403,
      percentage: "2%",
      icon: globe,
      color: "white",
    },
  ];
  const previousStats = useRef<stat[]>([
    {
      id: 1,
      text: "Today's Money",
      value: 30000,
      percentage: "5%",
      icon: wallet,
      color: "white",
    },
    {
      id: 2,
      text: "Today's User",
      value: 260000,
      percentage: "10%",
      icon: cart,
      color: "white",
    },
    {
      id: 3,
      text: "New Clients",
      value: 15,
      percentage: "15%",
      icon: document,
      color: "white",
    },
    {
      id: 4,
      text: "Total Sales",
      value: 200,
      percentage: "2%",
      icon: globe,
      color: "white",
    },
  ]);
  
  const results = useMemo(() => {
    return stats.map((stat, index) => {
      const prev = previousStats.current[index];
      const isIncreased = prev ? stat.value > prev.value : false;

      return {
        ...stat,
        color: isIncreased ? "green" : "red",
        percentage: (isIncreased ? "+" : "-") + stat.percentage,
      };
    });
  }, [stats]);
  return (
    <Flex width="100%" justifyContent="space-between">
        {results.map((result) => (
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
        ))}
      </Flex>
  )
}

export default DashboardStats