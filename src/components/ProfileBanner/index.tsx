import { Container, Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import {useState} from "react"
import background from "../../assets/profile/background.svg";
import background2 from "../../assets/profile/background2.svg";
import user from "../../assets/profile/user.svg";
import { buttons } from "../../data/profile";


const ProfileBanner = () => {
    function handleActiveButton(button:string){
      setActiveButton(button)
  }
  const [activeButton,setActiveButton] = useState("")
  return (
    <Box width={"100%"} height={"30%"} position={"relative"}>
        <Box
          position="absolute"
          top={-12}
          left={0}
          width="100%"
          height="100%"
          bgImage={`url(${background})`}
          bgSize="cover"
          backgroundPosition="center"
          rounded="lg"
          zIndex={-1}
          padding={0}
        />
        <Box
          position={"absolute"}
          width="100%"
          height="30%"
          bottom={"0"}
          paddingX={"1rem"}
        >
          <Box
            width={"100%"}
            height={"100%"}
            bgImage={`url(${background2})`}
            bgSize="cover"
            backgroundPosition="center"
            rounded={"2xl"}
            overflow={"hidden"}
            boxSizing={"border-box"}
            padding={"1rem"}
          >
            <Flex
              width={"100%"}
              height={"100%"}
              justifyContent={"space-between"}
            >
              <Flex
                width="fit-content"
                height={"100%"}
                gap="1rem"
                alignItems={"center"}
              >
                <Box height={"100%"}>
                  <Image height="100%" src={user} alt="user"></Image>
                </Box>
                <Flex direction={"column"}>
                  <Text color="black" fontWeight={"bold"}>
                    Esthera Jackson
                  </Text>
                  <Text color="gray" fontSize=".75rem">
                    estherajackson@gmail.com
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="1rem">
                {buttons.map((button) => {
                  return (
                    <Button rounded="lg" variant={activeButton === button.text.toLowerCase() ? "solid" : "ghost"} onClick={()=>handleActiveButton(button.text.toLowerCase())} color="black" _hover={{ background: "white" }}>
                      <Flex gap=".5rem">
                        <Image src={button.icon} alt="button"></Image>
                        <Text fontWeight={"bold"} fontSize={".75rem"}>{button.text}</Text>
                      </Flex>
                    </Button>
                  );
                })}
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
  )
}

export default ProfileBanner