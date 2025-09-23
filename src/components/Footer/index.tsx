import {Button,Flex,Text} from "@chakra-ui/react";
const Footer = () => {
  return <Flex width={"100vw"} justifyContent={"center"} alignItems={"center"} gap="64"  zIndex={10} backgroundColor="gray.100">
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
