import{Container,Text} from "@chakra-ui/react"
import BillingInfoCard from "../BillingInfoCard"
import { billingInfos } from "@/data/billing"
const BillingInfo = () => {
  return (
    <Container padding={"1rem"} bgColor={"white"} rounded={"lg"} marginBottom={"1rem"} height={"100%"} overflowY={"auto"}>
        <Text color={"black"} fontWeight={"bold"} >
            Billing Information
        </Text>
        {billingInfos.map((info)=>{
            return(
                <BillingInfoCard info = {info}/>
            )
        })}
        
    </Container>
  )
}

export default BillingInfo