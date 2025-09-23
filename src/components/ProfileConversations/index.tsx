import { Box, Flex, Text,Button, Image } from "@chakra-ui/react";
import { conversations } from "@/data/profile";
const ProfileConversation = () => {
  return (
    <Box
      bgColor="white"
      width={"32%"}
      height={"36vh"}
      rounded={"lg"}
      padding={"1rem"}
    >
      <Text fontWeight={"bold"} color="black">
        {" "}
        Conversations
      </Text>
      <Flex direction={"column"}>
        {conversations.map((conversation) => {
          return (
            <Flex justifyContent={"space-between"}>
              <Flex alignItems={"center"}>
                <Image src={conversation.icon} alt="avatar"></Image>
                <Flex direction={"column"}>
                  <Text fontWeight="bold" color="black">{conversation.username}</Text>
                  <Text fontSize={".75rem"} color="gray.400">{conversation.text}</Text>
                </Flex>
              </Flex>
              <Button color="teal.400" variant={"plain"}>
                Reply
              </Button>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ProfileConversation;
