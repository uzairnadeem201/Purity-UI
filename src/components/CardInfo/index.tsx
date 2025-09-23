import { Flex, Box, Text, Button, Input, Image } from "@chakra-ui/react";
import mastercard from "../../assets/cardIcons/mastercard.svg";
import visa from "../../assets/cardIcons/visa.svg";
import wallet from "../../assets/cardIcons/wallet.svg";
import paypal from "../../assets/cardIcons/paypal.svg";
import card from "../../assets/cardIcons/card.svg";
import circles from "../../assets/cardIcons/Circles.svg"
import { PencilIcon } from "lucide-react";

const CardInfo = () => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
      gap="1rem"
    >
      <Flex width={"100%"} height={"54%"} justifyContent={"space-between"}>
        <Flex width="49%" height="100%">
          <Box
            backgroundImage={`url(${card})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            padding={"1rem"}
            rounded={"lg"}
            width="100%"
            height="100%"
          >
            <Flex height="40%" justifyContent={"space-between"}>
                <Text fontSize={"1.25rem"} color={"white"} fontWeight={"bold"}>
                    PURITY UI
                </Text>
                <Box>
                    <Image src={circles} alt="circles"></Image>
                </Box>

            </Flex>
            <Flex direction={"column"} gap=".75rem">
                <Text fontSize="1.25rem" fontWeight={"bold"}>
                    7812 2139 0823 XXXX
                </Text>
                <Flex gap="1rem">
                    <Flex direction={"column"}>
                        <Text fontSize={".75rem"}>
                            Valid Thru
                        </Text>
                        <Text fontSize={".75rem"} fontWeight={"bold"}>
                            05/25
                        </Text>

                    </Flex>
                    <Flex direction={"column"}>
                        <Text fontSize={".75rem"}>
                            CVV
                        </Text>
                        <Text fontSize={".75rem"} fontWeight={"bold"}>
                            05X
                        </Text>

                    </Flex>
                </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex width={"49%"} height={"100%"} justifyContent={"space-between"}>
          <Flex
            width={"48%"}
            height={"100%"}
            bg="white"
            rounded={"lg"}
            direction={"column"}
            alignItems={"center"}
            padding={"1rem"}
          >
            <Box>
              <Image src={wallet} alt="paypal"></Image>
            </Box>

            <Text fontWeight="bold" color="black">
              Salary
            </Text>
            <Text fontSize=".75rem" fontWeight="bold" color="gray.400">
              Belong Interactive
            </Text>
            <Box
              height="1px"
              width="100%"
              background="linear-gradient(to right, #E2E8F0, #4A5568, #E2E8F0)"
              marginBottom={".5rem"}
            />
            <Text textAlign={"center"} fontWeight="bold" color="black">
              $2000
            </Text>
          </Flex>
          <Flex
            width={"48%"}
            height={"100%"}
            bg="white"
            rounded={"lg"}
            direction={"column"}
            alignItems={"center"}
            padding={"1rem"}
          >
            <Box>
              <Image src={paypal} alt="paypal"></Image>
            </Box>

            <Text fontWeight="bold" color="black">
              Paypal
            </Text>
            <Text fontSize=".75rem" fontWeight="bold" color="gray.400">
              Freelance Payment
            </Text>
            <Box
              height="1px"
              width="100%"
              background="linear-gradient(to right, #EDF2F7, #A0AEC0, #EDF2F7)"
              marginBottom={".5rem"}
            />
            <Text textAlign={"center"} fontWeight="bold" color="black">
              $2000
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width={"100%"}
        height={"45%"}
        direction={"column"}
        justifyContent={"space-between"}
        background={"white"}
        padding={"1rem"}
        rounded={"lg"}
        gap=".75rem"
      >
        <Flex width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontWeight="bold"color="black">Payment Method</Text>
          <Button
            variant={"solid"}
            background="linear-gradient(to right, #313860, #151928)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, #313860 0%, #151928 100%)",
              opacity: 0.9,
            }}
            rounded={"full"}
          >
            Add A New Card
          </Button>
        </Flex>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Flex
            width="49%"
            border="1px solid"
            borderColor="black"
            alignItems="center"
            borderRadius=".5rem"
            px="1rem"
          >
            <Box mr=".25rem">
              <Image src={visa} alt="Visa" />
            </Box>

            <Input
              flex="1"
              borderRadius=".5rem"
              placeholder="7812 2139 0823 XXXX"
              bg="transparent"
              color="black"
              border="none"
              _focus={{ boxShadow: "none", outline: "none" }}
            />

            <Box>
              <PencilIcon width={"1rem"} color="gray" />
            </Box>
          </Flex>
          <Flex
            width="49%"
            border="1px solid"
            borderColor="black"
            alignItems="center"
            borderRadius=".5rem"
            padding={".75rem"}
          >
            <Box>
              <Image src={mastercard} alt="Visa" />
            </Box>

            <Input
              flex="1"
              borderRadius=".5rem"
              placeholder="7812 2139 0823 XXXX"
              bg="transparent"
              color="black"
              border="none"
              _focus={{ boxShadow: "none", outline: "none" }}
            />

            <Box ml="1rem">
              <PencilIcon width={"1rem"} color="gray" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardInfo;
