import {Button,Container,Flex,Text} from "@chakra-ui/react";
const Footer = () => {
  return <Flex position={"fixed"} bottom="0" width={"full"} justifyContent={"center"} alignItems={"center"} gap="64" padding="2" >
    <Text fontSize={"sm"} color="gray.600">@ 2021, Made with ❤️ by <span className="text-teal-500">Creative Tim</span> & <span className="text-teal-500">Simmmple</span> for a better web</Text>
    
      <Flex gap="1">
          <Button color="gray" variant="plain">
            Creative Tim
          </Button>
          <Button color="gray" variant="plain">
             Simmple
          </Button>
          <Button color="gray" variant="plain">
             Blog
          </Button>
          <Button color="gray" variant="plain">
             License
          </Button>
        </Flex>
    </Flex>
};

export default Footer;
