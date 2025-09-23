import {Flex,Box,Image,Text} from "@chakra-ui/react"
import type {FC} from "react"
import plus from "../../assets/transaction/plus.svg";
import minus from "../../assets/transaction/minus.svg";
interface transactionCardProps{
  transaction: {
  name: string;
  date: string;
  time: string;
  value: number;
  sent: boolean;
}
}
const TransactionCard:FC<transactionCardProps> = ({transaction}) => {
  return (
    <Flex justifyContent={"space-between"} marginY={"1rem"}>
        <Flex alignItems={"center"} gap="1rem">
            <Box><Image src={transaction.sent ? plus : minus} alt="status"></Image></Box>
          
          <Flex direction={"column"}>
            <Text fontWeight={"bold"} color="black">
              {transaction.name}
            </Text>
            <Text color="gray" fontSize={".75rem"}>{transaction.date} at {transaction.time}</Text>
          </Flex>
        </Flex>
        {
           transaction.sent ? <Text fontWeight={"bold"} color={"red"}>-${transaction.value}</Text> :
           <Text fontWeight={"bold"}  color={"green"}>+${transaction.value}</Text>
        }
        
      </Flex>
  )
}

export default TransactionCard