import signupLogo from "../../assets/signuplogo.svg";
import loginLogo from "../../assets/login.svg";
import { Flex, Button, Container } from "@chakra-ui/react";
import type {FC} from "react"
import { Box, KeyRound, User, CircleUser } from "lucide-react";
interface HeaderProps {
  loginPage?: boolean;
}

const Header:FC<HeaderProps> = ({loginPage}) => {
  return (
    <Container
      position="absolute"
      top="4"
      display="flex"
      justifyContent="center"
      w="full"
    >
      <Flex
        alignItems="center"
        color="white"
        justifyContent="center"
        w="fit-content"
        padding={"4"}
        borderRadius={"lg"}
        gap="12"
        bgGradient={!loginPage ? "transparent" : "linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.80) 100%)"}
      > { !loginPage ?
          <img src={signupLogo} alt="Main Logo" />
         : <img src={loginLogo} alt="Main Logo" />
        }

        <Flex gap="2">
          <Button color={loginPage ? "black" : "white"} variant="plain">
            <Box /> DASHBOARD
          </Button>
          <Button color={loginPage ? "black" : "white"} variant="plain">
            <User /> PROFILE
          </Button>
            <Button color={loginPage ? "black" : "white"} variant="plain">
            <CircleUser /> SIGN UP
          </Button>
          <Button color={loginPage ? "black" : "white"} variant="plain">
            <KeyRound /> SIGN IN
          </Button>
        </Flex>

        <Button rounded="full" bg={!loginPage?"white":"linear-gradient(to bottom,#313860 0%, #151928 100%)"} color={!loginPage?"black":"white"} size="lg">
          Free Download
        </Button>
      </Flex>
    </Container>
  );
};

export default Header;
