import { Flex, Text, IconButton, Image, } from "@chakra-ui/react";
import { useMemo} from "react";
import {stats,previousStats} from "../../data/dashboard"
import DashboardStatsCard from "../DashboardStatsCard";

const DashboardStats = () => {
    
  
  const results = useMemo(() => {
    return stats.map((stat, index) => {
      const prev = previousStats[index];
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
            <DashboardStatsCard result={result}/>
        ))}
      </Flex>
  )
}

export default DashboardStats