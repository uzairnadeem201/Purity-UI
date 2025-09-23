import {Flex, Container, Text, Image } from "@chakra-ui/react";
import calendar from "../../assets/transaction/calendar.svg";
import { transactions } from "@/data/billing";
import TransactionCard from "../TransactionCard";

const Transactions = () => {
  return (
    <Container
      width={"100%"}
      height={"100%"}
      bgColor={"white"}
      rounded={"lg"}
      padding={"1rem"}
    >
      <Flex justifyContent={"space-between"}>
        <Text color="black" fontWeight={"bold"}>
          Your Transaction
        </Text>
        <Flex alignItems={"center"}>
          <Image src={calendar} alt="calendar"></Image>
          <Text fontSize={".75rem"} color="gray">
            23-30 March 2025
          </Text>
        </Flex>
      </Flex>
      <Text color="gray" fontWeight={"bold"} fontSize={".75rem"} marginY="1rem">
        Newest
      </Text>
      {transactions.map((transaction)=>{
        return(
            <TransactionCard transaction = {transaction}/>
        )
      })}
      
    </Container>
  );
};

export default Transactions;
