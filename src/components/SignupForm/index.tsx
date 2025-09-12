import { IconButton , Switch, Button, Container,Flex,Text,Input} from "@chakra-ui/react";
import apple from "../../assets/socialicons/apple.svg";
import google from "../../assets/socialicons/google.png";
import facebook from "../../assets/socialicons/facebook.svg";
const SignupForm = () => {
  const buttons = [
    { icon: apple, alt: "Apple" },
    { icon: google, alt: "Google" },
    { icon: facebook, alt: "Facebook" },
  ];
  const fields = [
    { text: "Name", type: "text" },
    { text: "Email", type: "email" },
    { text: "Password", type: "password" },
  ];
  return (
      <Flex position="absolute" top="25%" direction="column" alignItems="center" gap="4" color="black" bgColor="white" borderRadius="2xl" padding="8" width={"full"} maxW="md" >
        <Text fontWeight="bold">Register with</Text>
        <Flex gap="4" width="100%" alignItems="center" justifyContent={"center"}>
          {buttons.map((button) => (
              <IconButton
                key={button.alt}
                variant="outline"
                size="lg"
                borderColor="blackAlpha.300"
              >
                <img src={button.icon} alt={button.alt} className="w-5 h-5" />
              </IconButton>
          ))}
        </Flex>
        <Text color="gray.500" fontWeight="bold">or</Text>
        <Flex direction="column" fontWeight="normal" width="full" gap="5">
          {fields.map((field) => {
            return (
              <Container width="full" padding={0}>
                <Text>{field.text}</Text>
                <Input
                  id={field.text}
                  type={field.type}
                  placeholder={field.text}
                  borderColor="blackAlpha.300"
                  width="full"
                />
              </Container>
            );
          })}
        </Flex>
        <Flex gap="1" alignItems="center" width={"full"}>
          <Switch.Root size="md" colorPalette={"teal"}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
          <Text color={"gray.500"} fontWeight={"normal"}>Remember me</Text>
        </Flex>
          <Button  bg="teal.500"  rounded="full"  color="white" size="lg" width="full" _hover={{ bg: "teal.600" }}>
            SIGN UP
          </Button>
          <Text color="gray.500" fontSize={"sm"}>
            Already have an account? <span className="text-teal-500">Sign In</span>
          </Text>
        
      </Flex>
  );
};
export default SignupForm;
