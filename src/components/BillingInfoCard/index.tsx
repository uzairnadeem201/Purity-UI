import type {FC} from 'react'
import { Flex,Box,Text,Button } from '@chakra-ui/react'
import { Pencil,Trash } from "lucide-react"

type CompanyInfo={
    companyName:string,
    email:string,
    vat: string

}

interface BillingInfo{
    name:string,
    companyInfo:CompanyInfo
}

interface BillingInfoCardProps{
 info: BillingInfo
}

const BillingInfoCard:FC <BillingInfoCardProps> = ({info}) => {
  return (
    <Box width={"100%"} bgColor={"gray.100"} rounded={"lg"} marginTop="1rem" padding={"1rem"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text color="gray" fontSize={".85rem"} fontWeight={"bold"}>
                    {info.name}
                </Text>
                <Flex>
                    <Button variant="plain" color="red" size={"xs"}>
                        <Trash color="red"/>
                        DELETE
                    </Button>
                    <Button variant={"plain"} color="gray" size={"xs"}>
                        <Pencil color="gray"/>
                        EDIT
                    </Button>
                </Flex>
            </Flex>
            <Flex direction={"column"}>
                <Flex fontSize={".75rem"}>
                    <Text color="gray">
                    Company Name: 
                </Text>
                <Text fontWeight={"bold"} color="gray">
                    {info.companyInfo.companyName}
                </Text>
                </Flex>
                <Flex fontSize={".75rem"}>
                    <Text color="gray">
                    Email:
                </Text>
                <Text fontWeight={"bold"} color="gray">
                    {info.companyInfo.email}
                </Text>
                </Flex>
                <Flex fontSize={".75rem"}>
                    <Text color="gray">
                    VAT NO: 
                </Text>
                <Text fontWeight={"bold"} color="gray">
                    {info.companyInfo.vat}
                </Text>
                </Flex>
            </Flex>

        </Box>
  )
}

export default BillingInfoCard