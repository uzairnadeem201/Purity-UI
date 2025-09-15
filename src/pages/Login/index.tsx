import Header from "@/components/Header";
import {
  Flex,
  Image,
  Text,
  Input,
  Switch,
  Container,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import loginBanner from "../../assets/loginBanner.svg";
import Footer from "@/components/Footer";
const Login = () => {
  const navigate = useNavigate();
  const fields = [
    { text: "Email", type: "email" },
    { text: "Password", type: "password" },
  ];
  return (
    <Flex
      direction="column"
      alignItems="center"
      width="100vw"
      height="100vh"
      bgColor="gray.100"
    >
      <Header loginPage={true} />
      <Flex width={"full"} height={"90%"} gap="10%">
        <Flex
          width={"50%"}
          boxSizing={"border"}
          direction="column"
          gap="1"
          justifyContent={"center"}
          paddingLeft={"18%"}
        >
          <Flex direction="column" gap="1" justifyContent={"flex-start"}>
            <Text fontSize="3xl" fontWeight="bold" color="teal.500">
              Welcome Back!
            </Text>
            <Text fontSize="md" color="gray.500">
              Enter your email and password to sign in
            </Text>
          </Flex>
          <Flex
            direction="column"
            gap="4"
            marginTop="8"
            justifyContent={"center"}
            alignItems={"center"}
            width="full"
          >
            <Flex direction="column" fontWeight="normal" width="full" gap="5">
              {fields.map((field) => {
                return (
                  <Container width="full" padding={0}>
                    <Text color="gray.500">{field.text}</Text>
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
              <Text color={"gray.500"} fontWeight={"normal"}>
                Remember me
              </Text>
            </Flex>
            <Button
              bg="teal.500"
              rounded="full"
              color="white"
              size="lg"
              width="full"
              _hover={{ bg: "teal.600" }}
              onClick={()=>{navigate("/dashboard")}}
            >
              SIGN IN
            </Button>
            <Text color="gray.500" fontSize={"sm"}>
              Don't have an account?{" "}
              <span
                className="text-teal-500 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Sign up
              </span>
            </Text>
          </Flex>
        </Flex>
        <Flex
          width={"40%"}
          height={"full"}
          borderBottomLeftRadius={"lg"}
          overflow={"hidden"}
        >
          <Image width="full" src={loginBanner} alt="Login Banner" />
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Login;
