import {Button,Container,Flex,Text} from "@chakra-ui/react";
const Footer = () => {
  return <Flex position={"fixed"} bottom="0" width={"full"} justifyContent={"center"} alignItems={"center"} gap="64" >
    <Text fontSize={".75rem"} color="gray.600">@ 2021, Made with ❤️ by <span className="text-teal-500">Creative Tim</span> & <span className="text-teal-500">Simmmple</span> for a better web</Text>
    
      <Flex gap="1">
          <Button fontSize={".75rem"} color="gray" variant="plain">
            Creative Tim
          </Button>
          <Button fontSize={".75rem"} color="gray" variant="plain">
             Simmple
          </Button>
          <Button fontSize={".75rem"} color="gray" variant="plain">
             Blog
          </Button>
          <Button fontSize={".75rem"} color="gray" variant="plain">
             License
          </Button>
        </Flex>
    </Flex>
};

export default Footer;
