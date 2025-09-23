import { Image, Flex, Text ,Box} from "@chakra-ui/react";
import Header from "@/components/Header";
import SignupImage from "../../assets/signupImg.svg";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router";
const Signup = () => {
  const navigate = useNavigate();
  function handleSignup() {
    navigate("/signin");
  }
  return (
    <>
    <Flex
      direction="column"
      alignItems="center"
      width="100vw"
      height="96vh"
      bgColor="gray.100"
    >
      <Flex position="relative" width="full" height={"50%"}>
        <Image width={"100%"} src={SignupImage} alt="Signup"/>
      </Flex>
      <Header />
      <Flex
        position="absolute"
        direction="column"
        alignItems="center"
        gap="1"
        top="12.5%"
        width="full"
      >
        <Text fontSize="3xl" fontWeight="bold">
          Welcome!
        </Text>
        <Box>
          <Text fontSize="md" textAlign="left">
            Use these awesome forms to login or create new
          </Text>
          <Text fontSize="md" textAlign="center">
            account into your project
          </Text>
        </Box>
          
      </Flex>
      <SignupForm onSignupSuccess={handleSignup} />
    </Flex>
    <Footer />
    </>
  );
};

export default Signup;
