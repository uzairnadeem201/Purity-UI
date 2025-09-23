import {Flex,Container} from "@chakra-ui/react"
import CardInfo from "@/components/CardInfo"
import Invoices from "@/components/Invoices"
import BillingInfo from "@/components/BillingInfo"
import Transactions from "@/components/Transaction"
const Billing = () => {
  return (
    <Container>
      <Flex width={"100%"} height={"45vh"} justifyContent={"space-between"}>
          <Flex width={"59%"} height={"100%"}>
            <CardInfo/>
          </Flex>
          <Flex width={"39%"} height={"100%"}>
            <Invoices/>
          </Flex>
      </Flex>
      <Flex height={"55vh"} width={"100%"} justifyContent={"space-between"} marginTop={"1rem"}>
          <Flex width={"44%"} height={"100%"}>
              <BillingInfo/>
          </Flex>
          <Flex height={"100%"} width={"55%"}>
              <Transactions/>
          </Flex>
      </Flex>

    </Container>
  )
}

export default Billing