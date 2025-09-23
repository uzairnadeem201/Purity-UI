import { Box, Flex, Text, Switch } from "@chakra-ui/react";
import { platformSettings } from "@/data/profile";

const PlatformSettingCard = () => {
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
        Platform Settings
      </Text>
      {platformSettings.map((setting) => {
        return (
          <>
            <Text marginY={"1rem"} color="gray" fontWeight={"bold"} fontSize={".75rem"}>{setting.Text}</Text>
            <Flex direction={"column"} gap=".5rem">
                {setting.Account.map((account)=>{
                    return(
                        <Switch.Root size="md" colorPalette={"teal"}>
                <Switch.HiddenInput />
                <Switch.Control bg="gray.200" _checked={{ bg: "teal.500" }}>
                  <Switch.Thumb />
                  <Switch.Indicator></Switch.Indicator>
                </Switch.Control>
                <Switch.Label fontSize=".75rem" color={"gray.400"}>
                  {account}
                </Switch.Label>
              </Switch.Root>
                    )
                })}
              
            </Flex>
          </>
        );
      })}
    </Box>
  );
};

export default PlatformSettingCard;
