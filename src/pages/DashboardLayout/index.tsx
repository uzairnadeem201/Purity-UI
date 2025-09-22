import {
  Box,
  Flex,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { Search,Settings, Bell } from "lucide-react";
import DashboardMenu from "@/components/DashboardMenu";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Person from "../../icons/person";
const Dashboard = () => {
  const location = useLocation();
  const currentPage = (
    location.pathname.split("/").pop() || "Dashboard"
  ).replace(/^./, (c) => c.toUpperCase());

  const [activePage, setActivePage] = useState(currentPage);
  useEffect(() => {
    setActivePage(currentPage);
  }),
    [activePage];
  return (
    <Flex
      width="100vw"
      bgColor="gray.100"
      justifyContent={"flex-start"}
      padding={"4"}
      gap={"1rem"}
    >
      <Box width={"15%"} height={"50%"} boxSizing="border-box">
        <DashboardMenu />
      </Box>
      <Box width="85%" height={"100%"}>
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex direction={"column"} justifyContent={"center"}>
            <Text fontSize={".5rem"} color={"black"}>
              Pages/{activePage}
            </Text>
            <Text fontWeight="bold" fontSize=".65rem" color="black">
              {activePage}
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="1rem">
            <Flex bgColor={"white"} border={"none"}
                rounded="xl" alignItems={"center"} padding={"2px"}>
              <Search color="gray" width={"1.25rem"} height={".75rem"} />
              <Input
                border={"none"}
                placeholder="Type here..."
                size="2xs"
                color="gray"
                id="Search"
              ></Input>
            </Flex>

            <Button
              color="gray"
              variant={"plain"}
              fontSize={".75rem"}
              fontWeight={"bold"}
            >
              <Person mwidth="1rem" mheight="1rem" color="gray" /> Sign in
            </Button>
            <Settings width={"1rem"} height="1rem" color="gray" />
            <Bell width={"1rem"} height="1rem" color="gray" />
          </Flex>
        </Flex>
        <Outlet />
      </Box>
      <Footer/>
    </Flex>
  );
};

export default Dashboard;
