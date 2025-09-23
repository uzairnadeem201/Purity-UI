import { Box, Flex, Text,} from "@chakra-ui/react";
import {Plus} from "lucide-react"
import ProfileProjectCard from "../ProfileProjectCard";
import { profileProjects } from "@/data/profile";

const ProfileProjects = () => {
  return (
    <Box
      padding={"1rem"}
      width={"100%"}
      minHeight={"35vh"}
      
      bgColor={"white"}
      rounded={"lg"}
      marginTop={"1rem"}
    >
      <Text fontWeight="bold" color="black">
        Projects
      </Text>
      <Text color="gray" fontSize={".75rem"}>
        Architects design houses
      </Text>

      <Flex height={"100%"} width={"100%"} gap="1rem" overflowX={"auto"}>
        {profileProjects.map((project)=>{
            return(
                <ProfileProjectCard project = {project} />
            )
        })}
        
        <Box
          width="23%"
          border="1px solid"
          borderColor="gray"
          rounded={"lg"}
          marginTop={"1rem"}
        >
          <Flex
            width={"100%"}
            height={"100%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          > 
            <Plus color="gray"/>
            <Text color="gray" fontWeight={"bold"}>Create a New Project</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileProjects;
