import {Button,Flex,Text} from "@chakra-ui/react";
const Footer = () => {
  return <Flex width={"100vw"} alignItems={"center"} justifyContent={"space-between"} zIndex={10} backgroundColor="gray.100" height={"10"}>
    <Text hideBelow={"sm"} fontSize={{base:".75rem",sm:".5rem",lg:".75rem"}} color="gray.600">@ 2021, Made with ❤️ by <span className="text-teal-500">Creative Tim</span> & <span className="text-teal-500">Simmmple</span> for a better web</Text>
    
      <Flex hideBelow={"sm"} gap="1" alignItems={"center"}>
          <Button fontSize={{base:".75rem",sm:".5rem",lg:".75rem"}} color="gray" variant="plain">
            Creative Tim
          </Button>
          <Button fontSize={{base:".75rem",sm:".5rem",lg:".75rem"}} color="gray" variant="plain">
             Simmple
          </Button>
          <Button fontSize={{base:".75rem",sm:".5rem",lg:".75rem"}} color="gray" variant="plain">
             Blog
          </Button>
          <Button fontSize={{base:".75rem",sm:".5rem",lg:".75rem"}} color="gray" variant="plain">
             License
          </Button>
        </Flex>
    </Flex>
};

export default Footer;
