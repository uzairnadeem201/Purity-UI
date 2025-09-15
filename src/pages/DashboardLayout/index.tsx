import { Box, Flex} from "@chakra-ui/react";
import DashboardMenu from "@/components/DashboardMenu";
import { Outlet } from "react-router-dom"
const Dashboard = () => {
  return (
    <Flex width="100vw" height="100vh" bgColor="gray.100" justifyContent={"flex-start"}>
      <Box width={"15%"} height={"50%"} padding={"4"} boxSizing="border-box">
        <DashboardMenu />
      </Box>
      <Box width="85%" height={"100%"}>
          <Outlet/>
      </Box>
    </Flex>
  );
};

export default Dashboard;
