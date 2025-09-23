import { Box, Flex, Text, Switch, Image } from "@chakra-ui/react";
import { user } from "@/data/profile";
import facebook from "../../assets/profile/profileIcons/facebook.svg";
import instagram from "../../assets/profile/profileIcons/instagram.svg";
import x from "../../assets/profile/profileIcons/twitter.svg";
const ProfileInformation = () => {
  return (
    <Box
      bgColor="white"
      width={"32%"}
      height={"36vh"}
      rounded={"lg"}
      padding={"1rem"}
    >
      <Text fontWeight={"bold"} color="black" marginBottom={".75rem"}>
        {" "}
        Profile Information
      </Text>
      <Text color="gray" fontSize=".75rem">
        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the short
        term (pain avoidance is creating an illusion of equality).
      </Text>

      <Box
        height="1px"
        width="100%"
        background="linear-gradient(to right, #E2E8F0, #4A5568, #E2E8F0)"
        margin={".75rem"}
        boxSizing={"border-box"}
      />
      <Flex direction={"column"} gap=".65rem" fontSize={".85rem"}>
        <Flex gap=".75rem">
          <Text color="gray" fontWeight={"bold"}>
            Full Name:
          </Text>
          <Text color="gray.400">{user[0].fullName}</Text>
        </Flex>
        <Flex gap=".75rem">
          <Text color="gray" fontWeight={"bold"}>
            Mobile:
          </Text>
          <Text color="gray.400">{user[0].mobile}</Text>
        </Flex>
        <Flex gap=".75rem">
          <Text color="gray" fontWeight={"bold"}>
            Email:
          </Text>
          <Text color="gray.400">{user[0].email}</Text>
        </Flex>
        <Flex gap=".75rem">
          <Text color="gray" fontWeight={"bold"}>
            Location
          </Text>
          <Text color="gray.400">{user[0].location}</Text>
        </Flex >
          <Flex gap=".75rem">
            <Text color="gray" fontWeight={"bold"}>
              Social Media:
            </Text>
            <Flex gap=".75rem">
              <Image src={instagram} alt="instagram"></Image>
              <Image src={facebook} alt="facebood"></Image>
              <Image src={x} alt="x"></Image>
            </Flex>
          </Flex>
        </Flex>
    </Box>
  );
};

export default ProfileInformation;
