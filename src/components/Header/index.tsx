import signupLogo from "../../assets/signupLogo.svg";
import loginLogo from "../../assets/login.svg";
import { Flex, Button, Container } from "@chakra-ui/react";
import type {FC} from "react"
import { Box, KeyRound, User, CircleUser } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  loginPage?: boolean;
}

const Header:FC<HeaderProps> = ({loginPage}) => {
  function onClickHandle(page:string){
    navigate(page)
  }
  const navigate = useNavigate();
  return (
    <Container
      position="absolute"
      top={ "4" }
      display="flex"
      justifyContent="center"
      width="100vw"
      hideBelow="lg"
    >
      <Flex
        alignItems="center"
        color="white"
        justifyContent="space-between"
        width={"100vw"}
        padding={"4"}
        borderRadius={"lg"}
        bgGradient={!loginPage ? "transparent" : "linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.80) 100%)"}
      > { !loginPage ?
          <img width={"20%"}src={signupLogo} alt="Main Logo" />
         : <img width={"20%"} src={loginLogo} alt="Main Logo" />
        }

        <Flex width={"50%"} justifyContent={"center"}>
          <Button fontSize={{ base: "1rem", md: ".75rem",sm:".5rem" }} color={loginPage ? "black" : "white"} variant="plain" onClick={()=>{onClickHandle("/dashboard")}}>
            <Box /> DASHBOARD
          </Button>
          <Button fontSize={{ base: "1rem", md: ".75rem",sm:".5rem" }}  color={loginPage ? "black" : "white"} variant="plain" onClick={()=>{onClickHandle("/profile")}}>
            <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> PROFILE
          </Button>
            <Button fontSize={{ base: "1rem", md: ".75rem",sm:".5rem" }} color={loginPage ? "black" : "white"} variant="plain" onClick={()=>{onClickHandle("/")}}>
            <CircleUser /> SIGN UP
          </Button>
          <Button fontSize={{ base: "1rem", md: ".75rem",sm:".5rem" }} color={loginPage ? "black" : "white"} variant="plain" onClick={()=>{onClickHandle("/signin")}}>
            <KeyRound /> SIGN IN
          </Button>
        </Flex>

        <Button fontSize={{ base: "1rem", md: ".75rem",sm:".5rem" }} width={{base:"20%",md:"15%",sm:"12%"}} rounded="full" bg={!loginPage?"white":"linear-gradient(to bottom,#313860 0%, #151928 100%)"} color={!loginPage?"black":"white"} size={{base:"lg",sm:"sm"}}>
          Free Download
        </Button>
      </Flex>
    </Container>
  );
};

export default Header;
