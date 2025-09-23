import { Flex, Image, Box, Text, IconButton, Button } from "@chakra-ui/react";
import logo from "../../assets/dashboard.svg";
import { useState, useMemo, type FC } from "react";
import cardImg from "../../assets/dashboardicons/cardImg.svg";
import { useLocation, useNavigate } from "react-router-dom";
import dashImageUrl from "../../assets/dashboardicons/Background.svg?url";
import { Icons } from "@/icons/index.ts";

type IconTypes =
  | "Dashboard"
  | "Billing"
  | "Table"
  | "RTL"
  | "Profile"
  | "Sign in"
  | "Sign up";

interface MenuItem {
  name: IconTypes;
  icon: FC<{ color?: string }>;
}

const DashboardMenu = () => {
  const handleClick = (name: string) => {
    const page = name.toLowerCase().replace(/\s+/g, "");
    navigate(page === "signup" ? "/" : `/${page}`);
  };
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop() || "Dashboard";
  const [activeMenu, setActiveMenu] = useState<string>(currentPage);
  const navigate = useNavigate();

  const menuList: MenuItem[] = [
    { name: "Dashboard", icon: Icons.home },
    { name: "Table", icon: Icons.chart },
    { name: "Billing", icon: Icons.card },
    { name: "RTL", icon: Icons.wrench },
    { name: "Profile", icon: Icons.person },
    { name: "Sign in", icon: Icons.sharp },
    { name: "Sign up", icon: Icons.document },
  ];

  return (
    <Flex direction="column" width="full" height="100%" gap="1rem">
      <Image src={logo} alt="Logo" width="full" mb={4} />
      <Flex direction="column" width="full" height="100%" py={4} gap={4}>
        {menuList.map((item, index) => {
          const IconComp = item.icon;
          return (
            <>
              {index === 4 && (
                <Text
                  key="account-pages"
                  color="black"
                  fontSize="1rem"
                  fontWeight="bold"
                  mt={4}
                >
                  Account Pages
                </Text>
              )}
              <Flex
                key={item.name}
                width={"full"}
                alignItems="center"
                bgColor={
                  activeMenu.toLowerCase() === item.name.toLowerCase()
                    ? "white"
                    : "transparent"
                }
                gap="4"
                p="2"
                cursor="pointer"
                _hover={{ bg: "gray.200" }}
                borderRadius="lg"
                onClick={() => {
                  setActiveMenu(item.name), handleClick(item.name);
                }}
              >
                <Box
                  width="fit-content"
                  p="1"
                  bg={
                    activeMenu.toLowerCase() === item.name.toLowerCase()
                      ? "teal"
                      : "white"
                  }
                  borderRadius="lg"
                >
                  <IconComp
                    color={
                      activeMenu.toLowerCase() === item.name.toLowerCase()
                        ? "white"
                        : "teal"
                    }
                  />
                </Box>
                <Text
                  fontSize={"0.75rem"}
                  color={
                    activeMenu.toLowerCase() === item.name.toLowerCase()
                      ? "black"
                      : "gray"
                  }
                >
                  {item.name}
                </Text>
              </Flex>
            </>
          );
        })}
        <Box
          width="100%"
          bgImage={`url("${dashImageUrl}")`}
          backgroundSize="cover"
          backgroundPosition="center"
          bgRepeat="no-repeat"
          rounded="lg"
          p="1rem"
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
          <Box
            width="2rem"
            height="2rem"
            bgColor="white"
            rounded="lg"
            padding="1"
          >
            <Image
              width="1.5rem"
              height="1.5rem"
              src={cardImg}
              alt="Card icon"
            />
          </Box>

          <Flex direction="column">
            <Text fontWeight="bold">Need Help?</Text>
            <Text fontSize=".90rem">Please check our docs</Text>
          </Flex>

          <Button width="100%" rounded="lg">
            Documentation
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardMenu;
