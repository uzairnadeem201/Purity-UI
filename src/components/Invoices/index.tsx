import { Text, Flex, Box, Button, Image } from "@chakra-ui/react";
import pdf from "../../assets/cardIcons/pdf.svg";
import { invoices } from "@/data/billing";
const Invoices = () => {
  
  return (
    <Flex
      width="100%"
      height={"100%"}
      backgroundColor={"white"}
      rounded={"lg"}
      padding={"1rem"}
      direction={"column"}
      gap="1rem"
    >
      <Flex width="100%" justifyContent={"space-between"} alignItems={"center"}>
        <Text color="black" fontWeight={"bold"}>
          Invoices
        </Text>
        <Button
          variant={"solid"}
          borderColor={"teal.300"}
          borderRadius={"lg"}
          color="teal.400"
        >
          View All
        </Button>
      </Flex>
      <Flex direction={"column"} width={"100%"} gap="1rem" overflowY={"auto"}>
        {invoices.map((invoice) => {
          return (
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Flex direction={"column"}>
                <Text color="black" fontSize={"1rem"} fontWeight={"bold"}>
                  {invoice.date}
                </Text>
                <Text color={"gray"} fontSize={".75rem"} fontWeight={"bold"}>
                  {invoice.id}
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="1rem">
                <Text color="gray" fontWeight={"bold"}>
                  ${invoice.amount}
                </Text>
                <Box>
                  <Image src={pdf} alt="pdf"></Image>
                </Box>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Invoices;
